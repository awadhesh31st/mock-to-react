type BadgeType = 'PRIMARY' | 'VERIFIED' | 'UNVERIFIED' | 'DEFAULT'

type IconProps = {
  trash: IconType
  previous: IconType
  threeDotMore: IconType
  switch: IconType
}

type BadgeProps = {
  children: React.ReactNode
  type: BadgeType
}

type DropdownProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className: string
}

type DropdownOptionProps = {
  onClick: () => void
  selected: boolean
  children: React.ReactNode
}

type Email = {
  id: number
  title: string
  badges?: BadgeType[]
  description: string | null
  emails?: string[]
}

type HeaderComponentProps = {
  children: React.ReactNode
}

type EmailLayoutProps = {
  title: string
  description: string
  children: React.ReactNode
}

type CardItemProps = {
  email: Email
  showActions: number | null
  onActionClick: (id: number | null) => void
  onManage: (id: number) => void
  onRemove: (id: number) => void
  isLast: boolean
  cardType: 'email' | 'setting'
}

type HeaderProps = {
  title: string
}

type ActionMenuProps = {
  isOpen: boolean
  onClose: () => void
  onManage: () => void
  onRemove: () => void
}
