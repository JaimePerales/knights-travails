class ChessBoard {
    constructor(knightStartSquareColumn, knightStartSquareRow){
        this.knightStartSquareColumn = knightStartSquareColumn;
        this.knightStartSquareRow = knightStartSquareRow;
        this.board = [...Array(8)].map(e => Array(8));
        this.board[knightStartSquareColumn][knightStartSquareRow] = 'N';
    }
}

export default ChessBoard