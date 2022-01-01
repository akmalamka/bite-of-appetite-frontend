export const SET_CHOSEN_RECIPE = 'SET_CHOSEN_RECIPE';
export const RESET_CHOSEN_RECIPE = 'RESET_CHOSEN_RECIPE';

export const setChosenRecipe = (data: any) => (dispatch) => {
  dispatch({
    type: SET_CHOSEN_RECIPE,
    payload: data,
  });
};

export const resetChosenRecipe = () => (dispatch) => {
  dispatch({
    type: RESET_CHOSEN_RECIPE,
  });
};
