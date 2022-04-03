import React from 'react';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Tab, Tabs, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import Navbar from "../components/NavBar";
import { Search } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
// import 'fontsource-roboto';
// // import '../assets/css/Dashboard.css';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import PublicIcon from '@material-ui/icons/Public';
// import VideocamIcon from '@material-ui/icons/Videocam';
// import CardsHeader from '../components/CardsHeader';
// import Cards from '../components/Cards';
// import Graphics from '../components/Graphics';
// import TableMaterial from '../components/TableMaterial';



// const data = [
//     {
//       id:1,
//       video:
//         "Como Hacer un Split en React JS || React Split Pane || Tutorial en Español (2020)",
//       fecha: "6 de sep. 2020",
//       visualizaciones: 32,
//       imagen: require("../assets/img/split.webp"),
//     },
//     {
//       id:2,
//         video:
//           "Cómo Solucionar Error al Crear Applicación de React JS",
//         fecha: "5 de sep. 2020",
//         visualizaciones: 31,
//         imagen: require("../assets/img/error.webp"),
//       },
//       {
//       id:3,
//         video:
//           "Cómo Utilizar Forever en Node JS || Ejecutar Node JS en Segundo Plano || Background Node JS",
//         fecha: "4 de sep. 2020",
//         visualizaciones: 21,
//         imagen: require("../assets/img/forever.webp"),
//       },
//   ];
const styles = theme => ({
    root: {
        flexGrow: 1
    },
    iconos: {
        color: 'white'
    },
    container: {
        paddingTop: '40px',
        alignItems: 'center'
    },
    containerGrafica: {
        marginTop: '40px'
    },
    containerTabla: {
        marginTop: '40px'
    }
});
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auto: '',
            district: '',
            workshopType:''
        }
    }

    onHandleSelect = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <Navbar />
                    </Grid>

                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={0} aria-label="basic tabs example">
                                    <Tab label="Mis Seguros - Mis Talleres" id={`simple-tab-${0}`} aria-controls={`simple-tabpanel-${0}`} />
                                </Tabs>
                            </Box>
                            <div
                                role="tabpanel"
                                hidden={false}
                                id={`simple-tabpanel-${0}`}
                                aria-labelledby={`simple-tab-${0}`}>
                                <Box sx={{ p: 3 }}>
                                    <Typography variant="h5" gutterBottom component="div">Buscar Talleres</Typography>
                                    <Grid item xs={12}>
                                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                            <FormControl fullWidth>
                                                <InputLabel id="auto-label">Vehículo</InputLabel>
                                                <Select
                                                    labelId="auto-label"
                                                    id="auto"
                                                    value={this.state.auto}
                                                    label="Vehículo"
                                                    name="auto"
                                                    onChange={this.onHandleSelect}
                                                >
                                                    <MenuItem value={1}>Marca Hyundai - Modelo: Accent - Año:2012 - Placa: X1W859</MenuItem>
                                                    <MenuItem value={2}>Marca Great Wall - Modelo: H6 - Año:2018 - Placa: D9P36</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                            <Button variant="outlined" color="error">Ver Deducibles</Button>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                            <FormControl fullWidth>
                                                <InputLabel id="district-label">Distrito</InputLabel>
                                                <Select
                                                    labelId="district-label"
                                                    id="district"
                                                    value={this.state.district}
                                                    label="Distrito"
                                                    name="district"
                                                    onChange={this.onHandleSelect}
                                                >
                                                    <MenuItem value={1}>Lima</MenuItem>
                                                    <MenuItem value={2}>Callao</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                            <FormControl fullWidth>
                                                <InputLabel id="workshopType-label">Tipo Taller</InputLabel>
                                                <Select
                                                    labelId="workshopType-label"
                                                    id="workshopType"
                                                    value={this.state.workshopType}
                                                    label="Tipo Taller"
                                                    name="workshopType"
                                                    onChange={this.onHandleSelect}
                                                >
                                                    <MenuItem value={1}>Multimarca</MenuItem>
                                                    <MenuItem value={2}>Concesionario</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button variant="contained" color="error" endIcon={<Search />}>
                                                Buscar
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div style={{ height: 400, width: '100%' }}>
                                                <DataGrid
                                                    columns={
                                                        [
                                                            {
                                                                field: 'id',
                                                            },
                                                            {
                                                                field: 'type',
                                                                headerName: 'Tipo'
                                                            },
                                                            {
                                                                field: 'name',
                                                            },
                                                            {
                                                                field: 'address',
                                                            },
                                                            {
                                                                field: 'telephone',
                                                            },
                                                            {
                                                                field: 'web',
                                                            }
                                                        ]
                                                    }
                                                    rows={
                                                        [
                                                            {
                                                                id: 1,
                                                                type: 'Consecionario',
                                                                name: 'Iza Motors',
                                                                address: 'Av Leonidas aveldaño 116',
                                                                telephone: '987464564',
                                                                web: 'http://www.izamotors.com/'
                                                            },
                                                            {
                                                                id: 2,
                                                                type: 'Consecionario',
                                                                name: 'Mitsui',
                                                                address: 'Av. La marina 354',
                                                                telephone: '987464564',
                                                                web: 'http://www.izamotors.com/'
                                                            },
                                                            {
                                                                id: 3,
                                                                type: 'Multimarca',
                                                                name: 'Iza Motors',
                                                                address: 'Av. La canada 1564',
                                                                telephone: '987464564',
                                                                web: 'http://www.izamotors.com/'
                                                            }
                                                        ]
                                                    } />
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </div>
                        </Box>
                    </Grid>
                    {/* <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                   <CardsHeader icono={<YouTubeIcon className={classes.iconos}/>} titulo="CANAL" texto="BorjaScript" color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<PublicIcon className={classes.iconos}/>} titulo="PAÍS" texto="México" color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<VideocamIcon className={classes.iconos}/>} titulo="CANTIDAD DE VÍDEOS" texto="85" color="rgba(248,80,50,1)" font="white"/>
                </Grid>

                <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="SUSCRIPTORES" texto="692"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="VISUALIZACIONES" texto="111,092"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="TIEMPO VISUALIZACIÓN" texto="2,504 horas"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="PORCENTAJE IMPRESIONES" texto="14.2%"/>
                    </Grid>

                    </Grid>

                    <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
                        <Graphics />
                    </Grid>


                    <Grid item xs={12} className={classes.containerTabla}>
                    <TableMaterial data={data}/>
                    </Grid> */}


                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);