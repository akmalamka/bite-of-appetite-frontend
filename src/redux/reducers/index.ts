import recipeReducer from './recipeReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  recipe: recipeReducer,
});
