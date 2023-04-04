import PathNode from "./pathNode"
/**
 * Takes in a Chessboard and ending sqaure and
 * finds shortest path
 */

function knightsTravails(chessboard, endingSquareCol, endingSquareRow){
    
    const stack = [];
    const startNode = new PathNode(null, chessboard.knightStartSquareColumn, chessboard.knightStartSquareRow);
    stack.push(startNode);
    const result =[];
    let x = 0;
    while(stack){
        let currentSquare = stack.shift();
        chessboard.board[currentSquare.col][currentSquare.row] = 'N'
        // Base Case - if on desired squre, add squre to result stack and break loop
        if(currentSquare.col === endingSquareCol &&  currentSquare.row === endingSquareRow){
            result.unshift(currentSquare);
            while(currentSquare.parentNode){
                x+=1;
                result.unshift(currentSquare.parentNode);
                currentSquare = currentSquare.parentNode;
            }
            break;
        }

        // Find all possible moves and push them all to the stack!
        // Up Moves
            // Up two Left one
        if(currentSquare.col + 2 <= 7 && currentSquare.row-1 >= 0){
            stack.push(new PathNode(currentSquare, currentSquare.col + 2, currentSquare.row - 1))
            chessboard.board[currentSquare.col + 2][currentSquare.row - 1] = 'X';
        }
            // Up two Right one
        if(currentSquare.col + 2 <= 7 && currentSquare.row + 1 <= 7){
            stack.push(new PathNode(currentSquare, currentSquare.col + 2, currentSquare.row + 1))
            chessboard.board[currentSquare.col + 2][currentSquare.row + 1] = 'X';

        }

        // Right Moves
            // Right two Up one
            if(currentSquare.col + 1 <= 7 && currentSquare.row + 2 <= 7){
                stack.push(new PathNode(currentSquare, currentSquare.col + 1, currentSquare.row + 2))
                chessboard.board[currentSquare.col + 1][currentSquare.row + 2] = 'X';
            }
            // Right two Down one
            if(currentSquare.col - 1 >= 0 && currentSquare.row + 2 <= 7){
                stack.push(new PathNode(currentSquare, currentSquare.col - 1, currentSquare.row + 2))
                chessboard.board[currentSquare.col - 1][currentSquare.row + 2] = 'X';
            }

        // Down Moves
            // Down two Left one
            if(currentSquare.col - 2 >= 0 && currentSquare.row - 1 >= 0){
                stack.push(new PathNode(currentSquare, currentSquare.col - 2, currentSquare.row - 1))
                chessboard.board[currentSquare.col - 2][currentSquare.row - 1] = 'X';
            }
            // Down two Right one
            if(currentSquare.col - 2 >= 0 && currentSquare.row + 1 <= 7){
                stack.push(new PathNode(currentSquare, currentSquare.col - 2, currentSquare.row + 1))
                chessboard.board[currentSquare.col - 2][currentSquare.row + 1] = 'X';
            }

        // Left Moves
            // Left two Up one
            if(currentSquare.col + 1 <= 7 && currentSquare.row - 2 >= 0){
                stack.push(new PathNode(currentSquare, currentSquare.col + 1, currentSquare.row - 2))
                chessboard.board[currentSquare.col + 1][currentSquare.row - 2] = 'X';
            }
            // Left two Down one
            if(currentSquare.col - 1 >= 0 && currentSquare.row - 2 >= 0){
                stack.push(new PathNode(currentSquare, currentSquare.col - 1, currentSquare.row - 2))
                chessboard.board[currentSquare.col - 1][currentSquare.row - 2] = 'X';
            }

    }
    console.log(`You made it in ${x} moves!  Here's your path:`)
    result.forEach(element => {
        console.log(`[${element.col}, ${element.row}]`);
    });
}

export default knightsTravails;