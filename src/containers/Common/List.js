import list from '../../constants/common';
import { DataGrid } from '@material-ui/data-grid';
import React from "react";
import Kosyrev from "../Kosyrev";
import { Photo as Tarakanov } from "../Tarakanov";
import Drawer from "../../components/Drawer";
import Nikulin from "../Nikulin";
import Mironov from "../Mironov";
import Artemyev from "../Artemyev";
import kosyrev from "../../constants/kosyrev";
import mironov from "../../constants/Mironov";
import sheglovAnna from '../../constants/sheglova';
import Sheglova from '../Sheglova';
import Rozhkova from "../Rozhkova";
import rozhkova from "../../constants/rozhkova";
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
    { field: 'l7', headerName: 'Laba 7', width: 130 },
];

const people = {
    "Косырев": { name: Kosyrev, ...kosyrev },
    "Тараканов": { name: Tarakanov, },
    "Никулин": { name: Nikulin, },
    "Миронов": { name: Mironov, ...mironov },
    "Артемьев": { name: Artemyev, },
    "Щеглова": { name: Sheglova, ...sheglovAnna },
    "Рожкова": { name: Rozhkova, ...rozhkova } 
};

export default function DataTable() {
    const stateDrawer = React.useState(false);
    const [state, setState] = stateDrawer;
    const [Content, setConent] = React.useState();
    console.log(Content);
    const handleClick = (params) => {
        console.log(params);
        const { name } = params.row;
        if (name in people) {
            setConent(people[name][params.field])
            setState(true);
        } else {
            window.open("/" + name);
        }
    }
    return (
        <>
            <div style={{ height: '100vh', width: '100%' }}>

                <DataGrid onCellClick={handleClick} rows={list} columns={columns} pageSize={26} />
            </div>
            {Content && <Drawer stateDrawer={stateDrawer} width="50vw">


                {Content}
            </Drawer>}

        </>)
}
