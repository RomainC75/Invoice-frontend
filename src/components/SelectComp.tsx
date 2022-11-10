import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SelectCompInterface{
  onChange:(state:SelectChangeEvent<string>)=>void;
  value:number
}

const SelectComp = ({onChange, value}:SelectCompInterface) => {
  return <div className="SelectComp">
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="Payment Due"
        id="demo-simple-select"
        value={value.toString()}
        label="Age"
        name="paymentTerms"
        onChange={onChange}
      >
        <MenuItem value={1}>Net 1 Day</MenuItem>
        <MenuItem value={7}>Net 7 Days</MenuItem>
        <MenuItem value={14}>Net 14 Days</MenuItem>
        <MenuItem value={30}>Net 30 Days</MenuItem>
      </Select>
    </FormControl>
  </Box>
  </div>;
};

export default SelectComp;
