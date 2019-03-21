class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        length = len(logs)
        if length < 2 : return logs
        
        alphabet = list(filter(lambda x: x[1].isalpha(), map(lambda x: x.split(" "), logs)))
        alphabet.sort(key=lambda x: " ".join(x[1:]))
        digit = list(filter(lambda x: x[1].isdigit(), map(lambda x: x.split(" "), logs)))

        return list(map(lambda x: " ".join(x), alphabet + digit))
        
                
