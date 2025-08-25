import { useCallback, useState } from 'react'
import HeaderComponent from '../components/header'
import EmailLayout from '../components/emailLayout'
import { availableEmails, emails, emailSetting } from '../mock'
import CardItem from '../components/cardItem'
import CardItemSetting from '../components/cardItemSetting'

const EmailManagementPage = () => {
  const [primaryEmail, setPrimaryEmail] = useState<string>('hello@example.com')
  const [backupEmail, setBackupEmail] = useState<string>('Allow all verified emails')
  const [keepPrivate, setKeepPrivate] = useState<boolean>(true)
  const [showActionDropdown, setShowActionDropdown] = useState<number | null>(null)

  const handleActionClick = useCallback(
    (emailId: number | null) => {
      setShowActionDropdown(showActionDropdown === emailId ? null : emailId)
    },
    [showActionDropdown]
  )

  const handleManage = useCallback((emailId: number) => {
    console.log('Manage email:', emailId)
    setShowActionDropdown(null)
  }, [])

  const handleRemove = useCallback((emailId: number) => {
    console.log('Remove email:', emailId)
    setShowActionDropdown(null)
  }, [])

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
              />
            )
          })}
        </EmailLayout>
        <EmailLayout title="Email settings" description="Configure how emails are used in relation to your account.">
          {emailSetting.map((setting: Email, key: number) => {
            return (
              <CardItemSetting
                key={setting.id}
                setting={setting}
                primaryEmail={primaryEmail}
                setPrimaryEmail={setPrimaryEmail}
                backupEmail={backupEmail}
                setBackupEmail={setBackupEmail}
                keepPrivate={keepPrivate}
                setKeepPrivate={setKeepPrivate}
                availableEmails={availableEmails}
                cardIndex={key}
                isLast={emails.length - 1 === key}
              />
            )
          })}
        </EmailLayout>
      </div>
    </HeaderComponent>
  )
}

export default EmailManagementPage
