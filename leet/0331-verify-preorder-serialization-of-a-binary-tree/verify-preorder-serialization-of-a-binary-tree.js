/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    if (!preorder || preorder.length == 0) return false

    let arr = preorder.split(",")

    let stack = []
    let i = 0
    for (; i < arr.length && arr[i] != "#"; i++){
        let node = {"val" : arr[i]}
        stack.push(node)
    }

    if(i == arr.length) return false
    i += 1
    
    for(; stack.length > 0 && i < arr.length; i++){
        let curNode = stack.pop()

        if(arr[i] != "#"){
            let node = {"val": arr[i]}
            stack.push(node)

            i += 1
            for (; i < arr.length && arr[i] != "#"; i++){
                let node = {"val" : arr[i]}
                stack.push(node)
            }

            if(i == arr.length) return false
        }
    }

    return stack.length == 0 && arr.length == i
};
