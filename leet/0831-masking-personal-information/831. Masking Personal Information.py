class Solution:
    def maskPII(self, S: str) -> str:
        if S == "" : return S
        
        index = S.find("@")
        
        if index == -1:
            # isdn
            news = ""
            for i in S:
                if i.isdigit(): news += i
            ret = ""        
            if len(news) > 10:
                ret += "+" + "".join(["*"] * len(news[0:-10])) + "-"
                news = news[-10:]
            ret += ( "***-***-" + news[6:])
            return ret
                
        else:
            # mail
            return S[0].lower() + "*****" + S[index-1:].lower() 
            
