import axios from "axios"
import { addBlog, editBlog, loadBlogs } from "../actions/actions"

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
    await axios.get(`${process.env.REACT_APP_API}/${id}`)
    .then(res => {
      dispatch(editBlog(res.data))
    })
  }
}