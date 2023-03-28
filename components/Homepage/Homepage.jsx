import Dashboard from "./Dashboard"
import ListOfTrips from "./ListOfTrips";
import SocialFeed from "./SocialFeed";
import React from "react";
import {ScrollView, View} from "react-native"
import { Button, Icon } from "@rneui/themed";





 const Homepage = (()=>{

    return (
        <ScrollView>
            <h2>Welcome back, (username)</h2>   
            < Dashboard />
            < ListOfTrips />
            < SocialFeed />
        </ScrollView>
    )

})

export default Homepage;
