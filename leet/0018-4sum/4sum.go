class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        ArrayList<List<Integer>> result = new ArrayList<>();
        
        if(nums == null || nums.length < 4) return result;
        
        Arrays.sort(nums);
        
        for(int i = 0; i < nums.length; ){
            
            for(int j = i + 1; j < nums.length;){
                
                int k = j + 1;
                int l = nums.length - 1;
                
                int x = target - nums[i] - nums[j];
                
                while(k < l){
                    
                    int r = nums[k] + nums[l];
                    
                    if(r == x){
                        ArrayList<Integer> list = new ArrayList<>();
                        list.add(nums[i]);
                        list.add(nums[j]);
                        list.add(nums[k]);
                        list.add(nums[l]);
                        
                        result.add(list);
                        
                        // ++k
                        while(k + 1 < l && nums[k] == nums[k + 1]) k += 1;
                        k += 1;
                        
                        // --l
                        while(k < l - 1 && nums[l] == nums[l - 1]) l -= 1;
                        l -= 1;
                    }else if(r > x){
                        // -- l
                        while(k < l - 1 && nums[l] == nums[l - 1]) l -= 1;
                        l -= 1;
                    }else{
                        // ++ k
                        while(k + 1 < l && nums[k] == nums[k + 1]) k += 1;
                        k += 1;
                    }
                }
                
                // ++ j;
                
                while(j + 1 < nums.length && nums[j] == nums[j + 1]) j += 1;
                j += 1;
            }
            
            // ++ i;
            while(i + 1 < nums.length && nums[i] == nums[i + 1]) i += 1;
            i += 1;
        }
        
        return result;
    }
}
