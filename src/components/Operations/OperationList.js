import React from 'react';
import Operation from './Operation';

export default class OperationList extends React.Component {
	render() {
		return (
			<div className="list">
				<Operation name="Op1" value="200"/>
				<Operation name="Op2" value="200"/>
				<Operation name="Op3" value="200"/>
				<Operation name="Op4" value="200"/>
				<Operation name="Op5" value="200"/>
				<Operation name="Op6" value="300"/>
			</div>
		);
	}
}