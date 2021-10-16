import { GET_ALL_MF, SET_MF_SEARCH_RESULTS, SET_SCHEME_DATA, SET_SEARCH_TERM, SET_VISIBILITY } from "../constants/mfConstants"

const initState = {
    allMutualFunds: [],
    fiveMutualFunds: [],
    searchTerm: [],
    searchResults: [],
    schemeData: '',
    resultsVisibility: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_MF:
            return {
                ...state,
                allMutualFunds: action.data.allMutualFunds,
                fiveMutualFunds: action.data.fiveMutualFunds,
            };
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.term
            }
        case SET_MF_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.results
            }
        case SET_SCHEME_DATA:
            return {
                ...state,
                schemeData: action.scheme
            }
        case SET_VISIBILITY:
            return {
                ...state,
                resultsVisibility: action.visibility
            }
        default:
            return state;
    }
}

export default reducer;