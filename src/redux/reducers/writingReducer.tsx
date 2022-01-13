import {
  SET_CHOSEN_WRITING,
  RESET_CHOSEN_WRITING,
  FETCH_WRITING_STATE,
} from 'redux/actions/writingActions';

const initialState = {
  chosenWriting: [],
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
    default:
      return state;
  }
};

export default writingReducer;
