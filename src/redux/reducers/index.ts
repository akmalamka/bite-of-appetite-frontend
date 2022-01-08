import recipeReducer from './recipeReducer';
import writingReducer from './writingReducer';
import searchFilterReducer from './searchFilterReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  recipe: recipeReducer,
  writing: writingReducer,
  searchFilter: searchFilterReducer,
});
