class Solution:    
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        if len(prerequisites) == 0:
            return True
        
        starts = set()
        for l in prerequisites:
            starts.add(l[0])
        for l in prerequisites:
            if l[1] in starts:
                starts.remove(l[1])
        
        if len(starts) == 0:
            return False
        
        prerequisites = list(filter(lambda x : x[0] not in starts, prerequisites))
            
        return self.canFinish(numCourses, prerequisites)
