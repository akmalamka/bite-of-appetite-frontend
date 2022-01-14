import {
  SET_CHOSEN_RECIPE,
  RESET_CHOSEN_RECIPE,
  FETCH_RECIPE_STATE,
} from 'redux/actions/recipeActions';

const initialState = {
  chosenRecipe: [],
  recipeTitle: '',
};

const recipeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CHOSEN_RECIPE:
      return {
        ...state,
        chosenRecipe: action.payload,
        recipeTitle: action.payload.title,
      };
    case RESET_CHOSEN_RECIPE:
      return {
        ...state,
        chosenRecipe: undefined,
        recipeTitle: undefined,
      };
    case FETCH_RECIPE_STATE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default recipeReducer;
