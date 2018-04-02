import axios from 'axios'
export const ACCESS_KEY =
  '6f65b00fedb372a2cf9988dfcd807739a73783cab6cf1d7409e110634a79f8d5'
const baseURL = 'https://api.unsplash.com/search/photos?page=1&query='



export const axiosFetchUnsplash = axios.create({
  baseURL,
  headers:{ Authorization: `Client-ID ${ACCESS_KEY}`}
});