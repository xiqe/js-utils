// 判断数据类型
export const getObjectType = (obj) =>{
    return Object.prototype.toString.call(obj).match(/\[object (.*?)\]/)[1].toLowerCase(); 
}

// 返回顶部
export const scrollToTop = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, top - top / 8);
    }
}

// 根据id，获取树节点路径
export const getTreeNodePath = (id, tree) => {
    let arr = []
    for (let i = 0; i < tree.length; i++) {
        let item = tree[i]
        arr = []
        arr.push(item)
        if (id== item.id) {
            return arr
        } else {
            if (item.children && item.children.length > 0) {
                arr = arr.concat(getTreeNodePath(id, item.children ? item.children : []))
                if (arr.map(item2 => (item2 ? item2.id : '')).includes(id)) {
                    return arr
                }
            }
        }
    }
}

// 获取树中所有的叶子节点
export const getTreeAllLeaf = (tree) => {
    const result = []
    const getLeaf = (tree) => {
        tree.forEach((item) => {
            if (!item.children) {
                result.push(item)
            } else {
                getLeaf(item.children)
            }
        })
    }
    getLeaf(tree)
    return result
}

// 根据id，增加子节点
export const appendNodeInTree = (tree, id, obj) => {
    tree.forEach(ele=> {
        if (ele.id === id) {
            ele.children ? ele.children.push(obj) : ele.children = [obj]
        } else {
            ele.children && appendNodeInTree(ele.children, id, obj)
        }
    })
    return tree
}

// 根据id，删除节点
export const removeNodeInTree = (tree, id) => { // 通过id从数组（树结构）中移除元素
    if (!tree || !tree.length) {
      return
    }
    for (let i = 0; i < tree.length; i++) {
      if (tree[i].id === id) {
        tree.splice(i, 1);
        break;
      }
      removeNodeInTree(tree[i].children, id)
    }
}

// 根据id，修改节点
export const updateNodeInTree = (tree, id, obj) => {
    if (!tree || !tree.length) {
        return;
    }
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].id == id) {
            tree[i]= obj;
            break;
        }
        updateNodeInTree(tree[i].children,id,obj);
    }
}