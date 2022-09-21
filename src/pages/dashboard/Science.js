import Page from '../../components/Page';
import { Container, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import * as React from 'react';
import Iconify from 'components/Iconify';
import UserList from './UserList';

// import SvgIconStyle from '../../../components/SvgIconStyle';
function Science() {
  // const [data, setData] = useState([]);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  // useEffect(() => {
  //   fetch(`https://api.github.com/users`)
  //     .then((response) => response.json())
  //     .then((response) => setData(response));
  // }, []);
  // console.log(data);
  // const actionColumn = [
  //   {
  //     field: 'action',
  //     headerName: '',
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="cellAction" style={{ display: 'flex', gap: '20px' }}>
  //           <Button
  //             id="fade-button"
  //             aria-controls={open ? 'fade-menu' : undefined}
  //             aria-haspopup="true"
  //             aria-expanded={open ? 'true' : undefined}
  //             onClick={handleClick}
  //           >
  //             <Iconify icon="ant-design:more-outlined" sx={{ color: 'black' }} />
  //           </Button>

  //           <Menu
  //             id="fade-menu"
  //             MenuListProps={{
  //               'aria-labelledby': 'fade-button',
  //             }}
  //             anchorEl={anchorEl}
  //             open={open}
  //             onClose={handleClose}
  //             TransitionComponent={Fade}
  //           >
  //             <MenuItem onClick={handleClose}>
  //               <Link to="#" style={{ textDecoration: 'none' }}>
  //                 <div>Edit</div>
  //               </Link>
  //             </MenuItem>
  //             <MenuItem onClick={handleClose}>
  //               <div style={{ cursor: 'pointer' }} onClick={() => handleDelete(params.row.id)}>
  //                 Delete
  //               </div>
  //             </MenuItem>
  //           </Menu>
  //         </div>
  //       );
  //     },
  //   },
  // ];
  // const userColumns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  //   {
  //     field: 'login',
  //     headerName: 'Login',
  //     width: 230,
  //     // renderCell: (params) => {
  //     //   return (
  //     //     <div className="cellWithImg">
  //     //       <img className="cellImg" src={params.row.img} alt="" />
  //     //       {params.row.username}
  //     //     </div>
  //     //   );
  //     // },
  //   },
  //   {
  //     field: 'type',
  //     headerName: 'Type',
  //     width: 230,
  //   },

  //   {
  //     field: 'node_id',
  //     headerName: 'Node_id',
  //     width: 100,
  //   },
  //   {
  //     field: 'status',
  //     headerName: 'Trạng thái hoạt động',
  //     width: 160,
  //     renderCell: (params) => {
  //       return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
  //     },
  //   },
  // ];

  return (
    <Page>
      <Container>
        {/* <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">ID</TableCell>
                <TableCell className="tableCell">Login</TableCell>
                <TableCell className="tableCell">Type</TableCell>
                <TableCell className="tableCell">node_id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((data) => (
                <TableRow key={data.id}>
                  <TableCell className="tableCell">{data.id}</TableCell>
                  <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
                  <TableCell className="tableCell">{data.login}</TableCell>
                  <TableCell className="tableCell">{data.type}</TableCell>
                  <TableCell className="tableCell">{data.node_id}</TableCell>
                  <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status} </span>
              </TableCell> 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}

        {/* <div className="datatable">
          <div className="datatableTitle">Thông tin người dùng</div>
          <DataGrid
            sx={{ height: 600 }}
            className="datagrid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div> */}
        <UserList />
      </Container>
    </Page>
  );
}
export default Science;
