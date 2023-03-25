/**
 * isObjectEmpty validate if the given object have properties
 * @param obj
 * @returns boolean
 */
export function isObjectEmpty(obj: Record<string, unknown>): boolean {
  if (!obj) return true
  return Object.keys(obj).length === 0
}
