import { replaceAccents } from '.'
import { findStringInString } from '.'

describe('findStringInString', () => {
  it('should return true if we find search value inside of target value', () => {
    // arrange
    const target = 'No, im your father'
    const search = 'your'
    // act & assert
    expect(findStringInString(target, search)).toBeTruthy()
  })

  it('should return false if we find search value inside of target value', () => {
    // arrange
    const target = 'You shall not pass!'
    const search = 'frodo'
    // act & assert
    expect(findStringInString(target, search)).toBeFalsy()
  })

  it('should return false if some entry value are falsy', () => {
    // arrage
    const target = 'test value'
    const search = null
    // act & assert
    // @ts-expect-error to return false when some value its falsy
    expect(findStringInString(target, search)).toBeFalsy()
  })
})

describe('replaceAccents', () => {
  it('should return a word with an accent without an accent', () => {
    // arrange, act & assert
    expect(replaceAccents('Verónica')).toEqual('Veronica')
  })

  it('should return a empty string when entry value is falsy', () => {
    // arrange, act & assert
    // @ts-expect-error return empty string when entry value its falsy
    expect(replaceAccents(null)).toEqual('')
  })
})
