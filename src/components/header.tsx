import { FC, memo } from 'react'
import Header from '../ui/header'

const HeaderComponent: FC<HeaderComponentProps> = memo(({ children }) => {
  return (
    <div className="min-h-screen bg-stone-100">
      <div className="">
        <div className="bg-white px-3 py-4">
          <div className="mx-auto max-w-4xl">
            <Header title="Your personal account" />
          </div>
        </div>
        <div className="mx-auto mt-9 max-w-4xl pb-9">{children}</div>
      </div>
    </div>
  )
})

export default HeaderComponent
