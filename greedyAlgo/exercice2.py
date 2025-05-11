class Solution:
    def solve(self, A):
        # Sort the list of intervals A in ascending order by each interval’s end time
        A = sorted(A, key=lambda x: x[1])

        # Take the first (earliest-finishing) interval as our “previous” selected interval
        prev_s, prev_e = A[0]

        # We’ve selected one interval so far
        count = 1

        # Iterate over the remaining intervals in sorted order
        for s, e in A[1:]:
            # If the current interval starts after the previous one ends,
            # it doesn’t overlap, so we can select it
            if s > prev_e:
                prev_s, prev_e = s, e
                count += 1
            # Otherwise, it overlaps and we skip it

        # Return the total number of non-overlapping intervals selected
        return count


# Example usage:
if __name__ == "__main__":
    intervals = [[2, 5], [4, 6], [1, 3]]
    result = Solution().solve(intervals)
    print(result)  # Expected output: 2
