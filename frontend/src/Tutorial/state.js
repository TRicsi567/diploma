import directus from 'api/directus';
import { v4 } from 'uuid';

export const promiseFn = async ({ url_alias }) => {
  const getTutorial = async () => {
    const { data } = await directus.getItems('tutorial', {
      single: 1,
      fields: ['id', 'name', 'slides', 'description', 'exercise'],
      filter: {
        url_alias: {
          rlike: url_alias,
        },
      },
    });
    return data;
  };

  const getExercise = async (exerciseId) => {
    const { data } = await directus.getItem('exercise', exerciseId);

    if (data.quizzes) {
      const quizzes = data.quizzes.reduce(
        (result, { question, options }) => ({
          ...result,
          [v4()]: {
            question,
            options,
          },
        }),
        {}
      );
      return { ...data, quizzes };
    }
    return { ...data, quizzes: [] };
  };

  const tutorial = await getTutorial(url_alias);

  const exercise = await getExercise(tutorial.exercise);

  const slides = tutorial.slides.map(({ slide }) =>
    slide.map(({ text, code }) => ({ text, code }))
  );

  return { ...tutorial, slides, exercise };
};

export const tabValues = {
  TUTORIAL: 'TUTORIAL',
  EXERCISE: 'EXERCISE',
};
