// The layout part of the site

import React from 'react';
import LocalCarts from './LocalCarts';
import { Grid } from '@material-ui/core';
import Data from './Data';

const Content = () => {
	const getData = (DataObject) => {
		return (
			<Grid item xs={12} sm={4}>
				<LocalCarts {...DataObject} />
			</Grid>
		);
	};

	return (
		<Grid container spacing={3}>
			{Data.map((DataObject) => getData(DataObject))}
		</Grid>
	);
};

export default Content;
