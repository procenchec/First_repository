import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styled from 'styled-components';
import list from "../../constants/common";

const InputLabelStyle = styled(InputLabel)`
  color: white !important;
`;

function Lb7({ value, setValue, ...rest }) {

  const handleChange = (params, item) => {
    setValue(item.props.value)
  }

  return (
    <FormControl {...rest}>
      <InputLabelStyle id="demo-simple-select-helper-label">СПИСОК</InputLabelStyle>
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
