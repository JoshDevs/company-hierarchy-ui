import { EmployeeHierarchyType } from '../../types/employee';
import { getEmployees } from '../getEmployees';

const generateEmployeeHierarchy = async (): Promise<EmployeeHierarchyType[]> => {
	const employees = await getEmployees();

	return [{
		parent: {
			...employees[0]
		},
		children: [
			{
				parent: {...employees[1]},
				children: [
					{parent: {...employees[6]}},
					{parent: {...employees[7]}},
					{parent: {...employees[8]}},
					{parent: {...employees[11]}},
				]
			},
			{parent: {...employees[2]}},
			{
				parent: {...employees[3]},
				children: [
					{parent: {...employees[9]},
						children: [
							{parent: {...employees[10]}},
						]
					},
				],
			},
			{parent: {...employees[4]}},
			{parent: {...employees[5]}},
		],
	}];
};

const generateEmployeeHierarchyV2 = async (): Promise<EmployeeHierarchyType> => {
	const employees = await getEmployees();
	console.table(employees);

	return {
		parent: {
			...employees[0]
		},
		children: [
			{
				parent: {...employees[1]},
				children: [
					{parent: {...employees[6]}},
					{parent: {...employees[7]}},
					{parent: {...employees[8]}},
					{parent: {...employees[11]}},
				]
			},
			{parent: {...employees[2]}},
			{
				parent: {...employees[3]},
				children: [
					{parent: {...employees[9]},
						children: [
							{parent: {...employees[10]}},
						]
					},
				],
			},
			{parent: {...employees[4]}},
			{parent: {...employees[5]}},
		],
	};
};

export default generateEmployeeHierarchy;