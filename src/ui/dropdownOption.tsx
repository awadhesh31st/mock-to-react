import { FC } from 'react'
import { icon } from '../lib'

const DropdownOption: FC<DropdownOptionProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="flex w-full items-center justify-between px-3 py-2 text-left text-gray-900 hover:bg-gray-50"
    >
      <span>{props.children}</span>
      {props.selected && <icon.trash className="" />}
    </button>
  )
}

export default DropdownOption
