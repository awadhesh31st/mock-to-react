import { FC } from 'react'
import Badge from '../ui/badge'
import { icon } from '../lib'
import ActionMenu from '../ui/actionMenu'

const CardItem: FC<CardItemProps> = (props) => {
  const { email, showActions, onActionClick, onManage, onRemove, cardIndex, isLast, cardType } = props

  return (
    <div className={`flex ${!isLast ? 'border-b border-gray-200 pb-3' : 'pb-0'}`}>
      <div className={`flex w-full items-start justify-between gap-1 ${cardIndex === 0 ? '' : 'pt-3'}`}>
        <div className="min-w-0 flex-1 flex-col gap-1.5">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className={`text-sm text-gray-900 ${cardType === 'setting' ? 'font-bold' : 'font-medium'}`}>
              {email.title}
            </span>
            {email?.badges?.map((badge) => (
              <Badge key={badge} type={badge}>
                {badge}
              </Badge>
            ))}
          </div>
          {email.description && <p className="text-sm text-gray-500">{email.description}</p>}
        </div>
        {cardType === 'email' && (
          <div className="relative flex-shrink-0">
            <button
              onClick={() => onActionClick(email.id)}
              className="rounded-lg border-2 border-zinc-50 px-2 py-1 transition-colors hover:border-grayMid hover:bg-grayLight"
            >
              <icon.threeDotMore size={16} className="text-gray-600" />
            </button>
            <ActionMenu
              isOpen={showActions === email.id}
              onClose={() => onActionClick(null)}
              onManage={() => onManage(email.id)}
              onRemove={() => onRemove(email.id)}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default CardItem
