import (
    "strconv"
    "strings"
)

func validIPAddress(IP string) string {
    ipv4 := strings.Split(IP, ".")
    
    if len(ipv4) == 4 {
        
        for i := 0; i < 4; i++ {
            
            if len(ipv4[i]) > 1 && (ipv4[i][0] == '0' || ipv4[i][0] == '-' || ipv4[i][0] == '+') {
                return "Neither"
            }
            
            num, error := strconv.ParseInt(ipv4[i], 10, 32)
            if error != nil || num > 255 || num < 0  {
                return "Neither"
            }
        }
        
        return "IPv4"
    }
    
    ipv6 := strings.Split(IP, ":")
    
    if len(ipv6) == 8 {
        
        for j := 0; j < 8; j++ {
            if len(ipv6[j]) == 0 || len(ipv6[j]) > 4 || ipv6[j][0] == '-' || ipv6[j][0] == '+' {
                return "Neither"
            }
            
            num, error := strconv.ParseInt(ipv6[j], 16, 32)
            if error != nil || num < 0{
                return "Neither"
            }
        }
        
        return "IPv6"
    }
    
    return "Neither"
}
