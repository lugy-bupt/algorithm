
/**
 * Definition for an interval.
 * type Interval struct {
 *	   Start int
 *	   End   int
 * }
 */
func insert(intervals []Interval, newInterval Interval) []Interval {

	rs := make([]Interval, 0)

	if len(intervals) == 0 {
		rs = append(rs, newInterval)
		return rs
	}

	start := 0
	end := len(intervals) - 1
	index := -1

	for start < end {
		mid := (start + end) / 2

		if intervals[mid].Start == newInterval.Start {
			index = mid
			break
		} else if intervals[mid].Start < newInterval.Start {
			start = mid + 1
		} else {
			end = mid - 1
		}
	}

	if index == -1 {
		if intervals[start].Start > newInterval.Start {
			index = start
		} else {
			index = start + 1
		}
	}

	// start merge
	rs = append(rs, intervals[0:index]...)

	if index > 0 {
		last := rs[len(rs)-1]
		if canMerge(last, newInterval) {
			rs[len(rs)-1] = merge(last, newInterval)
		} else {
			rs = append(rs, newInterval)
		}
	} else {
		rs = append(rs, newInterval)
	}

	for i := index; i < len(intervals); i++ {
		last := rs[len(rs)-1]
		if canMerge(last, intervals[i]) {
			rs[len(rs)-1] = merge(last, intervals[i])
		} else {
			rs = append(rs, intervals[i])
		}
	}

	return rs
}

func canMerge(left Interval, right Interval) bool {
	return right.Start <= left.End
}
func merge(left Interval, right Interval) Interval {
	return Interval{Start: min(left.Start, right.Start), End: max(left.End, right.End)}
}
func min(i1 int, i2 int) int {
	if i1 > i2 {
		return i2
	}
	return i1
}
func max(i1 int, i2 int) int {
	if i1 < i2 {
		return i2
	}
	return i1
}