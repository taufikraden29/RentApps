import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const icon = ({ label, focus }) => {
	switch (label) {
		case "Home":
			return focus ? <Icon name="Home" /> : <Icon name="circle" />;
		case "Favorite":
			return focus ? <Icon name="Home" /> : <Icon name="circle" />;
		case "Cart":
			return focus ? <Icon name="Home" /> : <Icon name="circle" />;
		case "Settings":
			return focus ? <Icon name="Home" /> : <Icon name="circle" />;
	}
	return <Icon name="Home" size={20} />;
};

const BottomTabs = ({ state, descriptors, navigation }) => {
	return (
		<View style={{ flexDirection: "row" }}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
							? options.title
							: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<TouchableOpacity
						key={index}
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={{
							flex: 1,
							padding: 24,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Icon label={label} focus={isFocused} />
						<Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
							{label}
						</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

export default BottomTabs;

const styles = StyleSheet.create({});
