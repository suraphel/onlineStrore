import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
//  import classes from '*.module.css';
import Paper from '@material-ui/core/Paper';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	TypographyStyles: {
		flex: 1
	}
}));

const Header = () => {
	const classes = useStyles();
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography className={classes.TypographyStyles}>
					<h1> Welcome to our sample Online store built with Material-ui</h1>
				</Typography>
				<AcUnitIcon />
			</Toolbar>
		</AppBar>
	);
};
export default Header;
