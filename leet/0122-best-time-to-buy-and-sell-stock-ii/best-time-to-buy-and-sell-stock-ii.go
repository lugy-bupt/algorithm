func maxProfit(prices []int) int {
    cache := make(map[int]int)
    return dfs(cache, prices, 0)
}

func dfs(cache map[int]int, prices []int, start int) int {
    rs := 0

    for i := start; i < len(prices); i++{
        rsx := 0
        if v, ok := cache[i]; ok {
            rsx = v
        } else {
            for j := i + 1; j < len(prices); j++{
                temp := 0
                if(prices[j] > prices[i]) {
                    temp += prices[j] - prices[i]
                    if (j + 1 < len(prices)) {
                        temp += dfs(cache, prices, j+1)
                    }
                }
                if (temp > rsx) {rsx = temp}
            }
            cache[i] = rsx
        }
        if(rsx > rs) {rs = rsx}
    }

    return rs
}
