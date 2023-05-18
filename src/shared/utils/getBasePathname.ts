export function getBasePathname(urlString: string) {
  const lastSlashIndex = urlString.lastIndexOf('/');

  if (lastSlashIndex === -1 || lastSlashIndex === 0) {
    return urlString;
  }

  return urlString.substring(0, lastSlashIndex);
}
