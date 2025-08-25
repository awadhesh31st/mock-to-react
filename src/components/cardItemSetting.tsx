import { FC, memo } from 'react'
import SelectDropdown from '../ui/selectDropdown'
import ToggleSwitch from '../ui/toggleSwitch'

const CardItemSetting: FC<CardItemSettingProps> = memo((props) => {
  const { setPrimaryEmail, setting, isLast, cardIndex, availableEmails, primaryEmail } = props

  const primaryOptions = availableEmails.map((email: string) => ({
    value: email,
    label: email,
  }))

  const backupOptions = [
    { value: 'Allow all verified emails', label: 'Allow all verified emails' },
    ...availableEmails.filter((email) => email !== primaryEmail).map((email) => ({ value: email, label: email })),
  ]

  return (
    <div className={`flex ${!isLast ? 'border-b border-gray-200 pb-3' : 'pb-0'}`}>
      <div
        className={`flex w-full flex-col items-start justify-between md:flex-row md:gap-0 gap-4 ${cardIndex === 0 ? '' : 'pt-3'}`}
      >
        <div className="w-full min-w-0 flex-1 flex-col gap-1.5 md:w-8/12">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="text-base font-bold text-gray-900">{setting.title}</span>
          </div>
          {setting.description && <p className="text-sm text-zinc-500">{setting.description}</p>}
        </div>
        {cardIndex === 0 && (
          <div className="relative w-full flex-shrink-0 md:w-4/12">
            <SelectDropdown
              value={props.primaryEmail}
              options={primaryOptions}
              onChange={setPrimaryEmail}
              className="max-w-sm"
            />
          </div>
        )}
        {cardIndex === 1 && (
          <div className="relative w-full flex-shrink-0 md:w-4/12">
            <SelectDropdown
              value={props.backupEmail}
              options={backupOptions}
              onChange={props.setBackupEmail}
              className="max-w-sm"
            />
          </div>
        )}
        {cardIndex === 2 && (
          <div className="relative flex w-full flex-shrink-0 items-center md:h-full md:w-4/12 md:justify-end">
            <ToggleSwitch checked={props.keepPrivate} onChange={props.setKeepPrivate} />
          </div>
        )}
      </div>
    </div>
  )
})

export default CardItemSetting
