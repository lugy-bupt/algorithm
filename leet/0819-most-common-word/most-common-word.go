func mostCommonWord(paragraph string, banned []string) string {    
    bannedMap := make(map[string]int)
    for _, ban := range banned {
        bannedMap[ban] = 0
    }
    
    splits := " !?',;."
    words := split(paragraph, splits, 0) //strings.Split(paragraph, splits, 0)
    wordMap := make(map[string]int)
    for _, word := range words {
        if(word == "") {continue}
        word = strings.ToLower(strings.Trim(word, "!?',;. "))
        if _, ok := bannedMap[word]; ok { continue}
        wordMap[word] = wordMap[word] + 1
    }
    
    count := 0
    rs := ""
    for k, v := range wordMap {
        if v > count {
            count = v
            rs = k
        }
    }
    
    return rs
}

func split(paragraph, splits string, p int) []string{
    if(p == len(splits)) {return []string{paragraph}}
    
    rs := make([]string, 0)
    s := string(splits[p])
    strs := strings.Split(paragraph, s)
    for _, str := range strs {
        rs = append(rs, split(str, splits, p + 1)...)
    }
    
    return rs
}
