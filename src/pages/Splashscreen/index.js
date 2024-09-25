import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

const Splashscreen = ({ navigation }) => {
	const animation = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			navigation.replace("MainApps");
		}, 3000);
	}, []);

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<LottieView
				source={require("./../../assets/animation/splash.json")}
				style={{ width: "50%", height: "50%" }}
				autoPlay
				loop
			/>
		</View>
	);
};

export default Splashscreen;

const styles = StyleSheet.create({});
