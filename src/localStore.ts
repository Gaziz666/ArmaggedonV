import { FilterState } from './features/filter/types'

type RootReducerTypeToo = {
  filterState: FilterState
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.error('cannot load state from localStore')

    return undefined
  }
}

export const saveState = (state: RootReducerTypeToo) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.error('can not save state to localStore', err)
  }
}
