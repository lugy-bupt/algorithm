# 数学计算

### 公约数

已知两个数，求除1以外的公约数

        def getCommonDivisor (a: int, b: int) -> int:
            if b == 0 : return a
            return getCommonDivisor(b, a % b)

