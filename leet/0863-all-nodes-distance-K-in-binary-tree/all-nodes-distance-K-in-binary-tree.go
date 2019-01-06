/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
var path []*TreeNode

func distanceK(root *TreeNode, target *TreeNode, K int) []int {
    rs := make([]int, 0)
    
    if(K == 0) { return append(rs, target.Val) }
    
    childK := getKChild(target, K)
    if(root == target) {return childK}
    rs = append(rs, childK...)
    
    path = make([]*TreeNode, 0)
    getPath(root, target)
    
    distance := K
    for i := len(path) - 1; i > 0  ; i-- {
        // TODO get distance of parent
        distance-- 
        
        if (distance == 0) {
            rs = append(rs, path[i - 1].Val)
            break; 
        }
        
        another := getAnotherChild(path[i - 1], path[i])
        if(another != nil) { rs = append(rs, getKChild(another, distance - 1)...) }
    }
    
    return rs
}

func getPath(root1 *TreeNode, target1 *TreeNode) bool {
    if(root1 == nil){
        return false
    }
        
    path = append(path, root1)
    if(root1.Val == target1.Val){
        return true
    }
    lrs := getPath(root1.Left, target1)
    if(lrs) {return true}
    rrs := getPath(root1.Right, target1)
    if(rrs) {return true}
    path = path[0:len(path) - 1]
    return false
}

func getAnotherChild(parent *TreeNode, excludeChild *TreeNode) *TreeNode {
    if (parent.Left == excludeChild) {return parent.Right}
    return parent.Left
}

func getKChild(node *TreeNode, K int) []int {
    rs := make([]int, 0)
    down := make([]*TreeNode, 1)
    down[0] = node
    
    for K > 0 {
        downTemp := make([]*TreeNode, 0)
        for _, n := range down {
            if(n.Left != nil) {downTemp = append(downTemp, n.Left)}
            if(n.Right != nil) {downTemp = append(downTemp, n.Right)}
        }
        down = downTemp
        K--
    }
    
    if(K == 0) { 
        for _, c := range down {
            rs = append(rs, c.Val)
        }
    }
    
    return rs
}
