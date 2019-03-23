class Solution:
    def toGoatLatin(self, S: str) -> str:
        if S == "" : return S
        
        arr = S.split(" ")
        
        for i in range(len(arr)):
            i0 = arr[i][0].lower()
            if i0 == "a" or i0 == "e" or i0 == "i" or i0 == "o" or i0 == "u":
                arr[i] = arr[i] + "ma" + "".join(["a"] * (i + 1))
            else:
                arr[i] = arr[i][1:] + arr[i][0] + "ma" + "".join(["a"] * (i + 1))
            
        return " ".join(arr)
