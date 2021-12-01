export function cleanString(str?: string): string {
  return str?.replace(/([^a-z0-9]+)/gi, "") || "";
}

export function stripHtml(str?: string): string {
  if (!str) return "";
  const temporalDivElement = document.createElement("div");
  const _tmp = str
    .trim()
    .replace(/<[^>]*>?/gm, "")
    .replace(/[^a-zA-Z0-9,'_ ]/g, " ");

  temporalDivElement.innerHTML = _tmp;
  return temporalDivElement.textContent || temporalDivElement.innerText || "";
}
