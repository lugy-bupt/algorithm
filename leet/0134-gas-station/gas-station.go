func canCompleteCircuit(gas []int, cost []int) int {
    if len(gas) == 0 || len(cost) == 0 || len(gas) != len(cost) { 
        return -1
    }
    
    for i := 0; i < len(gas); i++ {
        if(cost[i] <= gas[i]) {
            // start
            left := gas[i] - cost[i]
            j := i + 1
            if j == len(gas) {j = 0}
            
            for j != i {
                left += gas[j] - cost[j]
                if left < 0 { break }
                if j < len(gas) - 1 {
                    j++
                } else{
                    j = 0   
                }
            }
            
            if left >= 0 { return i }
        }
    }
    
    return -1
}
