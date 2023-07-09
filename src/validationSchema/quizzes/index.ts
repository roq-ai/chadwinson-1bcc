import * as yup from 'yup';

export const quizValidationSchema = yup.object().shape({
  score: yup.number().integer().required(),
  user_id: yup.string().nullable(),
});
