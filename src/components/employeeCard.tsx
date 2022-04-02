import React from 'react';
import { Card, CardActionArea, CardContent, CardContentProps, Typography, Avatar, styled } from '@mui/material';
import { EmployeeHierarchyType } from '../types/employee';

const CustomCardContent = styled(CardContent)<CardContentProps>(() => ({
	display: 'flex',
	flexDirection: 'column',
	paddingTop: '0px',
	paddingLeft: '40px',
	justifyContent: 'center',
}));

const EmployeeCard: React.FC<EmployeeHierarchyType> = (props) => (
	<>
		<div>
			<Card key={props.parent.id}>
				<CardActionArea>
					<CardContent>
						<Avatar src={props.parent.picture} alt={props.parent.firstName} variant='rounded' sx={{ width: 66, height: 66 }}></Avatar>
						<CustomCardContent>
							<Typography variant='body1' component='div'>
								{props.parent.firstName} {props.parent.lastName}
							</Typography>
							<Typography variant='h6' component={'div'}>
								{props.parent.role}
							</Typography>
						</CustomCardContent>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>

		{props.children && props.children.length && props.children.map((childProps) => (<div key={childProps.parent.id}>
			<EmployeeCard key={childProps.parent.id} {...childProps}></EmployeeCard>
		</div>
		))}
	</>
);

export default EmployeeCard;
