const idRegex = /^[a-zA-Z0-9-_]{11}$/
const validateID = id => idRegex.test(id.trim())

const validQueryDomains = new Set([
	'youtube.com',
	'www.youtube.com',
	'm.youtube.com',
	'music.youtube.com',
	'gaming.youtube.com'
])
const validPathDomains = /^https?:\/\/(youtu\.be\/|(www\.)?youtube\.com\/(embed|v|shorts)\/)/
const getURLVideoID = link => {
	const parsed = new URL(link.trim())
	let id = parsed.searchParams.get('v')
	if (validPathDomains.test(link.trim()) && !id) {
		const paths = parsed.pathname.split('/')
		id = parsed.host === 'youtu.be' ? paths[1] : paths[2]
	} else if (parsed.hostname && !validQueryDomains.has(parsed.hostname)) {
		throw Error('Not a YouTube domain')
	}
	if (!id) {
		throw Error(`No video id found: "${link}"`)
	}
	id = id.substring(0, 11)
	if (!validateID(id)) {
		throw TypeError(`Video id (${id}) does not match expected ` + `format (${idRegex.toString()})`)
	}
	return id
}

const urlRegex = /^https?:\/\//
const getVideoID = str => {
	if (validateID(str)) {
		return str
	} else if (urlRegex.test(str.trim())) {
		return getURLVideoID(str)
	} else {
		throw Error(`No video id found: ${str}`)
	}
}

const validateURL = url => {
	try {
		getURLVideoID(url)
		return true
	} catch (e) {
		return false
	}
}

module.exports = {
	validateID,
	validateURL,
	getURLVideoID,
	getVideoID
}
