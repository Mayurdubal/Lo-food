import {
  Avatar,
  Box,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import ProductTable from "../productTable";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    setCity("mumbai");
  }, []);
  return (
    <Box sx={{ backgroundColor: " #fbeaf3", height: "100vh" }}>
      <header
        style={{
          padding: "1% 2% 0%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src="/logo.webp" alt="logo" width={50} height={40} />
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Chip
            label="Product Reports"
            sx={{
              backgroundColor: "#941f5e",
              color: "#ffff",
              fontSize: "13px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          />
          <Tooltip title="Sam Fisher">
            <Avatar
              alt="Remy Sharp"
              src="/profile.svg"
              sx={{ cursor: "pointer" }}
            />
          </Tooltip>
        </Box>
      </header>
      <Box sx={{ padding: "1%" }}>
        <Box
          sx={{
            backgroundColor: "#fff",
            height: "88vh",
            padding: "2%",
            borderRadius: "10px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                Product Reports
              </Typography>
              <Divider
                sx={{
                  height: "3px",
                  width: "45px",
                  backgroundColor: "#941f5e",
                  marginTop: "6px",
                  borderRadius: "10px",
                }}
              />
            </Box>
            <FormControl sx={{ m: 1 }} size="small">
              <InputLabel id="demo-select-small-label">City</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={city}
                label="City"
                sx={{
                  borderRadius: "20px",
                  width: "150px",
                  marginTop: "3px",
                  fontSize: "12px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1.5px solid #941f5e",
                  },
                  "& .MuiButtonBase-root-MuiMenuItem-root": {
                    padding: "10px",
                  },
                }}
              >
                <MenuItem value="mumbai">Mumbai</MenuItem>
                <MenuItem value="banglore">Banglore</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <ProductTable city={city} />
        </Box>
      </Box>
    </Box>
  );
};
export default Dashboard;
