import (
    "sort"
)

func intToRoman(num int) string {
    mapping:= map[int]byte{1: 'I', 5: 'V', 10: 'X',50: 'L',100: 'C',500: 'D', 1000: 'M'}
    mapping2 := map[int]int {1000: 100, 500: 100, 100: 10, 50: 10, 10: 1, 5:1}
    
    var ns []int
    for n := range mapping {ns = append(ns, n)}
    sort.Ints(ns)
    length := len(ns)
    
    result := ""
    
    for i := length - 1; i >= 0 && num > 0; i-- {
        n := ns[i];
        x := num / n
        num = num % n
        for x > 0 {
            result = result + string(mapping[n])
            x--
        }
                
        nega := mapping2[n]
        if num < n && num >= (n - nega) {
            num = num - (n - nega)
            result = result + string(mapping[nega]) + string(mapping[n])
        }
    }
    
    return result
}
