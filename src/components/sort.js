import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ onChange }) {
  const [sort, setSort] = React.useState('');

  const handleChange = (event) => {
    setSort(event.target.value);
    onChange(event);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sort}
        label="Age"
        onChange={handleChange}
        >
        <MenuItem value="maxToMin">Price: Max to Min</MenuItem>
        <MenuItem value="minToMax">Price: Min to Max</MenuItem>
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="HighToLow">Rating: High to Low</MenuItem>
        <MenuItem value="LowToHigh">Rating: Low to High</MenuItem>
        </Select>

      </FormControl>
    </Box>
  );
}
