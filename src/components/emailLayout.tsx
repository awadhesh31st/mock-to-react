import { FC } from 'react'

const EmailLayout: FC<EmailLayoutProps> = ({ title, description, children }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-0.5 px-6">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 drop-shadow-sm">{children}</div>
    </div>
  )
}

export default EmailLayout
