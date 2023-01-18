import axios from "axios"
import { addBlog, loadBlogs } from "../actions/actions"

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