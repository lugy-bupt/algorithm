/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        return (int)firstBadVersion((long)n);
    }
    
    private boolean isBadVersion(long n){
    	return isBadVersion((int)n);
    }
    
    private long firstBadVersion(long n) {
        if(n == 1) return 1;
        long start = 1;
        long end = n;
        
        while(start < end){
        	long mid = (start + end) / 2;
            
            boolean bMid = isBadVersion(mid);
            
            if(bMid) {
                end = mid;
            }else{
                start = mid + 1;
            }
        }
        
        return start;
    }
}
