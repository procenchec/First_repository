import Iframe from "../components/Iframe";
import lab1 from "../assets/Korneev/Лабораторная_работа_№1_КорнеевАМ.pdf";
import lab2 from "../assets/Korneev/Лабораторная_работа_№2_КорнеевАМ.pdf";
import lab3 from "../assets/Korneev/Лабораторная_работа_№3_Корнеев_АМ.pdf";
import lab4 from "../assets/Korneev/Лабораторная_работа_№4_Корнеев_АМ.pdf";
import lab5 from "../assets/Korneev/Лабораторная_работа_№5_Корнеев_АМ.pdf";
import lab6 from "../assets/Korneev/Лабораторная_работа_№6_КорнеевАМ.pdf";
import { cloneElement } from "react";
import React from "react";
export default {
    l1: <Iframe src={lab1}></Iframe>,
    l2: cloneElement(<Iframe></Iframe>, { src: lab2 }),
    l3: cloneElement(<Iframe></Iframe>, { src: lab3 }),
    l4: cloneElement(<Iframe></Iframe>, { src: lab4 }),
    l5: cloneElement(<Iframe></Iframe>, { src: lab5 }),
    l6: cloneElement(<Iframe></Iframe>, { src: lab6 }),
    l7: "+"
}
