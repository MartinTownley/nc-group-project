import Header from "../Homepage/Header"
import HolidayDashboard from "./HolidayDashboard"
import HolidayStopPage from "./HolidayStopPage"
import CommentSection from "./CommentsSection"
import ListOfStops from "./ListOfStops"
import NavBar from "../Homepage/NavBar"
import React from "react";
import { View } from "react-native-web"



const ManageHoliday = (()=>{

    return (
        <View>
             < Header />
            <p>This is manage holiday▼▼▼</p>
            < HolidayDashboard />
            < ListOfStops />
            < HolidayStopPage />
            < CommentSection />
        </View>

    )

})

export default ManageHoliday;