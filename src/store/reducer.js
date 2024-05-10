import { SETPAGE } from "./types"
const initialState = {
    page:1,
    count:1
}
export const reducer = (state = initialState, action) => {
    function changecon(page){
         state.page=page 
       }
    switch (action.type) {
        case SETPAGE: {
            return {
              ...state,
              page:  changecon(action.page),
              count: action.count 
            };
            
          }
    default:
            return state
        }
    }    