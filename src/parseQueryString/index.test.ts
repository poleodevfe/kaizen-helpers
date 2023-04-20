import { parseQueryString } from '.'

describe('parseQueryString', () => {
  test('should return an empty object when given an empty string', () => {
    // arrange
    const input = ''

    // act
    const result = parseQueryString(input)

    // assert
    expect(result).toEqual({})
  })

  test('should return an object with key-value pairs when given a valid query string', () => {
    // arrange
    const input = '?key1=value1&key2=value2'

    // act
    const result = parseQueryString(input)

    // assert
    expect(result).toEqual({
      key1: 'value1',
      key2: 'value2'
    })
  })

  test('should decode URL-encoded characters', () => {
    // arrange
    const input = '?key%20with%20spaces=value%20with%20spaces'

    // act
    const result = parseQueryString(input)

    // assert
    expect(result).toEqual({
      'key with spaces': 'value with spaces'
    })
  })

  test('should ignore the leading question mark', () => {
    // arrange
    const input = '?key=value'

    // act
    const result = parseQueryString(input)

    // assert
    expect(result).toEqual({
      key: 'value'
    })
  })
})
