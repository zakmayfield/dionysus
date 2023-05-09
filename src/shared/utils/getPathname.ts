export function getPathname(urlString: string) {
  const questionMarkIndex = urlString.indexOf('?');

  const pathname = urlString.substring(
    0,
    questionMarkIndex !== -1 ? questionMarkIndex : undefined
  );
  return pathname;
}
