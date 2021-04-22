import Iframe from "../components/Iframe";
import lr1 from "../assets/Finaev/ЛР1 - Финаев А.С..pdf";
import lr2 from "../assets/Finaev/ЛР2 - Финаев А.С..pdf";
import lr3 from "../assets/Finaev/ЛР3 - Финаев А.С..pdf";
import lr4 from "../assets/Finaev/ЛР4 - Финаев А.С..pdf";
import {cloneElement} from "react";
import React from "react";

export default {
    l1: <Iframe src={lr1}></Iframe>,
    l2: cloneElement(<Iframe></Iframe>, {src: lr2}),
    l3: cloneElement(<Iframe></Iframe>, {src: lr3}),
    l4: cloneElement(<Iframe></Iframe>, {src: lr4}),
}