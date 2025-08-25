import { FC, memo, useState } from 'react'
import Dropdown from './dropdown'
import DropdownOption from './dropdownOption'
import { icon } from '../lib'

const SelectDropdown: FC<SelectDropdownProps> = memo((props) => {
  const { value, options, onChange, placeholder = 'Select...', className = '' } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleSelect = (option: string) => {
    onChange(option)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-3 py-2 transition-colors hover:border-gray-400"
      >
        <span className="text-xs text-gray-900">{value || placeholder}</span>
        {icon.down({ size: 16, className: 'text-zinc-950' })}
      </button>
      <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)} className="left-0 right-0 top-full mt-1">
        {options.map((option) => (
          <DropdownOption
            key={option.value}
            onClick={() => handleSelect(option.value)}
            selected={value === option.value}
          >
            {option.label}
          </DropdownOption>
        ))}
      </Dropdown>
    </div>
  )
})

export default SelectDropdown
