import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Footer from 'view/Footer';
import Header from 'view/Header';
import SideDrawer from 'view/SideDrawer';
import directus from 'directus';
import { useAppDispatch } from 'state/App/context';
import { setHomePageContent, setTutorials } from 'state/App/actions';
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
    display: 'flex',
    flexDirection: 'column',
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
  const [{ data }, { data: imagesRaw }, { data: homePage }] = await Promise.all(
    [
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
      directus.getItems('home', { single: 1 }),
    ]
  );

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

  dispatch(setTutorials({ payload: result }));
  dispatch(setHomePageContent({ payload: homePage.content }));
  return result;
};

const PageSkeleton = ({ children }) => {
  const classes = useStyles();

  const [menuOpen, setMenuOpen] = React.useState(false);

  const dispatch = useAppDispatch();

  const { isLoading } = useAsync({ promiseFn, dispatch });

  return (
    <div className={classes.root}>
      <div>
        <Header
          onMenuClick={() => {
            setMenuOpen(true);
          }}
        />
        {isLoading && <LinearProgress />}
      </div>
      <SideDrawer
        open={menuOpen}
        onClose={() => {
          setMenuOpen(false);
        }}
        onOpen={() => {
          setMenuOpen(true);
        }}
      />
      {isLoading || <div className={classes.content}>{children}</div>}
      <Footer />
    </div>
  );
};

export { PageSkeleton as default };
