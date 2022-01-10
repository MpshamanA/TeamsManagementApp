import React, { useCallback, useLayoutEffect } from "react";
import { Item } from "./Item";
import { Store } from "../Type";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
type Props = {
  stores: Store[];
  setStores: React.Dispatch<React.SetStateAction<Store[]>>;
  handleDelete: (n: number) => void;
};
export const ItemList: React.FC<Props> = ({
  stores,
  setStores,
  handleDelete,
}) => {
  const handleDone = (store: Store) => {
    setStores((prev) =>
      prev.map((s) => (s.id === store.id ? { ...store, done: !store.done } : s))
    );
  };

  return (
    //mapで回す場合keyは必須
    <div className="inner">
      <h1>使用できたお店一覧</h1>
      {/* {stores.length <= 0 ? (
        "登録されたお店はありません"
      ) : (
        <ul>
          {stores.map((store) => (
            <Item
              key={store.id}
              store={store}
              handleDone={handleDone}
              handleDelete={() => handleDelete(store.id)}
            />
          ))}
        </ul>
      )} */}
      <div className="m-30">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>店名</StyledTableCell>
                <StyledTableCell>更新者</StyledTableCell>
                <StyledTableCell align="right">更新日</StyledTableCell>
                <StyledTableCell align="right">登録の削除</StyledTableCell>
                {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {stores.map((store) => (
                <StyledTableRow key={store.id}>
                  <StyledTableCell component="th" scope="row">
                    {store.storeName}
                  </StyledTableCell>
                  <StyledTableCell>{store.updateUser}</StyledTableCell>
                  <StyledTableCell align="right">
                    {store.updateTime}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      size="small"
                      color="error"
                      onClick={() => handleDelete(store.id)}
                    >
                      削除
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
