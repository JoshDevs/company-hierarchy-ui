import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './styles';
import generateEmployeeHierarchy from './api/mappers/generateEmployeeHierarchy';
import HierarchyComponent from './components/employeeHierarchy';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { EmployeeHierarchyType } from './types/employee';

interface Props {
    data: EmployeeHierarchyType;
}

const renderTree = ({parent, children}: EmployeeHierarchyType) => (
	<TreeItem key={parent.id} nodeId={parent.id} label={parent.role}>
		{Array.isArray(children) ? children.map((employee) => renderTree(employee)) : null}
	</TreeItem>
);

const UsingMuiLab: React.FC<Props> = ({data}) => (
	<TreeView>
		{renderTree(data)}
	</TreeView>
);

const DevApp: React.FC = () => {
	const [employees, setEmployees] = useState([] as EmployeeHierarchyType[]);
	const [isLoading, setIsLoading] =  useState(false);

	useEffect(() => {
		setIsLoading(true);
		generateEmployeeHierarchy().then((result) => {
			setEmployees(result);
			setIsLoading(false);
		});
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<HierarchyComponent data={employees} isLoading={isLoading}></HierarchyComponent>
			{/* <UsingMuiLab data={employees.map(({parent, children}) => ({parent: parent, children: children}))}></UsingMuiLab> */}
		</ThemeProvider>
	);
};

export default DevApp;