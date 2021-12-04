function createXmasTree(height) {

    let tree = "";

    let propertiesTree = {
        'maxBranch': height-1,
        'treeWidth': (height-1)*2+1,
        'treeHeight': height,
        'branchLeft': (height-1)- 1,
        'branchRight': height,
        'part' : 'branch'
    }
    

    for (let i = 0; i < propertiesTree.treeHeight+2; i++) {
        if(i < propertiesTree.treeHeight){
        }else{
            propertiesTree.part = 'trunk';
        }
        for(let x = 0; x < propertiesTree.treeWidth; x++){
            if(propertiesTree.part === 'branch'){
                if(x === propertiesTree.maxBranch){
                    tree += '*';
                }else{
                    if((x > propertiesTree.branchLeft && x < propertiesTree.maxBranch) ||
                        ( x > propertiesTree.maxBranch && x < propertiesTree.branchRight)){
                        tree += '*';
                    }else{
                        tree += '_';
                    }
                }
            }
            if(propertiesTree.part === 'trunk'){
                if(x === propertiesTree.maxBranch){
                    tree += '#';
                }else{
                    tree += '_';
                }
            }
        } 
        if(!(i === propertiesTree.treeHeight+1)){
            tree += '\n';
        }
        propertiesTree.branchLeft--;
        propertiesTree.branchRight++;
    } 

    return tree
}

console.log(createXmasTree(5))