class Solution:
    def sumEvenAfterQueries(self, A: List[int], queries: List[List[int]]) -> List[int]:
        if len(A) == 0 or len(queries) == 0:
            return []
        
        def isEven(x): return x % 2 == 0
        
        AA = sum(filter(lambda x: isEven(x), A))
        
        rs = []
        for query in queries:
            if isEven(A[query[1]]):
                if isEven(query[0]):
                    AA += query[0]
                else:
                    AA -= A[query[1]]
            else:
                if not isEven(query[0]):
                    AA += A[query[1]] + query[0]
            rs.append(AA)
                    
            A[query[1]] += query[0]
            
        return rs
