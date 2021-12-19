import { ChangeEventHandler, forwardRef } from 'react'

type InputProps = {
  label: string
  name: string
  className?: string
  autoComplete?: string
  type: string
  required?: boolean
}

export const Input = forwardRef((props: InputProps, ref: any) => {
  return (
    <div>
      <label htmlFor={props.name} className="block text-sm font-semibold ">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        autoComplete={props.autoComplete}
        className="input"
        ref={ref}
        required={props.required}
      />
    </div>
  )
})

export const Checkbox = (props: CheckboxProps) => {
  const _onChange: ChangeEventHandler = e => {
    if (props.onChange) props.onChange((e.target as any).checked)
  }

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          onChange={_onChange}
          name={props.name}
          type="checkbox"
          className="cursor-pointer focus:ring-primary-lighter h-4 w-4 text-primary border-gray-300 rounded"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={props.name} className="font-medium">
          {props.label}
        </label>
      </div>
    </div>
  )
}
type CheckboxProps = {
  label: string
  name: string
  className?: string
  onChange?: (...props: any) => void
}
