import { DataGrid } from '@material-ui/data-grid';
import React from "react";
import Kosyrev from "../Kosyrev";
import { Photo as Tarakanov } from "../Tarakanov";
import Drawer from "../../components/Drawer";
import Nikulin from "../Nikulin";
import Mironov from "../Mironov";
import Artemyev from "../Artemyev";
import BykovOvsepyan from "../BykovOvsepyan";
import kosyrev from "../../constants/kosyrev";
import mironov from "../../constants/Mironov";
import ovs from "../../constants/Ovsepyan";
import Protsenko from '../Protsenko'
import protsenko from "../../constants/protsenko";
import artemyev from "../../constants/artemyev";
import { isValidElement } from 'react';
import sheglovAnna from '../../constants/sheglova';
import Sheglova from '../Sheglova';
import Korneev from "../Korneev";
import Rozhkova from "../Rozhkova";
import rozhkova from "../../constants/rozhkova";
import _ from 'lodash';
import korneev from '../../constants/Korneev';
import turov from '../../constants/turov';
import Turov from "../Turov";
import leonova from '../../constants/leonova';
import Leonova from "../Leonova";
import Sonov from "../Sonov";
import sonov from "../../constants/sonov"
import { artemyev as artemyevName } from '../../constants/results';
import { protsenko as protsenkoName } from '../../constants/results';
import { korneev as korneevName } from '../../constants/results';
// import Protsenko from '../Protsenko'
import tarakanoff from '../../constants/tarakanoff';
import nikulin from "../../constants/nikulin";

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
    { field: 'l8', headerName: 'Laba 8', width: 130 },
    { field: 'bonus', headerName: 'Bonus', width: 130 },
    { field: 'score', headerName: 'Score', width: 130 }
];

const people = {
    "Косырев": { name: Kosyrev, ...kosyrev },
    "Тараканов": { name: Tarakanov, ...tarakanoff },
    "Никулин": { name: Nikulin, ...nikulin },
    "Миронов": { name: Mironov, ...mironov },
    "Овсепян": { name: BykovOvsepyan, ...ovs },
    "Щеглова": { name: Sheglova, ...sheglovAnna },
    "Рожкова": { name: Rozhkova, ...rozhkova },
    [artemyevName]: { name: Artemyev, ...artemyev },
    [protsenkoName]: { name: Protsenko, ...protsenko },
    [korneevName]: { name: Korneev, ...korneev },
    "Туров": { name: Turov, ...turov },
    "Леонова": { name: Leonova, ...leonova },
    "Сонов": { name: Sonov, ...sonov },
}

export default function DataTable({ list, removedPeople }) {
    const stateDrawer = React.useState(false);
    const [state, setState] = stateDrawer;
    const [Content, setConent] = React.useState();


    const handleClick = (params) => {
        const { name } = params.row;
        if (name in people) {
            if (isValidElement(people[name][params.field]) || params.field === "name") {
                setConent(people[name][params.field])
                setState(true);
            }
        } else {
            window.open("/" + name);
        }
    }

    const students = _.orderBy(list, ['name'], ['desc']);

    const filteredExample = _.differenceBy(students, removedPeople, 'name');

    return (
        <>
            <div style={{ height: '100vh', width: '100%' }}>
                <DataGrid onCellClick={handleClick} rows={filteredExample} columns={columns} pageSize={26} />
            </div>
            {Content && <Drawer stateDrawer={stateDrawer} width="50vw">
                {Content}
            </Drawer>}
        </>)
}
