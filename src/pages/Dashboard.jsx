import React from 'react';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Tab, Tabs, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import Navbar from "../components/NavBar";
import { Search } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { connect } from 'react-redux';
import { getWorkshopTypes } from '../services/actions/workshopTypeActions';

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
            workshopType: '',
        }
    }

    onHandleSelect = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        this.props.getWorkshopTypes()
    }

    render() {
        const { classes, workshopTypes } = this.props;
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
                                                    {
                                                        workshopTypes.map((uT) =>
                                                            <MenuItem key={uT.id} value={uT.id}>{uT.type_name}</MenuItem>
                                                        )
                                                    }
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
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ workshopTypes: state.workshopTypes.workshopTypes })

export default connect(mapStateToProps, { getWorkshopTypes })(withStyles(styles)(Dashboard));