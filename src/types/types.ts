export interface WalletProps {
  id: number
  pkh: string
  balance: number
}

export interface StateType {
  wallets: WalletProps[]
}

export interface AddWalletPayload {
  payload?: WalletProps
}

export interface DeleteWalletePayload {
  payload?: number
}

export interface ActionType {
  type: string
  payload?: AddWalletPayload | DeleteWalletePayload
}
