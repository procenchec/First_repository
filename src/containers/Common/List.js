import list from '../../constants/common';
import { DataGrid } from '@material-ui/data-grid';
import React from "react";
import Kosyrev from "../Kosyrev";
import { Photo as Tarakanov }  from "../Tarakanov";
import Drawer from "../../components/Drawer";
import Nikulin from "../Nikulin"
// import Protsenko from '../Protsenko'

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

const people = {"Косырев":Kosyrev, "Тараканов":Tarakanov, "Никулин":Nikulin};

export default function DataTable() {
    const stateDrawer = React.useState(false);
    const [state, setState] = stateDrawer;
    const [Content, setConent] = React.useState();
    console.log(Content);
    const handleClick = (params) => {
        const name = params.row.name;
        if (name in people) {
            setConent(people[name])
            setState(true);
        } else {
            window.open("/" + name);
        }
    }
    return (
        <>
            <div style={{ height: '100vh', width: '100%' }}>

                <DataGrid onRowClick={handleClick} rows={list} columns={columns} pageSize={26} />
            </div>
            {Content && <Drawer stateDrawer = {stateDrawer}>


                {Content}
            </Drawer>}

        </>)
}
