import React from 'react';
import { IconButton, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { useAppState } from 'view/App/context';
import htmlParser from 'html-react-parser';
import CodeHighlighter from './CodeHighlighter';
import { fade } from '@material-ui/core/styles/colorManipulator';

const clamp = ({ num, max, min }) => {
  if (num <= min) {
    return min;
  }

  if (num >= max) {
    return max;
  }

  return num;
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    flexGrow: 1,
  },
  button: {
    backgroundColor: fade(theme.palette.colors.bg0, 0.1),
    flexShrink: 0,
    flexGrow: 0,
    height: '100%',
    '& svg': {
      fill: theme.palette.colors.fg1,
    },
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    overflow: 'hidden',
    '& a': {
      color: theme.palette.colors.violet,
      '&:active': {
        color: theme.palette.colors.violet,
      },
      '&:visited': {
        color: theme.palette.colors.blue,
      },
    },
  },
  scrollWrapper: {
    padding: [[0, theme.spacing(3)]],
    overflowX: 'hidden',
    overflowY: 'auto',
    '& p': {
      fontSize: 16,
    },
  },
}));

const useProgress = ({ slides, setDone, setState }) => {
  const totalProgress = React.useMemo(() => {
    if (!slides) {
      return 0;
    }

    return slides.reduce((sum, current) => sum + current.length, 0) - 1;
  }, [slides]);

  const handlePrevious = () => {
    setState(({ step, slide, progress }) => {
      if (slide === 0 && step - 1 < 0) {
        return { step, slide, progress: 0 };
      }

      if (step - 1 < 0) {
        return {
          step: slides[slide - 1].length - 1,
          slide: clamp({ num: slide - 1, min: 0, max: slides.length - 1 }),
          progress: progress - 1,
        };
      }
      return { slide, step: step - 1, progress: progress - 1 };
    });
  };

  const handleNext = () => {
    setState(({ step, slide, progress }) => {
      if (slide === slides.length - 1 && step === slides[slide].length - 1) {
        setDone(true);
        return { step, slide, progress: totalProgress };
      }

      if (step + 1 > slides[slide].length - 1) {
        return {
          step: 0,
          slide: clamp({ num: slide + 1, min: 0, max: slides.length - 1 }),
          progress: progress + 1,
        };
      }

      return { slide, step: step + 1, progress: progress + 1 };
    });
  };

  return { handlePrevious, handleNext, totalProgress };
};

const ProgressView = ({ slides, setDone, setState, state }) => {
  const classes = useStyles();

  const { handlePrevious, handleNext, totalProgress } = useProgress({
    slides,
    setDone,
    setState,
  });
  const { loading } = useAppState();

  const progressPercent = Math.round((state.progress / totalProgress) * 100);

  const content = (() => {
    if (!slides) {
      return null;
    }
    return slides[state.slide]
      .slice(0, state.step + 1)
      .reduce((result, step) => {
        if (step.text) {
          result.push(
            <React.Fragment key={step.text}>
              {htmlParser(step.text)}
            </React.Fragment>
          );
        }
        if (step.code) {
          result.push(
            <CodeHighlighter key={step.code}>{step.code}</CodeHighlighter>
          );
        }

        return result;
      }, []);
  })();

  const scrollRef = React.useRef(null);

  React.useLayoutEffect(() => {
    (() => {
      if (!scrollRef.current) {
        return;
      }

      const { scrollHeight } = scrollRef.current;

      scrollRef.current.scrollTo({
        top: scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    })();
  });

  return (
    <div className={classes.root}>
      <IconButton
        className={classes.button}
        onClick={handlePrevious}
        data-testid='previous-step-button'
        disabled={
          clamp({
            num: progressPercent,
            min: 0,
            max: 100,
          }) === 0
        }
      >
        <ChevronLeft fontSize='large' />
      </IconButton>
      <div
        className={classes.content}
        hidden={loading}
        data-testid='slideshow-canvas'
      >
        <div className={classes.scrollWrapper} ref={scrollRef}>
          {content}
        </div>
        <LinearProgress
          variant='determinate'
          color='secondary'
          value={
            loading
              ? 0
              : clamp({
                  num: progressPercent,
                  min: 0,
                  max: 100,
                })
          }
        />
      </div>
      <IconButton
        className={classes.button}
        onClick={handleNext}
        data-testid='next-step-button'
      >
        <ChevronRight fontSize='large' />
      </IconButton>
    </div>
  );
};

export { ProgressView as default };
