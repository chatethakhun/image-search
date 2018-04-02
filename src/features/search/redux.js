import axios from 'axios'
import { axiosFetchUnsplash } from '../../common/config'
const initialState = {
  text: '',
  loading: false,
  image: []
}

const SET_TEXT = 'SET_TEXT'
const SEARCH_IMAGE = "SEARCH_IMAGE"
const SEARCH_IMAGE_PENDING = "SEARCH_IMAGE_PENDING"
const SEARCH_IMAGE_FULFILLED = "SEARCH_IMAGE_FULFILLED"
const SEARCH_IMAGE_REJECTED = "SEARCH_IMAGE_REJECTED"
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.text
      }
    case SEARCH_IMAGE_PENDING: 
      return {
        loading: true ,
        text: ''
      }
    case SEARCH_IMAGE_FULFILLED: 
      return {
        loading: false,
        image: action.payload
      }
    case SEARCH_IMAGE_REJECTED: 
      return {
        loading: false
      }
    default:
      return state
  }
}

export const setText = text => ({
  type: SET_TEXT,
  text
})

export const handleSearch = keyword => ({
  type: SEARCH_IMAGE,
  payload: new Promise((resolve, reject) => {
    axiosFetchUnsplash.get(keyword).then(({data}) => {
      //console.log(data.results)
      if(data.results) {
        resolve(data.results)
      }
    })
  })
})

// export const searchImage = keyword => ({
//   type: SEARCH_IMAGE,
//   payload: axios.get()
// })
