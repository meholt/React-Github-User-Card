import React from 'react';

import { Card, Container, Image, Icon } from 'semantic-ui-react';

// import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typogrpahy, Typography } from '@material-ui/core';

// const useStyles = makeStyles({
//     cardVisible: {
//         maxWidth: 345,
//     },
//     cardHidden: {
//         display: 'none'
//     },
//     media: {
//         height: 140,
//     },
// });

const UserData = props => {
    // const classes = useStyles();
    return(
        <div>

			<Container>
				<Card centered>
					<Card.Content>
						<Card.Header>{props.MyData.name}</Card.Header>
					</Card.Content>
					<Card.Content>
						<Image
							size='small'
							className='MyPic'
							src={props.MyData.avatar_url}
							wrapped
							ui={false}
						/>
						<Card.Header className='header'>
							<Icon name='github' /> {props.MyData.login}
						</Card.Header>
						<Card.Meta>
							<Icon name='home' /> {props.MyData.location}
						</Card.Meta>
						<Card.Description>{props.MyData.bio}</Card.Description>
						<Icon name='group' />
						{props.MyData.followers} Followers
					</Card.Content>
				</Card>
			</Container>
        </div>
    );
}

export default UserData;