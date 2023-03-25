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
