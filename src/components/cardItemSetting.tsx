import { FC, memo } from 'react'
import SelectDropdown from '../ui/selectDropdown'

const CardItemSetting: FC<CardItemSettingProps> = memo((props) => {
  const { setPrimaryEmail, setting, isLast, cardIndex } = props

  const primaryOptions = props.availableEmails.map((email: string) => ({
    value: email,
    label: email,
  }))

  return (
    <div className={`flex ${!isLast ? 'border-b border-gray-200 pb-3' : 'pb-0'}`}>
      <div
        className={`flex w-full flex-col items-start justify-between gap-1 md:flex-row ${cardIndex === 0 ? '' : 'pt-3'}`}
      >
        <div className="w-full min-w-0 flex-1 flex-col gap-1.5 md:w-8/12">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="text-base font-bold text-gray-900">{setting.title}</span>
          </div>
          {setting.description && <p className="text-sm text-zinc-500">{setting.description}</p>}
        </div>
        <div className="relative w-full flex-shrink-0 md:w-4/12">
          <SelectDropdown
            value={props.primaryEmail}
            options={primaryOptions}
            onChange={setPrimaryEmail}
            className="max-w-sm"
          />
        </div>
      </div>
    </div>
  )
})

export default CardItemSetting
