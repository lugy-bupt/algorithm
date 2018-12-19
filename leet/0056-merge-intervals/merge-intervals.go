/**
 * Definition for an interval.
 * type Interval struct {
 *	   Start int
 *	   End   int
 * }
 */
import "sort"

func merge(intervals []Interval) []Interval {
	if len(intervals) < 2 {
		return intervals
	}

	slice := intervalSlice(intervals)
	sort.Stable(slice)

	rs := make([]Interval, 1)
	rs[0] = intervals[0]

	for i := 1; i < len(slice); i++ {
		last := rs[len(rs)-1]
		if canMerge(last, slice[i]) {
			rs[len(rs)-1] = merge1(last, slice[i])
		} else {
			rs = append(rs, slice[i])
		}
	}

	return rs

}

type intervalSlice []Interval

func (s intervalSlice) Len() int           { return len(s) }
func (s intervalSlice) Swap(i, j int)      { s[i], s[j] = s[j], s[i] }
func (s intervalSlice) Less(i, j int) bool { return s[i].Start < s[j].Start }

func canMerge(left Interval, right Interval) bool {
	return right.Start <= left.End
}
func merge1(left Interval, right Interval) Interval {
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