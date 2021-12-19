export const If = (props: IfProps) => {
  if (props.condition) return props.children

  return null
}

type IfProps = {
  children: any
  condition: boolean
}
