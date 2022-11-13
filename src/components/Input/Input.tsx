import './Input.scss'

interface InputProps {
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export const Input = ({placeholder, onChange, value}: InputProps) => {
  return <input className="input" placeholder={placeholder} onChange={onChange} value={value} />
}
