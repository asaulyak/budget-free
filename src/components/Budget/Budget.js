import React from 'react';

export default class Budget extends React.Component {
	render() {
		return (
			<div className="budget">
				<div className="goal"></div>
				<div className="balance"></div>
			</div>
		);
	}
}