import axios from 'axios'

const API = axios.create({
  baseURL: `https://api.nasa.gov/neo/rest/v1/`,
})

const APIkey = 'Mb2v66V8VCbHN7IJ8L1qdko6uLdPqcK6Cc3FV2xt'

export { API, APIkey }
