const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

/** YYYY-MM-DD → YY-MM-DD 변환 */
export const formatDate = (iso: string) => {
  const [year, month, day] = iso.split('-')
  return `${year}-${month}-${day}`
}

/** '2026-07-11' → '7/11 (토)' */
export const formatSlotDate = (date: string) => {
  const [, month, day] = date.split('-')
  const weekday = WEEKDAYS[new Date(`${date}T00:00:00`).getDay()]
  return `${Number(month)}/${Number(day)} (${weekday})`
}
