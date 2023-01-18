import { ADD_BLOG, LOAD_BLOGS } from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  loading: true
}

const blogReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_BLOGS:
      return {
        ...state,
        blogs: action.payload,
        loading: false
      }
    case ADD_BLOG:
      return{
        ...state,
        loading: false
      }
    default:
      return state;
  }
}

export default blogReducer;