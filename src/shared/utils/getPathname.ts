export function getPathname(urlString: string) {
  // Create a temporary <a> element
  const tempLink = document.createElement('a');
  tempLink.href = urlString;

  // Access the pathname property on the <a>
  const pathname = tempLink.pathname;

  // Return the extracted pathname
  return pathname;
}
