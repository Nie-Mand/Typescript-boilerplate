import { Link } from 'react-router-dom'

export const Button = (props: ButtonProps) => {
  const width = props.fullWidth ? '' : 'w-36'
  const disabled = props.disabled && '!bg-primary-lighter'
  const className = `button ${width} ${props.className} ${disabled}`

  if (props.as === 'link' && props.href) {
    return (
      <Link className={className} to={props.href}>
        {props.children}
      </Link>
    )
  }

  if (props.as === 'a' && props.href) {
    return (
      <a className={className} href={props.href}>
        {props.children}
      </a>
    )
  }

  return (
    <button
      className={className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

type ButtonProps = {
  children: any
  className?: string
  as?: string
  href?: string
  fullWidth?: boolean
  disabled?: boolean
  onClick?: () => void
}
