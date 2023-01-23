import { ADD_BLOG, DELETE_BLOG, EDIT_BLOG, FIRST_UPLOAD, LAST_UPLOAD, LOAD_BLOGS, READING_HISTORY, READ_MORE, UPDATE_BLOG } from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  blog: {},
  loading: true,
  blogView:[],
  readingHistory: []
}

const blogReducer = (state = initialState, action) => {
  const readBlog = state.readingHistory.find(blog => blog.id === action.payload.id)
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
    case READ_MORE:
      return {
        ...state,
        blogView: action.payload
      }
    case READING_HISTORY:
      if(readBlog){
        const newReadingHistory = state.readingHistory.filter(blog => blog.id !== readBlog.id)
        return {
          ...state,
          readingHistory: [...newReadingHistory, readBlog]
        }
      }
      return {
        ...state,
        readingHistory: [...state.readingHistory, action.payload]
      }
    default:
      return state;
  }
}

export default blogReducer;