func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    len1 := len(nums1)
    len2 := len(nums2)
    
    if(len1 == 0 && len2 == 0) {return float64(0)}
    
    k := len1 + len2
    
    if(k%2 == 1){
        return findK(nums1, nums2, k / 2)
    }else{
        return (findK(nums1, nums2, k / 2 - 1) + findK(nums1, nums2, k / 2)) / 2
    }
}

func findK(nums1 []int, nums2 []int, k int) float64 {
    len1 := len(nums1)
    len2 := len(nums2)
    
    if(len1 == 0) {return float64(nums2[k])}
    if(len2 == 0) {return float64(nums1[k])}
    
    n1 := 0
    n2 := 0
    
    for ;k > 0; k-- {
        if n1 == len1 { 
            n2++
        } else if n2 == len2 {
            n1++
        } else{
            if(nums1[n1] < nums2[n2]){
                n1++
            } else{
                n2++
            }
        }
    }
    
    if(n1 == len1){
        return float64(nums2[n2])
    } else if(n2 == len2){
        return float64(nums1[n1])
    } else {
        if(nums1[n1] < nums2[n2]){
            return float64(nums1[n1])
        } else{
            return float64(nums2[n2])
        }
    }
}
