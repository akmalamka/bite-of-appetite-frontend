export const SET_CHOSEN_RECIPE = 'SET_CHOSEN_RECIPE';

// set clicked room in room-finished page
export const setChosenRecipe = (data) => (dispatch) => {
  dispatch({
    type: SET_CHOSEN_RECIPE,
    payload: data,
  });
};
