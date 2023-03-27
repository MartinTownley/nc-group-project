import { StatusBar } from "expo-status-bar";
import React from "react";
import {View} from "react-native"
import reactDom from "react-dom";
import FormPage1 from "./FormPage1";
import FormPage2 from "./FormPage2";



const AddHolidayForm = (()=>{
    return (<div>
        <FormPage1/>
        <FormPage2/>
    </div>)
})

export default AddHolidayForm;