import { LOAD_CONTENT } from "../actionTypes/actionTypes"

export const loadContent = (data) => {
  return {
    type: LOAD_CONTENT,
    payload: data
  }
}