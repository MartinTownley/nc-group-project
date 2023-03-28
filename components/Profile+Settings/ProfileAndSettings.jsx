import React from "react";
import ContactUs from "./ContactUs";
import ContaLogOut from "./LogOut";
import PrivacyPolicy from "./PrivacyPolicy"
import Profile from "./Profile"
import TermsAndConditions from "./TermsAndConditions"
import { View } from "react-native-web"
import Preferences from "./Preferences";

const ProfileAndSettings = (()=>{
    return (
        <View>
            <p> profile and settings ▼▼</p>
            <ContactUs />
            <ContaLogOut />
            <Preferences />
            <PrivacyPolicy />
            <Profile />
            <TermsAndConditions />
            

        </View>
    )
})

export default ProfileAndSettings;