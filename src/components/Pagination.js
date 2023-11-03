import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({ onChange }) {
  return (
    <Stack spacing={4}  >
      <Pagination className='text-center' size='large' count={5} onChange={onChange} />
    </Stack>
  );
}
