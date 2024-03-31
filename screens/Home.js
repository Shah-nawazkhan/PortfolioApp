/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */

import React from 'react';
import {
	View, Text,
	StyleSheet, Image
} from 'react-native';
const technologies =
	[
		'React Native',
		'JavaScript',
		'React.js',
		'Node.js',
		'Express',
		'MongoDB'
	];	
const Home = () => {
	const renderTechBoxes = () => {
		return (
			<View style={styles.techContainer}>
							{technologies
					.map((tech, index) => (
						<View key={index}
							style={styles.techBox}>
							<Text style={styles.techText}>
								{tech}
							</Text>
						</View>
					))}
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<Image source=
				{
					{
						uri:
'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					}
				} style={styles.profileImage} />
			<Text style={styles.header}>
				Shahnawaz Khan
			</Text>
			<Text style={styles.subheader}>
				Software Developer
			</Text>
			<Text style={styles.description}>
				Welcome to my portfolio app! I am a
				passionate developer with expertise
				in building cross-platform web and mobile applications.
			</Text>
			<Text style={styles.subheader}>
				Technologies Known
			</Text>
			{renderTechBoxes()}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	profileImage: {
		width: 150,
		height: 150,
		borderRadius: 75,
		marginBottom: 20,
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'black'
	},
	subheader: {
		fontSize: 18,
		color: '#666',
		marginBottom: 20,
	},
	description: {
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 20,
	},
	techContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	techBox: {
		backgroundColor: '#61dafb',
		borderRadius: 5,
		padding: 5,
		margin: 5,
	},
	techText: {
		color: '#fff',
	},
});

export default Home;
