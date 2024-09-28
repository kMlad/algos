export function separateDigits(n: number): number[] | null {
  if (n < 1) {
    return null;
  }

  const digits: number[] = [];
  while (n > 0) {
    digits.unshift(n % 10);
    n = Math.floor(n / 10);
  }

  return digits;
}

export function isPalindrome(n: number): boolean {
  if (n === 0) {
    return true;
  }

  const digits = separateDigits(n);
  console.log(digits);

  if (digits && digits?.length > 1) {
    const checkNumbers = Math.floor(digits.length / 2);

    for (let i = 0; i < checkNumbers; i++) {
      if (digits[i] !== digits[digits.length - (1 + i)]) {
        return false;
      }
    }
  }

  return true;
}
