import Iframe from "../components/Iframe";
import lab1 from "../assets/Scheglova/lab1.pdf";
import lab2 from "../assets/Scheglova/lab2.pdf";
import lab3 from "../assets/Scheglova/lab3.pdf";
import lab4 from "../assets/Scheglova/lab4.pdf";
import lab5 from "../assets/Scheglova/lab5.pdf";
import lab6 from "../assets/Scheglova/lab6.pdf";
import lab7 from "../assets/Scheglova/lab7.pdf";
import lab8 from "../assets/Scheglova/lab8.pdf";

import Lab1 from '../containers/Sheglova/Lab1' 
import Lab2 from '../containers/Sheglova/Lab2'

export default {
    l1: <Iframe Lab={Lab1} src={lab1}></Iframe>,
    l2: <Iframe Lab={Lab2} src={lab2}></Iframe>,
    l3: <Iframe src={lab3}></Iframe>, 
    l4: <Iframe src={lab4}></Iframe>, 
    l5: <Iframe src={lab5}></Iframe>, 
    l6: <Iframe src={lab6}></Iframe>,
    l7: <Iframe src={lab7}></Iframe>,
    l8: <Iframe src={lab8}></Iframe>
}