import {useSelector} from 'react-redux'
import {WalletProps} from '../../types/types'
import {Wallet} from '../Wallet/Wallet'

interface StateType {
  wallets: WalletProps[]
}

export const WalletsList = () => {
  const walletsList = useSelector((state: StateType) => state.wallets)
  return (
    <>
      {walletsList.map(({id, pkh, balance}: WalletProps) => (
        <Wallet key={id} id={id} pkh={pkh} balance={balance} />
      ))}
    </>
  )
}
