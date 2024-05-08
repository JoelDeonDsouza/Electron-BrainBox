import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
const locale = navigator.language

const dateFormatter = new Intl.DateTimeFormat(locale, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'Europe/Berlin'
})

export const formatDateFormatMs = (ms: number) => dateFormatter.format(ms)

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
