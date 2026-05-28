export function checkURL(url) {
  if (url.includes('http://')) {
    return {
      status: 'Unsafe',
      message: 'URL is not secure'
    }
  }

  return {
    status: 'Safe',
    message: 'Secure URL detected'
  }
}