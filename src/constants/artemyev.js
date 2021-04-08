import Iframe from "../components/Iframe";
import lab1 from "../assets/Artemyev/lab1.pdf";
import lab7 from "../assets/Artemyev/lab7.pdf";
import { cloneElement } from "react";
import React from "react";
export default {
    l1: <Iframe src={lab1}></Iframe>,
    l2: "+",
    l3: "+",
    l4: "+",
    l5: "+",
    l6: "+",
    l7: cloneElement(<Iframe></Iframe>, { src: lab7 }),
    l8: "+"
}