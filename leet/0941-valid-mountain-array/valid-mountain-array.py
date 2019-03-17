class Solution:
    def validMountainArray(self, A: List[int]) -> bool:
        if len(A) < 3 or A[0] >= A[1]:
            return False
        
        isDown = False
        
        for i in range(len(A) - 1):
            if A[i] == A[i + 1]:
                return False
            elif A[i] > A[i + 1]:
                isDown = True
            else:
                if isDown:
                    return False
                
        return isDown
