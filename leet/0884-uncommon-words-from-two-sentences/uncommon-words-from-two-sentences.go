class Solution:
    def uncommonFromSentences(self, A: str, B: str) -> List[str]:
        listA = A.split(" ")
        listB = B.split(" ")
        setA = set(listA)
        setB = set(listB)
        setC = set()
        mapA = {}
        mapB = {}
        for w in listA:
            if w in mapA:
                mapA[w] += 1
            else:
                mapA[w] = 1
        for w in listB:
            if w in mapB:
                mapB[w] += 1
            else:
                mapB[w] = 1
        for k, v in mapA.items():
            if v > 1:
                setC.add(k)
        for k, v in mapB.items():
            if v > 1:
                setC.add(k)
        return list((setA ^ setB) - setC)
