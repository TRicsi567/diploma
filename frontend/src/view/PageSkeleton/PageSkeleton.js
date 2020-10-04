import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Footer from 'view/Footer';
import Header from 'view/Header';
import SideDrawer from 'view/SideDrawer';
import directus from 'directus';
import { useAppContext } from 'state/App/context';
import { setTutorials } from 'state/App/actions';
import { useAsync } from 'react-async';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
    overflow: 'hidden',
  },
  content: {
    width: '100%',
    maxWidth: 1280,
    flexGrow: 1,
    margin: [[0, 'auto']],
  },
}));

const transformTumbnails = (thumbnails) => {
  return thumbnails
    ? thumbnails.reduce(
        (result, { key, url }) => ({
          ...result,
          [key.replace('directus-', '')]: url,
        }),
        {}
      )
    : null;
};

const promiseFn = async ({ dispatch }) => {
  const [{ data }, { data: imagesRaw }] = await Promise.all([
    directus.getItems('tutorial', {
      status: 'published',
    }),
    directus.getFiles({
      status: 'published',
      fields: ['id', 'data'],
      filter: {
        type: {
          rlike: 'image/%',
        },
      },
    }),
  ]);

  const images = imagesRaw.reduce(
    (acc, { id, data: imageData }) => ({
      ...acc,
      [id]: {
        src: imageData.full_url,
        thumbnails: transformTumbnails(imageData.thumbnails),
      },
    }),
    {}
  );

  const result = { easy: [], intermediate: [], professional: [] };

  data.forEach((tutorial) => {
    result[tutorial.difficulty].push({
      ...tutorial,
      image: images[tutorial.icon],
    });
  });

  console.log(result);
  dispatch(setTutorials({ payload: result }));
  return result;
};

const PageSkeleton = ({ children }) => {
  const classes = useStyles();

  const [menuOpen, setMenuOpen] = React.useState(false);

  const [, dispatch] = useAppContext();

  const { isLoading } = useAsync({ promiseFn, dispatch });

  return (
    <div className={classes.root}>
      <Header
        onMenuClick={() => {
          setMenuOpen(true);
        }}
      />
      <SideDrawer
        open={menuOpen}
        onClose={() => {
          setMenuOpen(false);
        }}
        onOpen={() => {
          setMenuOpen(true);
        }}
      />
      <div className={classes.content}>
        {isLoading ? <LinearProgress /> : children}
      </div>
      <Footer />
    </div>
  );
};

export { PageSkeleton as default };
