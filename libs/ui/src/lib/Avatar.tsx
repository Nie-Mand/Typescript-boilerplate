export const Avatar = (props: Props) => {
  return <img src={props.src} alt="Avatar" className={props.className} />
}
type Props = {
  src: string
  className?: string
}
