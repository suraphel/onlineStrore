//

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, IconButton } from '@material-ui/core';
import { MoreVertIcon } from '@material-ui/icons/MoreVert';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AddShoppingCartSharp } from '@material-ui/icons';
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia';

const LocalCarts = (props) => {
	const { avatarSrc, avatarUrl, title, subtitle, price, imgSrc, imageUrl, description } = props;

	return (
		<Card>
			<CardHeader
				avatar={<Avatar Src={avatarUrl} />}
				action={
					<IconButton aria-label="settings">
						<ShareIcon />
					</IconButton>
				}
				title={title}
				subheader={subtitle}			
			/>
			<CardMedia style={{ height: '350px' }} image={imageUrl} />

			<CardContent>
				<Typography>{description}</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Buy Now</Button>
				<Button size="small">Add to cart</Button>
				 price={price}
			</CardActions>
		</Card>
	);
};

export default LocalCarts;
