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
			data.map(({parent, children}) => (
				<Fragment key={parent.id}>
					<ListItem>
						<EmployeeCard {...parent}></EmployeeCard>
						{children.length && children.map(({parent}) => (<EmployeeCard key={parent.id} {...parent}></EmployeeCard>))}
					</ListItem>
				</Fragment>
			))
		}
	</>
);

export default RenderTree;