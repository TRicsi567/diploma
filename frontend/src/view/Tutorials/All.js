import React from 'react'
import { Grow } from '@material-ui/core'
import TutorialCard from 'view/components/TutorialCard'
import { useHistory } from 'react-router-dom'
import { useAppState } from 'view/App/context'
import { useStylesAll } from './styles'

const All = () => {
  const classes = useStylesAll()
  const history = useHistory()
  const { tutorials } = useAppState()

  const navigateToTutorial = React.useCallback(
    (tutorialName, difficulty) => (event) => {
      history.push(`/tutorials/${difficulty}/${tutorialName}`)
    },
    [history]
  )

  return (
    <div className={classes.root}>
      {Object.values(tutorials)
        .flat()
        .map((tutorial) => (
          <Grow key={tutorial.id} in>
            <div>
              <TutorialCard
                title={tutorial.name}
                description={tutorial.description}
                difficulty={tutorial.difficulty}
                onClick={navigateToTutorial(
                  tutorial.url_alias || tutorial.id,
                  tutorial.difficulty
                )}
                imageSrc={
                  tutorial.image &&
                  (tutorial.image.thumbnails
                    ? tutorial.image.thumbnails['medium-contain']
                    : tutorial.image.src)
                }
              />
            </div>
          </Grow>
        ))}
    </div>
  )
}

export { All as default }
