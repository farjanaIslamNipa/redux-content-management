import { ADD_BLOG, DELETE_BLOG, EDIT_BLOG, LOAD_BLOGS, UPDATE_BLOG } from "../actionTypes/actionTypes"

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
export const editBlog = (data) => {
  return {
    type: EDIT_BLOG,
    payload: data
  }
}

export const updateBlog = () => {
  return {
    type: UPDATE_BLOG
  }
}

export const deleteBlog = () => {
  return {
    type: DELETE_BLOG
  }
}