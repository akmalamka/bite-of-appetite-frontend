import {
  SET_KEYWORD,
  RESET_KEYWORD,
  SET_CHIPDATA,
  RESET_CHIPDATA,
} from 'redux/actions/searchFilterActions';

const initialState = {
  keyword: '',
  chipData: [],
};

const searchFilterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      };
    case RESET_KEYWORD:
      return {
        ...state,
        keyword: '',
      };
    case SET_CHIPDATA:
      return {
        ...state,
        chipData: action.payload,
      };
    case RESET_CHIPDATA:
      return {
        ...state,
        chipData: [],
      };
    default:
      return state;
  }
};

export default searchFilterReducer;
