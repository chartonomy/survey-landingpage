export const getSlug = ([name, short]) => {
  if (short === null) return ''
  return short
    ? short.toLowerCase()
    : name.toLowerCase().replace(/\s+/gi, '-')
}
