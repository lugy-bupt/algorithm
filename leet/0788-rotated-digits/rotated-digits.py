# 788. 旋转数字

class Solution:
    def rotatedDigits(self, N: int) -> int: 
        
        def rotateSingle(n: int) -> int:
            if n == 0 or n == 1 or n == 8: return n
            elif n == 2 : return 5
            elif n == 5 : return 2
            elif n == 6 : return 9
            elif n == 9 : return 6
            
            return -1
        
        def rotateDigit(n:int) -> int:
            arr = []
            
            while n > 0:
                arr.append(n % 10)
                n = n // 10
                
            for i in range(len(arr)):
                x = rotateSingle(arr[i])
                if x == -1 : return -1
                arr[i] = x
            
            ret = 0
            for i in range(len(arr) - 1, -1, -1):
                ret = ret * 10 + arr[i]
                
            return ret
        
        rt = 0
        
        for i in range(1, N + 1):
            x = rotateDigit(i)
            if x != -1 and x != i:
                rt += 1
        
        return rt
