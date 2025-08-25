type BadgeType = 'PRIMARY' | 'VERIFIED' | 'UNVERIFIED' | 'DEFAULT'

type IconProps = {
  trash: IconType
  previous: IconType
  threeDotMore: IconType
  switch: IconType
  down: IconType
  check: IconType
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
  cardIndex: number
  isLast: boolean
}

type CardItemSettingProps = {
  setting: Email
  primaryEmail: string
  setPrimaryEmail: (email: string) => void
  backupEmail: string
  setBackupEmail: (email: string) => void
  keepPrivate: boolean
  setKeepPrivate: (keep: boolean) => void
  availableEmails: string[]
  cardIndex: number
  isLast: boolean
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

type SelectDropdownProps = {
  value: string | null
  options: { label: string; value: string }[]
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

type ToggleSwitchProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  className?: string
}
