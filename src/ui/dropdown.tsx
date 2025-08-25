import { FC } from 'react'

const Dropdown: FC<DropdownProps> = (props) => {
  if (!props.isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-10" onClick={props.onClose} />
      <div
        className={`absolute z-20 w-40 rounded-lg border border-gray-300 bg-white px-1 shadow-lg ${props.className}`}
      >
        {props.children}
      </div>
    </>
  )
}

export default Dropdown
