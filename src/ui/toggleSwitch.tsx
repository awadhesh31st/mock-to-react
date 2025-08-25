import { FC } from 'react'

const ToggleSwitch: FC<ToggleSwitchProps> = ({ checked, onChange, className }) => {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? 'bg-stone-950' : 'bg-zinc-200'
      } ${className}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full  transition-transform ${
          checked ? 'translate-x-6 shadow-inner bg-neutral-200' : 'translate-x-1 bg-neutral-100 shadow-md'
        }`}
      />
    </button>
  )
}

export default ToggleSwitch
