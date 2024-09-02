/*
 * Algorithm Source:
 * https://kroongho.livejournal.com/84664.html
 *
 * Use it as you wish.
 * - zel (LSCS RND VP 2024-2025)
 */

const verifyDLSUId = (id) => {
  try {
    if (id.toString().length != 8)
      return 0;

    let total = 0;
    for (let i = 0; i < id.toString().length; i++) {
      total += parseInt(id.toString()[i]) * (8 - i);
    }
    if (total % 11 != 0) return 0;
    return 1;
  }
  catch { return 0; }
}
