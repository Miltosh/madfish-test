import './Button.scss'

interface ButtonProps {
  title?: string
  onClick?: () => void
}

export const Button = ({title, onClick}: ButtonProps) => (
  <button className="button-container" onClick={onClick}>
    {title}
  </button>
)
