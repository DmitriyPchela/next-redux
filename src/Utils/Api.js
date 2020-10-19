import axios from 'axios'

export const Api = axios.create({
  responseType: "json",
  baseURL: "https://swapi.dev/api/"
})
