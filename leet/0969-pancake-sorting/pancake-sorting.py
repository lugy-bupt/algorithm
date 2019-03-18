class Solution:
    def pancakeSort(self, A: List[int]) -> List[int]:
        def pancake(end: int):
            start = 0
            while start < end:
                A[start], A[end] = A[end], A[start]
                start += 1
                end -= 1
        
        length = len(A)
        if length < 2: return []
        
        biggest = 0
        for i in range(length):
            if A[i] > A[biggest]:
                biggest = i
        rs = []
        
        if biggest != length - 1:
            if biggest != 0:
                rs.append(biggest + 1)
                pancake(biggest)
            rs.append(length)
            pancake(length - 1)
            
        print(rs)
            
        rs += self.pancakeSort(A[0: length - 1])
        
        return rs
        
        
