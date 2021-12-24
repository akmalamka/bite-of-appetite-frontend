import { SET_CHOSEN_RECIPE } from 'redux/actions/recipeActions';

const initialState = {
  chosenRecipe: [],
};

const recipeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CHOSEN_RECIPE:
      return {
        ...state,
        chosenRecipe: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
