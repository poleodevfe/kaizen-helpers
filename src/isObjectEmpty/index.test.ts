import { isObjectEmpty } from '.'

describe('isObjectEmpty(object)', () => {
  it('should return true if object its empty', () => {
    expect(isObjectEmpty({})).toBeTruthy()
  })

  it('should return false if object have properties', () => {
    expect(isObjectEmpty({ prop: 'value' })).toBeFalsy()
  })

  it('should return true if entry value its falsy', () => {
    // @ts-expect-error error when entry value its falsy
    expect(isObjectEmpty(null)).toBeTruthy()
  })
})
