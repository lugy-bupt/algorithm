/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(!s || !t) return ""

    let mp = new Map()
    let mpSize = 0

    let tmp = new Map()
    for (let i = 0; i < t.length; i++) tmp.set(t[i], (tmp.has(t[i]) ? tmp.get(t[i]) : 0 ) + 1 )

    let setMp = function(key, value){
        let needNum = tmp.get(key)
        let inMP = mp.get(key) || []
        mp.set(key, inMP)

        if (inMP.length < needNum) {
            inMP.push(value)
            mpSize++
        }else{
            inMP.shift()
            inMP.push(value)
        }
        return true
    }

    let newSubString = function(){
        let low = 99999
        let high = -1

        if(mpSize < t.length){
            return []
        }

        for (let v of mp.values()){
            low = Math.min(low, v[0])
            high = Math.max(high, v[v.length - 1])
        }

        return [low, high]
    }

    let ret = ""
    let size = 999999

    for (let i = 0; i < s.length; i++){
        if(tmp.has(s[i]) && setMp(s[i], i)){
            let ps = newSubString()
            let newSize = ps[1] - ps[0] + 1
            if (newSize < size){
                size = newSize
                ret = s.substring(ps[0], ps[1] + 1)
            }
        }
    }

    let ps = newSubString()
    let newSize = ps[1] - ps[0] + 1
    if (newSize < size){
        size = newSize
        ret = s.substring(ps[0], ps[1] + 1)
    }

    console.log(mp)

    return ret
};
