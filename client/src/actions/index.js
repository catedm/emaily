import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_SURVEYS } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post('/api/surveys', values);
  // this is redirecting the user after successful survey submission
  // we have access to 'history' because of withRouter (see SurveyFormReview.js)
  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
}

export const deleteSurvey = (surveyId) => async (dispatch) => {
  const res = await axios.post('/api/surveys/delete', { surveyId });
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
}
 