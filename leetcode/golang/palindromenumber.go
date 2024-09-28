package palindromenumber

func DigitsToSlice(n int) []int {
	var digits []int
	for n > 0 {
		digits = append(digits, n%10)
		n /= 10
	}
	return digits
}

func PalindromeNumber(n int) bool {
	if n == 0 {
		return true
	}

	digits := DigitsToSlice(n)
	if len(digits) < 1 {
		return false
	}
	if len(digits) == 1 {
		return true
	}
	halfLength := len(digits) / 2

	for i := 0; i < halfLength; i++ {
		if digits[i] != digits[len(digits)-(i+1)] {
			return false
		}
	}

	return true
}
