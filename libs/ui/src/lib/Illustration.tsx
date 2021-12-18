export const Illustration = (props: Props) => {
  return (
    <img
      src={props.src}
      alt={`Credits to @${props.credits}`}
      title={`Credits to @${props.credits}`}
      className={props.className}
    />
  )
}

type Props = {
  src: string
  credits: string
  className?: string
}
