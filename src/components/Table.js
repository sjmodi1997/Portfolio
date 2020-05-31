import React from 'react';
import Container from 'react-bootstrap/Container';
import "react-sweet-progress/lib/style.css";
import { Row } from 'react-bootstrap';
//import TableTemplate, { TableWrapper, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell } from '@trendmicro/react-table';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 100,
    }
});

function createData(name, tools) {
    return { name, tools};
}

const rows = [
    createData('LANGUAGES', 'C++, C, Java, PHP'),
    createData('FRONTEND', 'ReactJS, HTML, CSS, Material-UI'),
    createData('BACKEND', 'RESTAPI, Slim, PHP'),
    createData('DATABASE', 'Postgres'),
    createData('ENVIRONMENT', 'Ubuntu, CentOS'),
    createData('TOOLS', 'Vim, SVN, Git, VSCode'),
];

function TableSkills(props) {
    const classes = useStyles();
    return (
        <Container className="skillsComponent" fluid={true}>
            <h2 className="skillsHeading"> Technical Skills </h2>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row" className="tableHeading">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left" className="tableRow">{row.tools}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default TableSkills;