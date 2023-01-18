import { ADD_BLOG, LOAD_BLOGS } from "../actionTypes/actionTypes"

export const loadBlogs = (data) => {
  return {
    type: LOAD_BLOGS,
    payload: data
  }
}

export const addBlog = () => {
  return {
    type: ADD_BLOG
  }
}