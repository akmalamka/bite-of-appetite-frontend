export const SET_KEYWORD = 'SET_KEYWORD';
export const RESET_KEYWORD = 'RESET_KEYWORD';
export const SET_CHIPDATA = 'SET_CHIPDATA';
export const RESET_CHIPDATA = 'RESET_CHIPDATA';

export const setKeyword = (data: any) => (dispatch) => {
  dispatch({
    type: SET_KEYWORD,
    payload: data,
  });
};

export const resetKeyword = () => (dispatch) => {
  dispatch({
    type: RESET_KEYWORD,
  });
};

export const setChipdata = (data: any) => (dispatch) => {
  dispatch({
    type: SET_CHIPDATA,
    payload: data,
  });
};

export const resetChipdata = () => (dispatch) => {
  dispatch({
    type: RESET_CHIPDATA,
  });
};
