type initStateType = {
  loading: boolean
}

const initState = {
  loading: false
}

export const loadingReducer = (state: initStateType = initState, action: loadingAC): initStateType => { // fix any
  switch (action.type) {
    case 'CHANGE_LOADING': {
      return {...state, loading: action.isLoading}
    }
    default:
      return state
  }
}

type loadingAC = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
  return {
    type: 'CHANGE_LOADING',
    isLoading: isLoading
  } as const
}