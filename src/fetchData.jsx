export const fetchData = async (api) => {
	const res = await fetch(api)

	if (!res.ok) {
		throw new Error(res.statusText)
	}
	return await res.json()
}
