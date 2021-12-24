import { SET_CHOSEN_WRITING } from 'redux/actions/writingActions';

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
    default:
      return state;
  }
};

export default writingReducer;
