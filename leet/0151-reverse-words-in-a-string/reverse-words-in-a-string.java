public class Solution {
    public String reverseWords(String s) {
        if(s == null || s.length() == 0)
            return s;
        
        StringBuffer result = new StringBuffer();
        String[] array = s.split(" ");
        
        for (int i = array.length - 1; i >=0; i--){
            if(array[i].length() > 0){
                result.append(array[i]);
                result.append(' ');
            }
            
        }
        
        return result.toString().trim();
    }
}
