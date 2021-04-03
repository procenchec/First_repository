import Iframe from "../components/Iframe";
import lab1 from "../assets/Kosyrev/lab1.pdf";
import lab2 from "../assets/Kosyrev/lab2.pdf";
import lab3 from "../assets/Kosyrev/lab3.pdf";
import lab4 from "../assets/Kosyrev/lab4.pdf";
import lab5 from "../assets/Kosyrev/lab5.pdf";
import { cloneElement } from "react";
import React from "react";
export default {
    l1: <Iframe src={lab1}></Iframe>,
    l2: cloneElement(<Iframe></Iframe>, { src: lab2 }),
    l3: cloneElement(<Iframe></Iframe>, { src: lab3 }),
    l4: cloneElement(<Iframe></Iframe>, { src: lab4 }),
    l5: cloneElement(<Iframe></Iframe>, { src: lab5 }),
    l6: cloneElement(<Iframe></Iframe>, { src: lab5 }),
}