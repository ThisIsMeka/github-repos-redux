import axios from 'axios'

const initialState = {
  userName: '',
  list: [],
  readme: '',
  search: '',
  userData: {},
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        userName: action.name
      }
    case 'SET_REPOSITORIES':
      return {
        ...state,
        list: action.repo
      }
    case 'SET_README':
      return {
        ...state,
        readme: action.readme
      }
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.search
      }
    case 'SET_USERDATA':
      return {
        ...state,
        userData: action.user
      }
    case 'SET_ERROR':
      return { ...state, error: true }
    default:
      return state
  }
}

export function updateUsername(name) {
  return { type: 'SET_USERNAME', name }
}

export function updateRepositories(username) {
  return (dispatch) => {
    axios(`https://api.github.com/users/${username}/repos`).then(({ data }) => {
      dispatch({ type: 'SET_REPOSITORIES', repo: data })
    })
  }
}

export function searchRepository(search) {
  return { type: 'SET_SEARCH', search }
}

export function updateReadme(username, readme) {
  const headers = { Accept: 'application/vnd.github.VERSION.raw' }
  return (dispatch) => {
    axios(`https://api.github.com/repos/${username}/${readme}/readme`, { headers }).then(
      ({ data }) => {
        dispatch({ type: 'SET_README', readme: data })
      }
    )
  }
}

export function updateUserData(username) {
  return (dispatch) => {
    axios(`https://api.github.com/users/${username}`)
      .then(({ data }) => {
        dispatch({ type: 'SET_USERDATA', user: data })
      })
      .catch(() => dispatch({ type: 'SET_ERROR' }))
  }
}
