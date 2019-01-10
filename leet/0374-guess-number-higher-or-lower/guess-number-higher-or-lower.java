/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
    private int guess(long n) {
		return guess((int) n);
	}

	public int guessNumber(int n) {
		return (int) guessNumber((long) n);
	}

	public long guessNumber(long n) {
		long start = 1;
		long end = n;

		while (start < end) {
			long mid = (start + end) / 2;
			int result = guess(mid);
			if (result == 0) {
				return mid;
			} else if (result == -1) {
				end = mid - 1;
			} else {
				start = mid + 1;
			}
		}

		return start;
	}
}
