class Solution:
    def numSpecialEquivGroups(self, A: List[str]) -> int:
         return len(set(map(lambda x:(tuple(sorted(x[::2])),tuple(sorted(x[1::2]))),A)))
