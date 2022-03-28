import getEmployeesUrl from '../../../../mockApi/endpoints';
import fetch from 'node-fetch';
import mockEmployees from '../../../../fixtures/mockEmployees';
import { getEmployees } from '../../../api/getEmployees';

describe('getEmployees', () => {
	it('end point should return a list of employees', async () => {
		const actual = await fetch(getEmployeesUrl(), {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		expect(actual.status).toBe(200);
		expect(await actual.json()).toEqual(mockEmployees);
	});

	describe('[getEmployees]', () => {
		it('should return a list of employees', async () => {
			const employees = await getEmployees();

			expect(employees).toEqual(mockEmployees);
		});
	});
});