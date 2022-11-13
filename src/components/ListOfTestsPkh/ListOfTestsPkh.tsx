import './ListOfTestsPkh.scss'

export const ListOfTestsPkh = () => {
  const clickHandler = (event: any) => {
    let value = event.target.innerHTML
    navigator.clipboard.writeText(value)
  }

  return (
    <div className="tableWrapper">
      <h2>List of publicKeyHashes for test (click to copy on clipboard)</h2>
      <ul className="testLists">
        <li className="listElement" onClick={clickHandler}>
          tz1a17ZmuN3yrnFHFyxyxovhVKuoP5YuCdr8
        </li>
        <li className="listElement" onClick={clickHandler}>
          tz1Po3kCvcHJTPBbuntVfUQrwGo7UqDAvLr3
        </li>
        <li className="listElement" onClick={clickHandler}>
          tz1KroYSGkPbXG6mTrtQfDSUjT31vthH7vYS
        </li>
        <li className="listElement" onClick={clickHandler}>
          tz1Q8SvcHjBBihikyoEqg7bFCYwQafEU2iqb
        </li>
      </ul>
    </div>
  )
}
