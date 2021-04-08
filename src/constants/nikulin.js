import Iframe from "../components/Iframe";
import lr1 from "../assets/NikulinN/1.pdf";
import lr2 from "../assets/NikulinN/2.pdf";
import lr3 from "../assets/NikulinN/3.pdf";
import lr4 from "../assets/NikulinN/4.pdf";
import {cloneElement} from "react";
import React from "react";

export default {
    l1: <Iframe src={lr1}></Iframe>,
    l2: cloneElement(<Iframe></Iframe>, {src: lr2}),
    l3: cloneElement(<Iframe></Iframe>, {src: lr3}),
    l4: cloneElement(<Iframe></Iframe>, {src: lr4}),
    l5: "-",
    l6: "-",
    l7: "-",
    l8: "-",
}
