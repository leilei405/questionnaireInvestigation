export function extractIdFromUrl(url: string) {
  const urlObject = new URL(url)
  const pathSegments = urlObject.pathname.split('/')
  return pathSegments[pathSegments.length - 1]
}
