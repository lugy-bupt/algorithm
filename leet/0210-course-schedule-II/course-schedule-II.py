class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        classes = []
        for i in range(numCourses):
            classes.append(i)   
            
        if len(prerequisites) == 0: return classes
        
        sorted = self.topoSort(classes, prerequisites)
        if sorted is None:
            return []
        
        rs = []
        for s in sorted:
            rs += s
            
        rsset = set(rs)       
        rs += list(filter(lambda x: x not in rsset, classes))
        return rs        
    
    def topoSort(self, classes: List[int], prerequisites: List[List[int]]) -> List[List[int]]:
        if len(prerequisites) == 0:
            return [classes]
            
        starts = set()
        for p in prerequisites:
            starts.add(p[0])
        
        for p in prerequisites:
            if p[1] in starts:
                starts.remove(p[1])
	
        if len(starts) == 0:
            return None
            
        nc = list(filter(lambda x: x not in starts, classes))
        np = list(filter(lambda x: x[0] not in starts, prerequisites))
            
        rs = self.topoSort(nc, np)
        
        if rs is None:
            return None
        else:
            rs.append(list(starts))
            return rs
        
