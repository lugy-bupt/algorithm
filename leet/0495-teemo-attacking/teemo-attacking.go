import "sort"

func findPoisonedDuration(timeSeries []int, duration int) int {
    if len(timeSeries) == 0 || duration == 0 {return 0}
	
	result := 0
	
	sort.Ints(timeSeries)
	start := timeSeries[0]
	end := timeSeries[0] + duration
	
	for i:= 1; i < len(timeSeries); i++ {
		if timeSeries[i] > end {
			// start a new range
			result += end - start
			start = timeSeries[i]
			end = timeSeries[i] + duration
		} else {
			end = timeSeries[i] + duration
		}
	}
	
    result += end - start
    
	return result
}
