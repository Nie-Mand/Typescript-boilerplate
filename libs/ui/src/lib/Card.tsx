export const Card = ({ children, className }: Props) => {
  return (
    <div
      className={`bg-white shadow-xl rounded-md p-4 max-w-md min-h-[120px] ${className}`}
    >
      {children}
    </div>
  )
}

type Props = {
  children: JSX.Element | JSX.Element[]
  className?: string
}
