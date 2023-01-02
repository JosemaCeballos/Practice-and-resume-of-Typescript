import { MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode,
    handleClick: MouseEventHandler<HTMLButtonElement>
}

function Button({children, handleClick}: ButtonProps) {
  return (
    <button 
    className="button is-primary"
    onClick={handleClick}
    >{children}</button>
  )
}

export default Button