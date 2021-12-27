import { SET_CHOSEN_RECIPE } from 'redux/actions/recipeActions';

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
    default:
      return state;
  }
};

export default recipeReducer;
