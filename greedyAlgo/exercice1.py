class Solution : 

    def maxList(self , A):
        A = sorted(A)
        high = A[-1] *A[-2]*A[-3]
        low = A[0] * A[1] * A[-1]
        return max(high , low)