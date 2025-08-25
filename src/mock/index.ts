export const availableEmails: string[] = [
  'hello@example.com',
  'alternative@example.com',
  'alternative-unverified@example.com',
]

export const emails: Email[] = [
  {
    id: 1,
    title: 'hello@example.com',
    badges: ['PRIMARY', 'VERIFIED'],
    description: 'This email address is the default for all notifications and account access.',
  },
  {
    id: 2,
    title: 'alternative@example.com',
    badges: ['VERIFIED'],
    description: null,
  },
  {
    id: 3,
    title: 'alternative-unverified@example.com',
    badges: ['UNVERIFIED'],
    description: null,
  },
]

export const emailSetting: Email[] = [
  {
    id: 1,
    title: 'Primary email address',
    description: 'Select an email to be used for account-related notifications and can be used for password reset.',
    emails: availableEmails,
  },
  {
    id: 2,
    title: 'Backup email address',
    description:
      'Your backup email address will be used as an additional destination for security-relevant account notifications and can also be used for password resets.',
  },
  {
    id: 3,
    title: 'Keep my email addresses private',
    description:
      "We'll remove your public profile email when performing web-based operations and sending email on your behalf.",
  },
]
