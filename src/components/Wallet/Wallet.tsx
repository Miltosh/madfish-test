import {useDispatch} from 'react-redux'
import {WalletProps} from '../../types/types'
import './Wallet.scss'

export const Wallet = ({id, pkh, balance}: WalletProps) => {
  const dispatch = useDispatch()

  const deleteWallet = (id: number) => {
    dispatch({type: 'DELETE_WALLET', payload: id})
  }

  return (
    <div className="wallet-container">
      <div className="pkh">{pkh}</div>
      <div className="balance">{balance}</div>
      <div className="close" onClick={() => deleteWallet(id)}>
        close
      </div>
    </div>
  )
}
