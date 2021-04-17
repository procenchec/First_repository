import Iframe from "../components/Iframe";
import lr1 from "../assets/NikulinN/1.pdf";
import lr2 from "../assets/NikulinN/2.pdf";
import lr3 from "../assets/NikulinN/3.pdf";
import lr4 from "../assets/NikulinN/4.pdf";
import lr5 from "../assets/NikulinN/5.pdf";
import lr6 from "../assets/NikulinN/6.pdf";
import lr7 from "../assets/NikulinN/7.pdf";
import {cloneElement} from "react";
import React from "react";

export default {
    l1: <Iframe src={lr1}></Iframe>,
    l2: cloneElement(<Iframe></Iframe>, {src: lr2}),
    l3: cloneElement(<Iframe></Iframe>, {src: lr3}),
    l4: cloneElement(<Iframe></Iframe>, {src: lr4}),
    l5: cloneElement(<Iframe></Iframe>, {src: lr5}),
    l6: cloneElement(<Iframe></Iframe>, {src: lr6}),
    l7: cloneElement(<Iframe></Iframe>, {src: lr7}),
    l8: "+",
}
