import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import list from "../../constants/common";

function Lb7({ value, setValue, ...rest }) {

  const handleChange = (params, item) => {
    setValue(item.props.value)
  }

  return (
    <FormControl {...rest}>
      <InputLabel id="demo-simple-select-helper-label">СПИСОК</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        onChange={handleChange}
      >
        {list.map((item) => {
          return <MenuItem value={item.name}>{item.name}</MenuItem>;
        })}


      </Select>
    </FormControl>
  );
}

export default Lb7;
