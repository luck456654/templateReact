import { SETPAGE } from "./types"
const initialState = {
    num:10,
    count:1
}
export const reducer = (state = initialState, action) => {
     switch (action.type) {
        case SETPAGE: {
            return {
              ...state,
              num:  action.num,
              count: action.count 
            };
            
          }
    default:
            return state
        }
    }    