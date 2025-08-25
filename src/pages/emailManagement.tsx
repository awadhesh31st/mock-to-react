import { useState } from 'react'
import HeaderComponent from '../components/header'
import EmailLayout from '../components/emailLayout'
import { emails, emailSetting } from '../mock'
import CardItem from '../components/cardItem'

const EmailManagementPage = () => {
  const [primaryEmail, setPrimaryEmail] = useState<string>('hello@example.com')
  const [backupEmail, setBackupEmail] = useState<string>('Allow all verified emails')
  const [keepPrivate, setKeepPrivate] = useState<boolean>(true)
  const [showActionDropdown, setShowActionDropdown] = useState<number | null>(null)

  const handleActionClick = (emailId: number | null) => {
    setShowActionDropdown(showActionDropdown === emailId ? null : emailId)
  }

  const handleManage = (emailId: number) => {
    console.log('Manage email:', emailId)
    setShowActionDropdown(null)
  }

  const handleRemove = (emailId: number) => {
    console.log('Remove email:', emailId)
    setShowActionDropdown(null)
  }

  const handleBackClick = () => {
    console.log('Navigate back')
  }

  return (
    <HeaderComponent>
      <div className="flex flex-col gap-8">
        <EmailLayout title="Emails" description="Emails you can use to sign in to your account.">
          {emails.map((email: Email, key: number) => {
            return (
              <CardItem
                key={email.id}
                email={email}
                showActions={showActionDropdown}
                onActionClick={handleActionClick}
                onManage={handleManage}
                onRemove={handleRemove}
                cardIndex={key}
                isLast={emails.length - 1 === key}
                cardType="email"
              />
            )
          })}
        </EmailLayout>
        <EmailLayout title="Email settings" description="Configure how emails are used in relation to your account.">
          {emailSetting.map((email: Email, key: number) => {
            return (
              <CardItem
                key={email.id}
                email={email}
                showActions={showActionDropdown}
                onActionClick={handleActionClick}
                onManage={handleManage}
                onRemove={handleRemove}
                cardIndex={key}
                isLast={emails.length - 1 === key}
                cardType="setting"
              />
            )
          })}
        </EmailLayout>
      </div>
    </HeaderComponent>
  )
}

export default EmailManagementPage
