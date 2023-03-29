import SocialFeed from "../Homepage/SocialFeed";
import React from "react";
import { View } from "react-native";
import AddHolidayForm from "./AddHolidayForm";
import { Form } from "./Form";


const AddTrip = (()=>{

    return (
        <View>
            <p> Add trip ▼▼</p>
            < Form />
            < SocialFeed />
        </View>

    )
    
})

export default AddTrip;