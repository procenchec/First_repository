import Iframe from "../components/Iframe";
import lab1 from "../assets/Kosyrev/lab1.pdf";
import lab2 from "../assets/Kosyrev/lab2.pdf";
import lab3 from "../assets/Kosyrev/lab3.pdf";
import lab4 from "../assets/Kosyrev/lab4.pdf";
import lab5 from "../assets/Kosyrev/lab5.pdf";
import lab6 from "../assets/Kosyrev/lab6.pdf";
import lab7 from "../assets/Kosyrev/lab7.pdf";
import lab8 from "../assets/Kosyrev/lab8.pdf";
import laba1 from '../containers/Kosyrev/Lab1' 
import laba2 from '../containers/Kosyrev/Lab2'
import laba3 from '../containers/Kosyrev/Lab3'
import { cloneElement } from "react";
import React from "react";
export default {
    l1: <Iframe Lab={laba1} src={lab1}></Iframe>,
    l2: <Iframe Lab={laba2} src={lab2}></Iframe>,
    l3: <Iframe Lab={laba3} src={lab3}></Iframe>,
    l4: cloneElement(<Iframe></Iframe>, { src: lab4 }),
    l5: cloneElement(<Iframe></Iframe>, { src: lab5 }),
    l6: cloneElement(<Iframe></Iframe>, { src: lab6 }),
    l7: cloneElement(<Iframe></Iframe>, { src: lab7 }),
    l8: cloneElement(<Iframe></Iframe>, { src: lab8 }),
}