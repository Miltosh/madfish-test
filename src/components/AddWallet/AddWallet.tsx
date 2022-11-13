import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {TezosToolkit} from '@taquito/taquito'
import {StateType} from '../../types/types'
import './AddWallet.scss'

const Tezos = new TezosToolkit('https://mainnet-node.madfish.solutions')

export const AddWallet = () => {
  const [pkh, setPkh] = useState<string>('')

  const dispatch = useDispatch()

  const walletsList = useSelector((state: StateType) => state)

  const addWallet = () => {
    const isDuplicate = walletsList.wallets.some((el) => el.pkh === pkh.trim())

    if (isDuplicate) {
      setPkh('')
      return alert('This phk is already added')
    }

    if (pkh.trim().length) {
      Tezos.tz
        .getBalance(pkh.trim())
        .then((b) =>
          dispatch({
            type: 'ADD_WALLET',
            payload: {id: new Date().getMilliseconds(), pkh: pkh.trim(), balance: `${b.toNumber() / 1000000} tz`}
          })
        )
        .then(() => setPkh(''))
        .catch((error) => alert('You entered the wrong key'))
    }
  }

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => setPkh(e.target.value)

  return (
    <div className="container-add-wallet">
      <Input placeholder="Enter your pkh here..." onChange={onHandleChange} value={pkh} />
      <Button title="ADD" onClick={addWallet} />
    </div>
  )
}
