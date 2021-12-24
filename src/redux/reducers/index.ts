import recipeReducer from './recipeReducer';
import writingReducer from './writingReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  recipe: recipeReducer,
  writing: writingReducer,
});
