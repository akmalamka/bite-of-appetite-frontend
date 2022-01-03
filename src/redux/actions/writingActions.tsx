export const SET_CHOSEN_WRITING = 'SET_CHOSEN_WRITING';
export const RESET_CHOSEN_WRITING = 'RESET_CHOSEN_WRITING';

export const setChosenWriting = (data: any) => (dispatch) => {
  dispatch({
    type: SET_CHOSEN_WRITING,
    payload: data,
  });
};

export const resetChosenWriting = () => (dispatch) => {
  dispatch({
    type: RESET_CHOSEN_WRITING,
  });
};
