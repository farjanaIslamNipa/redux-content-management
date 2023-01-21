import { ADD_BLOG, CLEAR_FILTER, DELETE_BLOG, EDIT_BLOG, FIRST_UPLOAD, LAST_UPLOAD, LOAD_BLOGS, UPDATE_BLOG } from "../actionTypes/actionTypes"

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

export const lastUpload = () => {
  return {
    type: LAST_UPLOAD
  }
}

export const firstUpload = () => {
  return {
    type: FIRST_UPLOAD
  }
}
export const clearFilter = () => {
  return {
    type: CLEAR_FILTER
  }
}