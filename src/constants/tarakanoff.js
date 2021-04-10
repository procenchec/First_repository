import Iframe from "../components/Iframe";
import lr1 from "../assets/Tarakanov/lr1.pdf";
import lr2 from "../assets/Tarakanov/lr2.pdf";
import lr3 from "../assets/Tarakanov/lr3.pdf";
import lr4 from "../assets/Tarakanov/lr4.pdf";
import lr5 from "../assets/Tarakanov/lr5.pdf";
import lr6 from "../assets/Tarakanov/lr6.pdf";
import {cloneElement} from "react";
import React from "react";

export default {
    l1: <Iframe src={lr1}></Iframe>,
    l2: cloneElement(<Iframe></Iframe>, {src: lr2}),
    l3: cloneElement(<Iframe></Iframe>, {src: lr3}),
    l4: cloneElement(<Iframe></Iframe>, {src: lr4}),
    l5: cloneElement(<Iframe></Iframe>, {src: lr5}),
    l6: cloneElement(<Iframe/>, {src: lr6})
}