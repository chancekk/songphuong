import Page from '../../components/Page';
import { Container } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SvgIconStyle from 'components/SvgIconStyle';
import Modal from '@mui/material/Modal';
import video from '../../assets/video/demo.mp4';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '55.5rem',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
function Maths() {
  const getIcon = (name) => (
    <SvgIconStyle
      src={`/assets/icons/navbar/${name}.svg`}
      sx={{ mx: 'auto', display: 'block', width: 50, height: 50, textAlign: 'center', color: '#fff' }}
    />
  );
  const ICONS = {
    play: getIcon('ic_play'),
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Page>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={handleOpen} sx={{ height: 150, backgroundColor: 'black' }}>
                  {ICONS.play}
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Video Hình Học
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Video mô tả cấu trúc của hình học môn toán
                  </Typography>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <video style={style} width="100%" height="500" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </Modal>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={handleOpen} sx={{ height: 150, backgroundColor: 'black' }}>
                  {ICONS.play}
                </CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Video Hình Học
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Video mô tả cấu trúc của hình học môn toán
                  </Typography>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <video style={style} width="100%" height="500" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </Modal>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={handleOpen} sx={{ height: 150, backgroundColor: 'black' }}>
                  {ICONS.play}
                </CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Video Hình Học
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Video mô tả cấu trúc của hình học môn toán
                  </Typography>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <video style={style} width="100%" height="500" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </Modal>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  );
}
export default Maths;
