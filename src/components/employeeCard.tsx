import React from 'react';
import { Card, CardActionArea, CardContent, CardContentProps, Typography, Avatar, styled } from '@mui/material';
import { EmployeeHierarchyType, EmployeeProps } from '../types/employee';

export interface Props {
    data: EmployeeHierarchyType[];
}

const CustomCardContent = styled(CardContent)<CardContentProps>(() => ({
	display: 'flex',
	flexDirection: 'column',
	paddingTop: '0px',
	paddingLeft: '40px',
	justifyContent: 'center',
}));

const EmployeeCard: React.FC<EmployeeProps> = (props) => (
	<Card key={props.id}>
		<CardActionArea>
			<CardContent>
				<Avatar src={props.picture} alt={props.firstName} variant='rounded' sx={{width: 66, height: 66}}></Avatar>
				<CustomCardContent>
					<Typography variant='body1' component='div'>
						{props.firstName} {props.lastName}
					</Typography>
					<Typography variant='h6' component={'div'}>
						{props.role}
					</Typography>
				</CustomCardContent>
			</CardContent>
		</CardActionArea>
	</Card>
);

export default EmployeeCard;
