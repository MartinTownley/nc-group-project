import Dashboard from "./Dashboard"
import ListOfTrips from "./ListOfTrips";
import SocialFeed from "./SocialFeed";
import React from "react";
import {Button, View} from "react-native"



 const Homepage = (()=>{

    return (
        <View>
            <p>this is the homepage container</p>
            < Dashboard />
            < ListOfTrips />
            < SocialFeed />
        </View>
    )

})

export default Homepage;
