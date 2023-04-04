
/**
 * Represents a node in the path taken to reach desired
 * Once Square is reached, push square and parent node to 
 * stack
 */
class PathNode {
    constructor(parentNode, col, row){
        this.parentNode = parentNode;
        this.col = col;
        this. row = row;
    }
}

export default PathNode