import axios from "axios"
import { loadBlogs } from "../actions/actions"

export const loadBlogsData = () => {
  return async (dispatch) => {
    await axios.get(`${process.env.REACT_APP_API}`)
    .then(res => {
      dispatch(loadBlogs(res.data))
    })
  }
}