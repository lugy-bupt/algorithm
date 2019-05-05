/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
    if (queries.length == 0) return []
    let ret = []

    let isLower = function(s){
        return s && s.charCodeAt() > 96
    }

    let match = function(query, qi, pattern, pi){
        if(pi == pattern.length){
            if (qi == query.length) return true 
            else{
                // check if left is lower
                while(qi < query.length && isLower(query[qi])) {qi += 1}
                return qi == query.length
            }
        }

        if(isLower(pattern[pi])){
            if (pattern[pi] == query[qi]) // continue
                return match(query, qi + 1, pattern, pi + 1)
            else{
                while(qi < query.length && isLower(query[qi]) && pattern[pi] != query[qi]) {qi += 1}
                if(qi == query.length || !isLower(query[qi])) return false
                return match(query, qi + 1, pattern, pi + 1)
            }
        } else{
            while(qi < query.length && isLower(query[qi])){ qi += 1}
            if(qi == query.length) return false
            if (pattern[pi] == query[qi]) // continue
                return match(query, qi + 1, pattern, pi + 1)
            return false
        }


    }

    for (let q of queries){
        ret.push(match(q, 0, pattern, 0))
    }
    return ret
};
