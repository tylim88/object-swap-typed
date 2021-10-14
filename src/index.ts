export const objSwap = <T extends { [index: string]: string }>(obj: T) => {
	const newObj: { [prop: string]: string } = {}
	for (const prop in obj) {
		newObj[obj[prop]] = prop
	}
	return newObj as { [K in keyof T as T[K]]: K }
}

export const test = objSwap({
	a: '1' as const,
	b: '2' as const,
	c: '3' as const,
})
