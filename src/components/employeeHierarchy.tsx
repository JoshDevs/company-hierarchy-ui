import React from 'react';
import { Paper, Grid, Box, List, CircularProgress } from '@mui/material';
import { EmployeeHierarchyType } from '../types/employee';
import RenderTree from './renderTree';


interface ComponentProps {
    isLoading: boolean;
    data: EmployeeHierarchyType[];
}

const HierarchyComponent: React.FC<ComponentProps> = ({data, isLoading}) => (
	<Paper variant='outlined'>
		<Grid container className='dev-app'>
			<Box justifyItems={'center'} alignItems={'center'} display={'flex'}>
				<List>
					{!isLoading ? (
						<RenderTree data={data}></RenderTree>
					) : (
						<CircularProgress></CircularProgress>
					)}
				</List>
			</Box>
		</Grid>
	</Paper>
);

export default HierarchyComponent;