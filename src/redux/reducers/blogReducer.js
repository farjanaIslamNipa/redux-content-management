import { ADD_BLOG, DELETE_BLOG, EDIT_BLOG, FIRST_UPLOAD, LAST_UPLOAD, LOAD_BLOGS, UPDATE_BLOG } from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  blog: {},
  loading: true,
  lastUploads: []
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
    case UPDATE_BLOG:
    case DELETE_BLOG:
      return{
        ...state,
        loading: false
      }
    case EDIT_BLOG:
      return {
        ...state,
        blog: action.payload
      }
    case LAST_UPLOAD:
      return {
        ...state,
        blogs: state.blogs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).reverse()
      }
    case FIRST_UPLOAD:
      return {
        ...state,
        blogs: state.blogs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      }
    default:
      return state;
  }
}

export default blogReducer;