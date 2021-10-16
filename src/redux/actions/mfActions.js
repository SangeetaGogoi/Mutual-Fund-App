import {
    GET_ALL_MF,
    SET_MF_SEARCH_RESULTS,
    SET_SCHEME_DATA,
    SET_SEARCH_TERM,
    SET_VISIBILITY
  } from "../constants/mfConstants"
  
  export const setMFData = (data) => {
    return {
      type: GET_ALL_MF,
      data
    }
  }
  
  export const setMFSearchTerm = (term) => {
    return {
      type: SET_SEARCH_TERM,
      term
    }
  }
  
  export const setMFSearchResults = (results) => {
    return {
      type: SET_MF_SEARCH_RESULTS,
      results
    }
  }
  
  export const setSchemeData = (scheme) => {
    return {
      type: SET_SCHEME_DATA,
      scheme
    }
  }
  
  export const setVisibility = (visibility) => {
    return {
      type: SET_VISIBILITY,
      visibility
    }
  }