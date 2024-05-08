import { describe, it } from "https://deno.land/std@0.224.0/testing/bdd.ts"
import { expect } from "https://deno.land/std@0.224.0/expect/mod.ts"

import WeakValueMap from "./index.js"

describe('WeakValueMap', () => {
  const map = new WeakValueMap

  it('can set, get and delete keys', () => {
    const obj = { a: 1 }
    expect(map.set('abc', obj)).toBe(map)
    expect(map.get('abc')).toBe(obj)
    map.delete('abc')
    expect(map.get('abc')).toBeUndefined()
  })

  describe.skip('with values that are garbage collected')

  describe('#delete', () => {
    it.skip('unregisters values from the finalizer', () => {})
  })

  describe('#clear', () => {
    it('clears all entries', () => {
      map.set('abc', { a: 1 })
      map.set('xyz', { b: 2 })
      map.clear()
      expect(map.get('abc')).toBeUndefined()
      expect(map.get('xyz')).toBeUndefined()
    })

    it.skip('unregisters values from the finalizer', () => {})
  })
})
