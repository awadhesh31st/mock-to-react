import { FC } from 'react'
import Dropdown from './dropdown'
import { icon } from '../lib'

const ActionMenu: FC<ActionMenuProps> = ({ isOpen, onClose, onManage, onRemove }) => {
  return (
    <Dropdown isOpen={isOpen} onClose={onClose} className="right-0 top-7 w-32 py-1">
      <button
        onClick={onManage}
        className="flex w-full items-center gap-2 rounded-lg px-2 py-1 text-left text-sm text-gray-700 hover:bg-gray-100"
      >
        <icon.switch size={14} />
        Manage
      </button>
      <button
        onClick={onRemove}
        className="flex w-full items-center gap-2 rounded-lg px-2 py-1 text-left text-sm text-red-600 hover:bg-red-50"
      >
        <icon.trash size={14} />
        Remove
      </button>
    </Dropdown>
  )
}

export default ActionMenu
