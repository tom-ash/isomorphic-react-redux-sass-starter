import { combineReducers } from 'redux'

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_ITEMS': return { ...state, ...action.value }
    default: return state
  }
}

export const appReducer = combineReducers({
  items: itemsReducer
})
