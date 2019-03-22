class Solution:
    def complexNumberMultiply(self, a: str, b: str) -> str:
        def parse(a:str) -> (int, int):
            arr = a.split("+")
            x = int(arr[0])
            y = int(arr[1][:-1])
            return x, y
        
        a1 = parse(a)
        b1 = parse(b)

        cx = a1[0] * b1[0] - a1[1] * b1[1]
        cy = a1[0] * b1[1] + a1[1] * b1[0]
        
        return str(cx) + "+" + str(cy) + "i"
