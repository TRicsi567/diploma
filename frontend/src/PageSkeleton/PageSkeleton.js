import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Footer from 'components/Footer';
import Header from 'components/Header';
import SideDrawer from 'components/SideDrawer';
import directus from 'api/directus';
import { useAppDispatch, useAppState } from 'App/context';
import { setHomePageContent, setLoading, setTutorials } from 'App/actions';
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
  const { loading } = useAppState();

  const { isLoading } = useAsync({ promiseFn, dispatch });

  React.useLayoutEffect(() => {
    dispatch(setLoading({ payload: isLoading }));
  }, [isLoading, dispatch]);

  return (
    <div className={classes.root}>
      <div>
        <Header
          onMenuClick={() => {
            setMenuOpen(true);
          }}
        />
        {loading && <LinearProgress />}
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
      <div className={classes.content}>{children}</div>
      <Footer />
    </div>
  );
};

export { PageSkeleton as default };
