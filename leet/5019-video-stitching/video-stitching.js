/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
    let m = clips.length
    if (m == 0) return -1
    clips.sort((a,b) => a[0] - b[0])
    //console.log(clips)
    
    let mp = new Map()
    let dp = function(i){
        if (mp.has(i)) return mp.get(i)
        let rt = 0
        if (i == 0) rt = clips[i][0] == 0 ? 1 : 9999
        else{
            let cs = []
            for (let j = i - 1; j >= 0; j--){
                if (clips[j][1] >= clips[i][0] && clips[j][0] < clips[i][0]){
                    cs.push(dp(j))
                }
            }
            
            rt = cs.length > 0 ? Math.min.apply(null, cs) + 1: clips[i][0] == 0 ? 1 : 9999
        }
        mp.set(i, rt)
        return rt
    }

    let ret = 9999
    for (let i = 0; i < m; i++) dp(i)

    for (let i = 0; i < m; i++)
        if(clips[i][1] >= T) ret = Math.min(ret, mp.get(i))
    return ret == 9999 ? -1 : ret   
};
