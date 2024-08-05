import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import UseDashboard from "./dashboard/container";

interface Product {
  pincode: string;
  product: string;
  results: {
    productName: string;
    price: string;
    originalPrice: string;
    weight: string;
    stockStatus: string;
  }[];
  status: string;
  location: string;
}

interface ProductTableProps {
  city: string;
}

const ProductTable: React.FC<ProductTableProps> = ({ city }) => {
  const { data, isLoading } = UseDashboard();

  const columns: GridColDef[] = [
    {
      field: "product_name",
      headerName: "Product Name",
      width: 700,
      // renderCell: (params: GridRenderCellParams<Product>) => (
      //   <Box
      //     sx={{
      //       overflowWrap: "break-word",
      //       wordBreak: "break-word",
      //     }}
      //   >
      //     {params.row.results.length > 0 ? (
      //       params.row.results.map((result, index) => (
      //         <Box key={index}>
      //           <Typography fontSize={13}>{result.productName}</Typography>
      //         </Box>
      //       ))
      //     ) : (
      //       <Typography fontSize={13}>No products available</Typography>
      //     )}
      //   </Box>
      // ),
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params: GridRenderCellParams<Product>) => {
        console.log(params.row.status);
        return (
          <>
            {params.row.status === "IN_STOCK" ? (
              <Typography variant="body2" color="green" fontSize={13}>
                {params.row.status}
              </Typography>
            ) : (
              <Typography variant="body2" color="red" fontSize={13}>
                {params.row.status}
              </Typography>
            )}
          </>
        );
      },
      //       ? params.row.results[0].stockStatus
      //       : "Out of Stock";

      //   return (
      //     <Typography variant="body2" color="gray" fontSize={13}>
      //       {stockStatus}
      //     </Typography>
      //   );
      // },
    },
    {
      field: "area",
      headerName: "Area",
      width: 150,
    },
    {
      field: "pincode",
      headerName: "Pincode",
      width: 150,
    },
  ];

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <DataGrid
        columns={columns}
        rows={data}
        loading={isLoading}
        disableColumnFilter
        disableColumnMenu
        columnHeaderHeight={40}
        disableColumnSorting
        onCellClick={(_, e) => e.stopPropagation()}
        hideFooter
        sx={{
          "& .MuiDataGrid-columnHeader": {
            color: "#941f5e",
            height: "10px",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "500",
          },
          "& .MuiDataGrid-cell": {
            display: "flex",
            alignItems: "center",
          },
          "& .MuiDataGrid-virtualScroller": {
            height: "72vh",
          },
        }}
      />
    </Box>
  );
};

export default ProductTable;
