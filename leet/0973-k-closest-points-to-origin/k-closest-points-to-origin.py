class Solution:
    def kClosest(self, points: List[List[int]], K: int) -> List[List[int]]:
        l = sorted(points, key=lambda x : x[0] * x[0] + x[1] * x[1]) 
        return l[0:K]
