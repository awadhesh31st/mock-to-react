import { FC, memo, useCallback } from 'react'
import { icon } from '../lib'

const Header: FC<HeaderProps> = memo(({ title }) => {
  const handleBackClick = useCallback(() => {
    console.log('Navigate back')
  }, [])

  return (
    <div className="flex items-center justify-start gap-1.5">
      <button onClick={handleBackClick}>
        <icon.previous size={18} className="text-gray-900" />
      </button>
      <h1 className="text-sm font-semibold text-gray-900">{title}</h1>
    </div>
  )
})

export default Header
