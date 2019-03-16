class Solution:
    def addToArrayForm(self, A: List[int], K: int) -> List[int]:
        A.reverse()
        
        KK = []
        while K > 0:
            KK.append(K % 10)
            K = K // 10
            
        i = 0
        j = 0
        carry = 0
        
        rs = []
        
        while i < len(A) or j < len(KK) or carry > 0:
            result = (0 if i >= len(A) else A[i]) + (0 if j >= len(KK) else KK[j]) + carry
            rs.insert(0, result % 10)
            carry = 1 if result >= 10 else 0
            i += 1
            j += 1
        
        return rs
