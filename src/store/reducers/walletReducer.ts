import {ActionType, WalletProps} from '../../types/types'

const ADD_WALLET = 'ADD_WALLET'
const DELETE_WALLET = 'DELETE_WALLET'

const initialState: WalletProps[] = []

export const walletsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_WALLET:
      return [...state, action.payload]
    case DELETE_WALLET:
      return state.filter((wallet: WalletProps) => wallet.id !== action.payload)
    default:
      return state
  }
}
