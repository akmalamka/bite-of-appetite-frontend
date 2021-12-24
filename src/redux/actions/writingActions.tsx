export const SET_CHOSEN_WRITING = 'SET_CHOSEN_WRITING';

// set clicked room in room-finished page
export const setChosenWriting = (data) => (dispatch) => {
  dispatch({
    type: SET_CHOSEN_WRITING,
    payload: data,
  });
};
