// Problem 1: Staircase
function staircase(n) {
  if (typeof n !== "number" || n <= 0) return "";
  const lines = [];
  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const hashes = "#".repeat(i);
    lines.push(spaces + hashes);
  }
  return lines.join("\n");
}
