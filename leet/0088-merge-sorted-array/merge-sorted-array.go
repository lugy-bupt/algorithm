func merge(nums1 []int, m int, nums2 []int, n int)  {
    rs := make([]int, 0)
    
    i := 0
    j := 0
    
    for i < m || j < n {
        if(i == m) {
            rs = append(rs, nums2[j:]...)
            break;
        }
        
        if(j == n) {
            rs = append(rs, nums1[i:m]...)
            break;
        }
        
        x := nums1[i]
        y := nums2[j]
        
        if(x < y) {
            rs = append(rs, x)
            i++
        } else{
            rs = append(rs, y)
            j++
        }
    }
    
    for i,num := range rs {
        nums1[i] = num
    }
}
