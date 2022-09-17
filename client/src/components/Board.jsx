import styled from 'styled-components';

const boardState =
  [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null,    0,    1, null, null, null],
    [null, null, null,    1,    0, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ];

const BoardSection = styled.div`
  width: 75vh;
  height: 75vh;
  background: orange;
`;

//TODO map an 8X8 grid
const Board = () => {
  return(
    <BoardSection>
      {
      boardState.map(
        (row, rowIndex) => row.map(
          (column, columnIndex) => (<h1 style={{ color: 'black'}}>fuck</h1>),
        ),
      )
    }
    </BoardSection>
  )
}

export default Board;

{/* <Square
makeMoveCallback={makeMoveCallback}
// eslint-disable-next-line react/no-array-index-key
key={`${columnIndex}-${rowIndex}-${row[columnIndex]}`}
discColor={row[columnIndex]}
rowIndex={rowIndex}
columnIndex={columnIndex}
/> */}