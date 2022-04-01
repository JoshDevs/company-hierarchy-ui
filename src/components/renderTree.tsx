import React, { Fragment } from 'react';
import { ListItem } from '@mui/material';
import { EmployeeHierarchyType } from '../types/employee';
import EmployeeCard from './employeeCard';

export interface Props {
    data: EmployeeHierarchyType[];
}

const RenderTree: React.FC<Props> = ({data}) => (
	<>
		{
			data.map((props) => (
				<>
					<ListItem>
						<EmployeeCard {...props}></EmployeeCard>
					</ListItem>
				</>
			))
		}
	</>
);

export default RenderTree;