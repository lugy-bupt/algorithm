class Solution:
    def maximumSwap(self, num: int) -> int:
        n = []
        
        while num > 0:
            n.append(num % 10)
            num = num//10
        
        # print(n)
        
        def swap(n: List[int], length: int):
            # length = len(n)
            if length < 2:
                return
            
            maxIndex = 0
            for i in range(length):
                if n[i] > n[maxIndex]:
                    maxIndex = i
            
            if n[maxIndex] == n[length - 1]:
                # no swap
                # found last index for max.
                j = length - 1
                while j - 1 >=  0 and n[j] == n[j - 1]:
                    j -= 1
                swap(n, j)
            else:
                n[maxIndex], n[length - 1] = n[length - 1], n[maxIndex]
            
        swap(n, len(n))
        n.reverse()
        # print(n)
        
        rs = 0
        for i in n:
            rs = rs * 10 + i
        return rs
                
            
        
