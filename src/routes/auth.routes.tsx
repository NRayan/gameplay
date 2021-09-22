import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/theme";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { AppointmentDetail } from "../screens/AppointmentDetail";
import { AppointmentCreate } from "../screens/AppointmentCreate";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: theme.colors.secondary100 },
                presentation: 'transparentModal',
            }}>
            <Screen name="SignIn" component={SignIn} />
            <Screen name="Home" component={Home} />
            <Screen name="AppointmentDetail" component={AppointmentDetail} />
            <Screen name="AppointmentCreate" component={AppointmentCreate} />
        </Navigator>
    )
}