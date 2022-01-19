export const SET_CHOSEN_WRITING = 'SET_CHOSEN_WRITING';
export const RESET_CHOSEN_WRITING = 'RESET_CHOSEN_WRITING';
export const FETCH_WRITING_STATE = 'FETCH_WRITING_STATE';
export const FETCH_WRITING_LIST = 'FETCH_WRITING_LIST';

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

export const fetchWritingState = () => (dispatch) => {
  dispatch({
    type: FETCH_WRITING_STATE,
  });
};

export const fetchWritingList = (data: any) => (dispatch) => {
  dispatch({
    type: FETCH_WRITING_LIST,
    payload: data,
  });
};
