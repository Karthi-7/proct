import React from 'react';
import logo from './../../assets/ilogo.jpeg';
import { CopyLink } from '../../components';
import './dashboard.css';

const mockTests = [
	{
		name: ' Periodical Test- DBMS',
		link: 'asd-qwvs-dfs',
		time: '20/05/2023 17:30'
	},
	{
		name: 'Periodical Test- SQL',
		link: 'pbl-dfse-phd',
		time: '21/05/2023 17:30'
	},
	{
		name: 'End Semsester DSA',
		link: 'fhh-dfgg-aee',
		time: '22/05/2023 17:30'
	}
];

const Dashboard = () => {
	return (
		<div className="section-type admin-dashboard">
			<div className="logo">
			<img src={logo} alt="" />
			</div>

			<h1 className="title-heading">Admin Dashbaord</h1>

			<div className="test-dashboard">
				<h2 className="title-heading">Tests</h2>

				<div className="test-items">
					{mockTests.map((test) => (
						<div className="test-item">
							<h4 className="test-time">{test.time}</h4>

							<h4 className="test-name" >
								{test.name}
							</h4>

							<CopyLink link={test.link} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
