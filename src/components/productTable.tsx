import { useState, useEffect, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, CircularProgress } from "@mui/material";
import UseDashboard from "./dashboard/container";

interface ProductTableProps {
  city: string;
}

const ProductTable: React.FC<ProductTableProps> = ({ city }) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, hasMore } = UseDashboard("mumbai", page);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const fetchMoreData = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (tableContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          tableContainerRef.current;
        if (scrollHeight - scrollTop <= clientHeight) {
          fetchMoreData();
        }
      }
    };

    const container = tableContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isLoading, hasMore]);

  return (
    <TableContainer
      component={Paper}
      ref={tableContainerRef}
      sx={{ maxHeight: "72vh", overflowY: "auto" }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: "#941f5e",
                fontWeight: 500,
                height: "10px",
                padding: "8px 16px",
              }}
            >
              Product Name
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: "#941f5e",
                fontWeight: 500,
                height: "10px",
                padding: "8px 16px",
              }}
            >
              Status
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: "#941f5e",
                fontWeight: 500,
                height: "10px",
                padding: "8px 16px",
              }}
            >
              Area
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: "#941f5e",
                fontWeight: 500,
                height: "10px",
                padding: "8px 16px",
              }}
            >
              Pincode
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product_name}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: row.status === "IN_STOCK" ? "green" : "red",
                }}
              >
                {row.status}
              </TableCell>
              <TableCell align="left">{row.area}</TableCell>
              <TableCell align="left">{row.pincode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isLoading && (
        <Box display="flex" justifyContent="center" p={2}>
          <CircularProgress />
        </Box>
      )}
    </TableContainer>
  );
};

export default ProductTable;
