import 'jest'
import { objSwap } from './index'

describe('objSwap', () => {
	it('test with {a:"1",b:"2",c:"3"}', () => {
		expect.assertions(1)
		expect(objSwap({ a: '1', b: '2', c: '3' })).toEqual({
			'1': 'a',
			'2': 'b',
			'3': 'c',
		})
	})
})
