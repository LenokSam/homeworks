import {UserType} from '../HW8';

type actionType = sortUpACType | checkACType


export const homeWorkReducer = (state: Array<UserType>, action: actionType): Array<UserType> => { // need to fix any
  switch (action.type) {
    case 'sort': {
      const sortState = [...state].sort((a: UserType, b: UserType) => a.name > b.name ? 1 : -1)
      return action.payload === 'up' ? sortState : sortState.reverse()
    }
    case 'check': {
      return state.filter(a => a.age > 18)
    }
    default:
      return state
  }
}


type sortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = (sortType: 'up' | 'down') => {
  return {
    type: 'sort',
    payload: sortType
  } as const
}

type checkACType = ReturnType<typeof checkAC>
export const checkAC = (age: number) => {
  return {
    type: 'check',
    payload: age
  } as const
}