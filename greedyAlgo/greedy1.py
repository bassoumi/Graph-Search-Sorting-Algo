class solution : 
    def bulbs(self, A):
        cost = 0
        for b in A:
            if b == cost % 2 == 0 :
                b=b 
            else:
                 b = not b 
            if b % 2 == 1:
                continue
            else:
                cost += 1
        return cost

# Example usage
if __name__ == "__main__":
    A = [0, 1, 0, 1, 0]
    sol = solution()
    print(sol.bulbs(A))  # Output: 3
# The code defines a class `solution` with a method `bulbs` that takes a list of integers (0s and 1s) as input.
# The method counts the number of bulbs that need to be toggled to turn them all on (1).
# The method uses a greedy approach to iterate through the list and toggle the bulbs based on their current state.
# The final output is the total number of toggles needed to turn all bulbs on.


    