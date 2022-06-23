import { BUY_CAKE } from "./cakeTypes";
import { act } from "react-dom/test-utils";
interface actionType {
  type: string;
}

const initialState = {
  numOfCakes: 10,
};
const cakeReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
export default cakeReducer;
