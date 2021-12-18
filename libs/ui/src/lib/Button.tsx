import { Link } from 'react-router-dom'

export const Button = (props: ButtonProps) => {
  if (props.as === 'link' && props.href) {
    return (
      <Link className={`button ${props.className}`} to={props.href}>
        {props.children}
      </Link>
    )
  }

  if (props.as === 'a' && props.href) {
    return (
      <a className={`button ${props.className}`} href={props.href}>
        {props.children}
      </a>
    )
  }

  return (
    <button className={`button ${props.className}`}>{props.children}</button>
  )
}

type ButtonProps = {
  children: string
  className?: string
  as?: string
  href?: string
}
