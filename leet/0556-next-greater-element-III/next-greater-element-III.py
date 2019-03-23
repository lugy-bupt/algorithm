class Solution:
    def nextGreaterElement(self, n: int) -> int:
        if n == 0: return -1
        
        arr = list(str(n))
        swapIndex = -1
        for i in range(len(arr) - 1, -1, -1):
            if i < len(arr) - 1 and arr[i] < arr[i + 1]:
                swapIndex = i
                break
        
        if swapIndex == -1 : return -1
        swap = swapIndex
        for i in range(len(arr) - 1, swapIndex, - 1):
            if arr[i] > arr[swapIndex]:
                swap = i
                break
                
        if swap == swapIndex : return -1
                
        arr[swap], arr[swapIndex] = arr[swapIndex], arr[swap]
        arr[swapIndex + 1:] = sorted(arr[swapIndex + 1:])
        
        ret = int("".join(arr))
        
        return ret if ret < 2 **31 else -1
