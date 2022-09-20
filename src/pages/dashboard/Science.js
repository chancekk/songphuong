import Page from '../../components/Page';
import { Container } from '@mui/material';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Science() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);
  console.log(data);
  return (
    <Page>
      <Container>
        {data?.map((data) => (
          <TableRow key={data.id}>
            <TableCell className="tableCell">{data.id}</TableCell>
            {/* <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell> */}
            <TableCell className="tableCell">{data.login}</TableCell>
            {/* <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status} </span>
              </TableCell> */}
          </TableRow>
        ))}
      </Container>
    </Page>
  );
}
export default Science;
