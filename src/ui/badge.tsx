import { FC, memo } from 'react'

const Badge: FC<BadgeProps> = memo((props) => {
  const getBadgeClass = (badgeType: BadgeType) => {
    switch (badgeType) {
      case 'PRIMARY':
        return 'bg-orangeLight text-orangePrimary border-orangeMid'
      case 'VERIFIED':
        return 'bg-greenLight text-greenPrimary border-greenMid'
      case 'UNVERIFIED':
        return 'bg-neutralLight text-neutralDark border-neutralMid'
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200'
    }
  }

  return (
    <span className={`rounded-xl border px-2 py-1 text-xs font-semibold ${getBadgeClass(props.type)}`}>
      {props.children}
    </span>
  )
})

export default Badge
