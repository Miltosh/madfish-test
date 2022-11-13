import './App.scss'

import {AddWallet} from './components/AddWallet'
import {ListOfTestsPkh} from './components/ListOfTestsPkh'
import {WalletsList} from './components/WalletsList'

const App = () => {
  return (
    <div className="App">
      <AddWallet />
      <WalletsList />
      <ListOfTestsPkh />
    </div>
  )
}

export default App
