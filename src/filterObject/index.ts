/**
 * filterObject its a helper to return a new object based on a given keys
 * @param obj
 * @param keys an array of keys like ['prop1', 'prop2']
 * @returns a new filtered object
 */
export function filterObject(
  obj: Record<string, unknown>,
  keys: string[]
): object {
  if (!obj) return {}

  const filtered: Record<string, unknown> = {}
  Object.keys(obj).forEach((key) => {
    if (keys.includes(key)) {
      filtered[key] = obj[key]
    }
  })
  return filtered
}
