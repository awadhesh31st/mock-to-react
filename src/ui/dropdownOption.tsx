import { FC, memo } from 'react'
import { icon } from '../lib'

const DropdownOption: FC<DropdownOptionProps> = memo((props) => {
  return (
    <button
      onClick={props.onClick}
      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-gray-900 hover:bg-zinc-100"
    >
      <span className="text-xs">{props.children}</span>
      {props.selected && <icon.check className="size-3 text-black" />}
    </button>
  )
})

export default DropdownOption
