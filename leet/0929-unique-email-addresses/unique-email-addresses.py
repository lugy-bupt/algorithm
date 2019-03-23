class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        ret = set()
        
        def check(mail: str):
            end = mail.find("@")
            if end != -1:
                plus = mail.find("+")
                xx = end if plus ==  -1 else min(end, plus)
                rs = ""
                for i in range(xx):
                    if mail[i] != "." : rs += mail[i]
                
                ret.add(rs + mail[end:])
                # print(ret)
                
        for m in emails:
            check(m)
            
        return len(ret)
