class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        stack = []
    
        def dfs(s: str):
            
            for ticket in tickets:
                filterTickets = list(filter(lambda t: t[0] == s, tickets))
                if len(filterTickets) > 0:
                    filterTickets = sorted(filterTickets, key=lambda t: t[1])
                    tickets.remove(filterTickets[0])
                    dfs(filterTickets[0][1])
                    
            stack.append(s)
            
        dfs("JFK")
        stack.reverse()
        return stack
        
                
