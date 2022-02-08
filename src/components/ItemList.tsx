import React from "react";

import { Store } from "../Type";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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

type Props = {
  stores: Store[];
  handleDelete: (n: number) => void;
};
export const ItemList: React.FC<Props> = ({ stores, handleDelete }) => {
  return (
    //mapで回す場合keyは必須
    <div className="inner">
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
