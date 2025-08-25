import { FC, memo } from 'react'

const EmailLayout: FC<EmailLayoutProps> = memo(({ title, description, children }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-0.5 px-6">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-zinc-500">{description}</p>
      </div>
      <div className="m-4 rounded-2xl border-[0.5px] border-gray-200 bg-zinc-50 p-6 shadow-bottom md:mx-0">
        {children}
      </div>
    </div>
  )
})

export default EmailLayout
