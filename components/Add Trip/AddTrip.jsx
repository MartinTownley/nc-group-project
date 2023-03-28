import SocialFeed from "../Homepage/SocialFeed";
import React from "react";
import { View } from "react-native";
import AddHolidayForm from "./AddHolidayForm";


const AddTrip = (()=>{

    return (
        <View>
            <p> Add trip ▼▼</p>
            < AddHolidayForm />
            < SocialFeed />
        </View>

    )

})

export default AddTrip;