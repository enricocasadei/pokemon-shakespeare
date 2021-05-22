export function cleanString(str?: string): string {
  return str?.replace(/([^a-z0-9]+)/gi, "") || "";
}
