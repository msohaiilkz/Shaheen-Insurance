/**
 * Takaful-aware wording helpers.
 *
 * Client requirement:
 *  - In the Takaful journey the word "Insurance" must not appear
 *    (e.g. "Motor Takaful" instead of "Motor Insurance").
 *  - "Premium" is replaced with "Contribution" throughout the Takaful journey.
 */

/** "Motor" -> "Motor Takaful" (takaful) | "Motor Insurance" (conventional). */
export function productLabel(base: string, isTakaful: boolean): string {
  return isTakaful ? `${base} Takaful` : `${base} Insurance`
}

/** The category noun on its own: "Takaful" | "Insurance". */
export function categoryWord(isTakaful: boolean, capital = true): string {
  const w = isTakaful ? 'Takaful' : 'Insurance'
  return capital ? w : w.toLowerCase()
}

/** "Contribution" (takaful) | "Premium" (conventional). */
export function premiumWord(isTakaful: boolean, capital = true): string {
  const w = isTakaful ? 'contribution' : 'premium'
  return capital ? w.charAt(0).toUpperCase() + w.slice(1) : w
}

/**
 * Replace the standalone word "insurance"/"premium" inside an arbitrary
 * string with the Takaful equivalents, preserving the original casing.
 * Used for descriptive copy where we don't control every substring.
 */
export function takafulize(text: string, isTakaful: boolean): string {
  if (!isTakaful) return text
  return text
    .replace(/\bInsurance\b/g, 'Takaful')
    .replace(/\binsurance\b/g, 'takaful')
    .replace(/\bPremium\b/g, 'Contribution')
    .replace(/\bpremium\b/g, 'contribution')
}
