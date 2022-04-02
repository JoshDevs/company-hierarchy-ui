import { createTheme } from '@mui/material';

const theme = createTheme({
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					background: '#b1e6c7',
					width: 285,
					height: 120,
					position: 'relative',
					paddingTop: '10px',
				}
			}
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'left',
					alignContent: 'center'
				}
			}
		},
		MuiGrid: {
			styleOverrides: {
				root: {
					display: 'flex',
					alignItems: 'center'
				},
				container: {
					width: '90%',
					margin: ['7%', 'auto']
				}
			}
		},
		MuiList: {
			styleOverrides: {
				root: {
					paddingTop: '20px',
					position: 'relative',
				}
			}
		},
		MuiListItem: {
			styleOverrides: {
				root: {
					float: 'left',
					textAlign: 'center',
					listStyleType: 'none',
					position: 'relative',
					padding: ['20px', '5px', '0px', '5px'],
				}
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					display: 'flex',
					width: 'auto',
				}
			}
		},
	}
});

export default theme;