class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        
        if n == 0: return True
        if len(flowerbed) == 0: return False
        if len(flowerbed) == 1: return n == 1 and flowerbed[0] == 0
        
        if flowerbed[0] == 1:
            if flowerbed[1] == 0:
                return self.canPlaceFlowers(flowerbed[2:], n)
            else:
                return self.canPlaceFlowers(flowerbed[1:], n)
        else:
            if flowerbed[1] == 0:
                return self.canPlaceFlowers(flowerbed[2:], n - 1)
            else:
                return self.canPlaceFlowers(flowerbed[1:], n)
        
        
