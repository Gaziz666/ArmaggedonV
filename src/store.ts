import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { AsteroidsReducer } from './features/asteroids'
import { AsteroidsState } from './features/asteroids/types'
import { FilterReducer } from './features/filter'
import { FilterState } from './features/filter/types'
import { loadState, saveState } from './localStore'

export type RootReducerType = {
  filterState: FilterState
  asteroidsState: AsteroidsState
}

const rootReducer = combineReducers({
  filterState: FilterReducer,
  asteroidsState: AsteroidsReducer,
})

const persistedState = loadState()

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

store.subscribe(() => {
  saveState(store.getState())
})

export default store
