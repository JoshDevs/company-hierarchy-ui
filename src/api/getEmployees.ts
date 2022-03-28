import fetch, { Response } from 'node-fetch';
import getEmployeesUrl from '../../mockApi/endpoints';

export interface EmployeesResponse {
    id: string;
    firstName: string;
    lastName: string;
    role: string;
    picture: string;
}

export const getEmployees = async (): Promise<EmployeesResponse[]> => {
	let response: Response;
	try {
		response = await fetch(getEmployeesUrl(), {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.status === 200) return await response.json();
	} catch (e) {
		throw new Error(`Retrieving the Employees failed: ${e.message}`);
	}
};