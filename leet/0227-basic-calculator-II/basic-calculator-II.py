class Solution:
    def calculate(self, s: str) -> int:
        if s is None or len(s) == 0 : return 0
        
        numStack = []
        opStack = []
        
        def cal(a, b, op) -> str:
            if op == "+":
                return str(int(a) + int(b))
            elif op == "-":
                return str(int(a) - int(b))
            elif op == "*":
                return str(int(a) * int(b))
            else:
                return str(int(a) // int(b))
            
        priorities = {"+": 1, "-": 1, "*": 2, "/" : 2}
        
        def calStack(i: str):
            if len(opStack) == 0:
                opStack.append(i)
            else:
                op = opStack[-1]
                
                opp = priorities[op]
                ip = priorities[i]
                
                if ip > opp:
                    opStack.append(i)
                else:
                    op = opStack.pop()
                    b = numStack.pop()
                    a = numStack.pop()
                    numStack.append(cal(a,b,op))
                    
                    calStack(i)
        
        curNum = ""
        
        for i in s:
            if i == " ":
                continue
            
            if i.isdigit():
                curNum += i
            else:
                numStack.append(curNum)
                curNum = ""
                
                if len(opStack) == 0:
                    opStack.append(i)
                else:
                    calStack(i)
                    
        if curNum != "":
            numStack.append(curNum)
            
        while len(opStack) > 0:
            op = opStack.pop()
            b = numStack.pop()
            a = numStack.pop()
            numStack.append(cal(a,b,op))
            
        return int(numStack.pop())        
