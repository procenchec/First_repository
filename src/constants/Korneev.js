import Iframe from "../components/Iframe";
import lab1 from "../assets/Korneev/Лабораторная_работа_№1_КорнеевАМ.pdf";
import lab2 from "../assets/Korneev/Лабораторная_работа_№2_КорнеевАМ.pdf";
import lab3 from "../assets/Korneev/Лабораторная_работа_№3_Корнеев_АМ.pdf";
import lab4 from "../assets/Korneev/Лабораторная_работа_№4_Корнеев_АМ.pdf";
import lab5 from "../assets/Korneev/Лабораторная_работа_№5_Корнеев_АМ.pdf";
import lab6 from "../assets/Korneev/Лабораторная_работа_№6_КорнеевАМ.pdf";
import lab7 from "../assets/Korneev/Лабораторная_работа_№7_КорнеевАМ.pdf";
import lab8 from "../assets/Korneev/Лабораторная_работа_№8_КорнеевАМ.pdf";

import laba1 from '../containers/Korneev/Lab1' 
import laba2 from '../containers/Korneev/Lab2'
import laba3 from '../containers/Korneev/Lab3' 

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
