import { filterObject } from '.'

describe('filterObject(obj, ["keys","keys"])', () => {
  it('should filters an object and return a new object based on a set of keys', () => {
    // arrange
    const obj = {
      prop1: 'value1',
      prop2: 'value2',
      prop3: 'value3'
    }
    const keys = ['prop1', 'prop3']
    const result = {
      prop1: 'value1',
      prop3: 'value3'
    }
    // act & assert
    expect(filterObject(obj, keys)).toEqual(result)
  })

  it('should return a empty object if the keys are not in the object', () => {
    // arrange
    const obj = {
      prop1: 'value1',
      prop2: 'value2',
      prop3: 'value3'
    }
    const keys = ['prop4', 'prop5']
    // act & assert
    expect(filterObject(obj, keys)).toEqual({})
  })

  it('should return a empty object if the argument is falsy', () => {
    // arrage
    const keys = ['prop4', 'prop5']
    // act & assert
    // @ts-expect-error test a falsy value
    expect(filterObject(null, keys)).toEqual({})
  })
})
