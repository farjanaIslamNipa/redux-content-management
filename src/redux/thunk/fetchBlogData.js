import axios from "axios"
import { addBlog, deleteBlog, editBlog, loadBlogs, readMore, updateBlog } from "../actions/actions"

export const loadBlogsData = () => {
  return async (dispatch) => {
    await axios.get(`${process.env.REACT_APP_API}`)
    .then(res => {
      dispatch(loadBlogs(res.data))
    })
  }
}

export const addBlogData = (data) => {
  return async (dispatch) => {
    await axios.post(`${process.env.REACT_APP_API}`, data)
    .then(res => {
      dispatch(addBlog())
    })
  }
}

export const editBlogData = (id) => {
  return async (dispatch) => {
    axios.get(`${process.env.REACT_APP_API}/${id}`)
    .then(res => {
      dispatch(editBlog(res.data))
    })
  }
}

export const updateBlogData = (data, id) => {
  return async (dispatch) => {
     axios.put(`${process.env.REACT_APP_API}/${id}`, data)
    .then(res => {
      dispatch(updateBlog())
    })
  }
}

export const deleteBlogData = (id) => {
  return async (dispatch) => {
    axios.delete(`${process.env.REACT_APP_API}/${id}`)
    .then(res => {
      dispatch(deleteBlog());
      dispatch(loadBlogsData())
    })
  }
}

export const readMoreData = (id) => {
  return async (dispatch) => {
    axios.get(`${process.env.REACT_APP_API}/${id}`)
    .then(res => {
      dispatch(readMore(res.data))
    })
  }
}