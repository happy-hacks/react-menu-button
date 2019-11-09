import React, { useState } from 'react';
import RolllerButton from './roller-button/RolllerButton';

export default () => {
	const [active, setActive] = useState(false);

	return (
		<div style={active ? { ...styles, ...activeStyle } : styles}>
			{
				<RolllerButton
					size={40}
					openColor="dodgerblue"
					closeColor="red"
					duration={1000}
					setActive={setActive}
					active={active}
				/>
			}
		</div>
	);
};

const styles = {
	position: 'absolute',
	bottom: 0,
	right: 0,
	height: '200px',
	width: '200px',
	backgroundColor: '#F9812A',
	clipPath: 'circle(100px at 50% 50%)',
	transition: 'all 1500ms',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center'
};

const activeStyle = {
	clipPath: 'circle(100vh at 100% 50%)',
	height: '100vh',
	width: '100vw'
};
