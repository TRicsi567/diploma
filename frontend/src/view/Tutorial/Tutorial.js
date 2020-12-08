import React from 'react'
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles'
import CodeEditor from 'view/components/CodeEditor'
import TutorialContent from 'view/components/TutorialContent'
import { useRouteMatch } from 'react-router-dom'
import { useAsync } from 'react-async'
import { useAppDispatch } from 'view/App/context'
import { setLoading } from 'view/App/actions'
import { Typography, Tabs, Tab, fade } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import TabPanel from 'view/components/TabPanel'
import Exercises from 'view/Exercises'
import { promiseFn, tabValues } from './state'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: [[theme.spacing(5), theme.spacing(2)]],
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  codeEditor: {
    marginTop: theme.spacing(4),
  },
  description: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: fade(theme.palette.colors.fg1, 0.1),
    marginBottom: theme.spacing(2),
    borderLeft: [['solid', 4, theme.palette.colors.blue]],
    paddingLeft: theme.spacing(2),
    minHeight: 100,
  },
}))

const Tutorial = () => {
  const classes = useStyles()

  const { params } = useRouteMatch()
  const dispatch = useAppDispatch()
  const [activeTab, setActiveTab] = React.useState(tabValues.TUTORIAL)

  const switchToExercises = React.useCallback(() => {
    setActiveTab(tabValues.EXERCISE)
  }, [])

  const { isLoading, data = {} } = useAsync({
    promiseFn,
    url_alias: params.id,
  })

  React.useLayoutEffect(() => {
    dispatch(setLoading({ payload: isLoading }))
  }, [isLoading, dispatch])

  return (
    <div className={classes.root}>
      <Typography variant='h4' align='center' className={classes.title}>
        {isLoading ? <Skeleton /> : data.name}
      </Typography>
      <Tabs
        value={activeTab}
        centered
        onChange={(event, newValue) => {
          setActiveTab(newValue)
        }}
      >
        <Tab value={tabValues.TUTORIAL} label='Lecke' />
        <Tab value={tabValues.EXERCISE} label='Feladatok' />
      </Tabs>
      <TabPanel
        index={tabValues.TUTORIAL}
        value={activeTab}
        className={classes.root}
      >
        <div className={classes.description}>
          <Typography align='justify'>
            {isLoading ? <Skeleton /> : data.description}
          </Typography>
        </div>
        <TutorialContent
          slides={data.slides}
          switchToExercises={switchToExercises}
        />
        <CodeEditor className={classes.codeEditor} />
      </TabPanel>
      <TabPanel
        index={tabValues.EXERCISE}
        value={activeTab}
        className={classes.root}
      >
        {isLoading || <Exercises data={data.exercise} />}
      </TabPanel>
    </div>
  )
}

export { Tutorial as default }
