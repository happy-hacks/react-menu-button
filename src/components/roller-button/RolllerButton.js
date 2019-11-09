import React, { useState } from 'react';

export default ({ size, openColor, closeColor, duration, setActive, active }) => {
	const styles = makeStyles(size, openColor, closeColor, duration);

	const style = (active) => {
		return active ? { ...styles.main, ...styles.active } : styles.main;
	};

	const buttonStyle = (index, active) => {
		return active
			? { ...styles.symbolMain, ...styles[`symbol${index}`].open }
			: { ...styles.symbolMain, ...styles[`symbol${index}`].close };
	};

	return (
		<div style={style(active)} onClick={() => setActive(!active)}>
			<div style={buttonStyle(1, active)}></div>
			<div style={buttonStyle(2, active)}></div>
			<div style={buttonStyle(3, active)}></div>
		</div>
	);
};

const makeStyles = (size, openColor, closeColor, duration) => ({
	main: {
		//backgroundColor: 'fuchsia',
		width: size,
		height: size,
		//position: 'absolute',
		//bottom: '50vh',
		//left: '50vw',
		transformOrigin: 'center',
		transition: `all ${duration}ms ease-out`
	},
	active: {
		transform: 'rotate(-180deg)',
		left: `calc(50vw - (${size}px / 2))`
	},
	symbolMain: {
		width: size,
		height: size / 5,
		backgroundColor: openColor,
		borderRadius: size,
		position: 'absolute',
		top: `calc(50% - (${size / 10}px))`,
		transformOrigin: 'center',
		transition: `all ${duration}ms ease-out`,
		right: 0
	},
	symbol1: {
		open: {
			transform: 'rotate(45deg)',
			backgroundColor: closeColor
		},
		close: {
			transform: `translateY(calc((${size / 10}px) - ${size / 2}px))`
		}
	},
	symbol2: {
		open: {
			opacity: 0,
			backgroundColor: closeColor,
			transition: `all ${duration / 2}ms ease-out`
		},
		close: {}
	},
	symbol3: {
		open: {
			transform: 'rotate(-45deg)',
			backgroundColor: closeColor
		},
		close: {
			width: (size / 3) * 2,
			transform: `translateY(calc( ${size / 2}px - (${size / 10}px)))`
		}
	}
});

const makeButtonStyle = () => ({
	active: {},
	inactive: {}
});
const makeSymbolStyle = () => ({
	active: {},
	inactive: {}
});
