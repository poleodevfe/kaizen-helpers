/**
 * replaceAccents replaces an accented vowel with an unaccented one
 * @param str
 * @returns string
 */
export const replaceAccents = (str: string): string => {
  if (!str) return ''
  const accentsMap: Record<string, string> = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u'
  }
  return str
    .split('')
    .map((char) => accentsMap[char] || char)
    .join('')
}

/**
 * findStringInString find a string inside another
 * @param target
 * @param search
 * @returns boolean
 */
export function findStringInString(target: string, search: string): boolean {
  if (!target || !search) return false

  const cleanedTarget = replaceAccents(target.toLowerCase())
  const cleanedSearch = replaceAccents(search.toLowerCase())

  return cleanedTarget.includes(cleanedSearch)
}
