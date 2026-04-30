export function calculateLifePath(dateString) {
  const digits = dateString.replace(/-/g, "").split("").map(Number);

  let sum = digits.reduce((a, b) => a + b, 0);

  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split("").reduce((a, b) => a + Number(b), 0);
  }

  return sum;
}