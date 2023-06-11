import React from 'react';
import logo from './../../assets/ilogo.jpeg';
import { CommonInput, CtaButton } from '../../components';
import './create.css';

const inputField = [
	'Email ID',
	'Organization Name',
	'Test Name',
	'Question Paper Link',
	'Total Expected Candidates',
	'Start Date-Time Format',
	'Duration'
];

const Create = () => {
	return (
		<div className="client-create">
			<div className="logo">
			<img src={logo} alt="" />
			</div>
			<div className="create-form">
				<h1 className="title-heading">Create a test</h1>
				<div className="input-fields" >
					{inputField.map((item) => (
						<input type="text" name="" id="" placeholder={item} style={{border:"1px solid orange"}}/>
					))}
				</div>

				<CtaButton text="Create" />
			</div>
		</div>
	);
};

export default Create;
