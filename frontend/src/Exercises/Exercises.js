import React from 'react';
import ProgrammingTask from './ProgrammingTask';
import { Formik } from 'formik';
import equal from 'array-equal';
import axios from 'api/axios';
import QuizForm from './QuizForm';

const initialCode = `#include <iostream>

int main(int argc, const char* argv[])
{
    return 0;
}
`;

const Exercises = ({ data }) => {
  const { question, solution, description, quizzes } = data;
  const initialValues = React.useMemo(
    () =>
      quizzes.reduce(
        (result, curr) => {
          return { ...result, [curr.question]: [] };
        },
        { code: initialCode }
      ),
    [quizzes]
  );

  const solutions = React.useMemo(
    () =>
      quizzes.reduce(
        (result, quiz) => ({
          ...result,
          [quiz.question]: Object.entries(quiz.options).reduce(
            (result, [key, value]) => {
              if (value) {
                result.push(key);
              }
              return result;
            },
            []
          ),
        }),
        {}
      ),
    [quizzes]
  );
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          const errors = {};

          Object.entries(values).forEach(([key, value]) => {
            if (key === 'code') {
              return;
            }
            if (!equal(value.sort(), solutions[key].sort())) {
              errors[key] = true;
            }
          });
          const { data } = await axios.post(
            'http://localhost:8089/api/compile',
            {
              code: values.code,
            }
          );

          if (
            String(data.stdout).trim().toLowerCase() !==
            solution.trim().toLowerCase()
          ) {
            errors.code = true;
          }
          actions.setErrors(errors);
        }}>
        <QuizForm quizzes={quizzes}>
          {question && (
            <ProgrammingTask question={question} description={description} />
          )}
        </QuizForm>
      </Formik>
    </div>
  );
};

export { Exercises as default };
