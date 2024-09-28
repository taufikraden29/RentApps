import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	Cartscreen,
	Favoritescreen,
	Homescreen,
	Settingscreen,
	Splashscreen,
} from "../pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabs } from "../components/molecules";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainApps() {
	return (
		<Tab.Navigator
			screenOptions={{ headerShown: false }}
			tabBar={(props) => <BottomTabs {...props} />}
		>
			<Tab.Screen name="Home" component={Homescreen} />
			<Tab.Screen name="Cart" component={Cartscreen} />
			<Tab.Screen name="Favorite" component={Favoritescreen} />
			<Tab.Screen name="Settings" component={Settingscreen} />
		</Tab.Navigator>
	);
}

const Router = () => {
	return (
		<Stack.Navigator
			initialRouteName="Splash"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Splash" component={Splashscreen} />
			<Stack.Screen name="Home" component={Homescreen} />
			<Stack.Screen name="MainApps" component={MainApps} />
		</Stack.Navigator>
	);
};

export default Router;

const styles = StyleSheet.create({});
