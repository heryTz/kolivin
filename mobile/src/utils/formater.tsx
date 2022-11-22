export function clampText(text: string, maxChar: number) {
  return text.length > maxChar ? text.slice(0, maxChar) : text
}
