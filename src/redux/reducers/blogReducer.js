import { ADD_BLOG, EDIT_BLOG, LOAD_BLOGS } from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  blog: {},
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
    case EDIT_BLOG:
      return {
        ...state,
        blog: action.payload
      }
    default:
      return state;
  }
}

export default blogReducer;