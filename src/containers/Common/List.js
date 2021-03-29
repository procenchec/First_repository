import list from '../../constants/common';
import { DataGrid } from '@material-ui/data-grid';
import React from "react";
import Protsenko from '../Protsenko'

const columns = [
    //{ field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'l1', headerName: 'Laba 1', width: 130 },
    { field: 'l2', headerName: 'Laba 2', width: 130 },
    { field: 'l3', headerName: 'Laba 3', width: 130 },
    { field: 'l4', headerName: 'Laba 4', width: 130 },
    { field: 'l5', headerName: 'Laba 5', width: 130 },
    { field: 'l6', headerName: 'Laba 6', width: 130 },
];


export default function DataTable() {
    const [state, setState] = React.useState(false);

    const handleClick = (params) => {

        const name = params.row.name;
        if (name === "Проценко")
        {
            setState(true);
        } else 
        {
            window.open("/" + name);
        }
    }
    return (
        <div style={{ height: '100vh', width: '100%' }}>
<<<<<<< HEAD
            <DataGrid onRowClick={handleClick} rows={list} columns={columns} pageSize={7} />
            <Protsenko open={state}/>
=======
            <DataGrid onRowClick={handleClick} rows={list} columns={columns} pageSize={26} />
>>>>>>> 20560f0d4bfc98b8f4bafe1ad127b41916bf6db7
        </div>)
}
