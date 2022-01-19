import {
  SET_CHOSEN_WRITING,
  RESET_CHOSEN_WRITING,
  FETCH_WRITING_STATE,
  FETCH_WRITING_LIST,
} from 'redux/actions/writingActions';

const initialState = {
  chosenWriting: [],
  writingList: [],
  writingListStatus: 'idle',
};

const writingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CHOSEN_WRITING:
      return {
        ...state,
        chosenWriting: action.payload,
      };
    case RESET_CHOSEN_WRITING:
      return {
        ...state,
        chosenWriting: undefined,
      };
    case FETCH_WRITING_STATE:
      return {
        ...state,
      };
    case FETCH_WRITING_LIST:
      return {
        ...state,
        writingList: action.payload,
        writingListStatus: 'completed',
      };
    default:
      return state;
  }
};

export default writingReducer;
