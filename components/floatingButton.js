import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const Cbutton = (props) => {
	return (
		<Pressable style={styles.container} onPress={props.onPress}>
			<Text style={styles.title}>{props.title}</Text>
		</Pressable>
	);
};

export default Cbutton;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		position: "absolute",
		bottom: 20,
		left: 10,
		height: 50,
		width: 180,
		backgroundColor: "#191919",
		marginRight: 10,
	},
	title: {
		fontSize: 15,
		color: "#fff",
		fontWeight: "bold",
	},
});
