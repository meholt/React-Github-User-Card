import React from 'react';
import { Grid, Card, Container, Image, Icon } from 'semantic-ui-react';
// import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

// const useStyles = makeStyles({
//     card: {
//         maxWidth: 345,
//     },
//     media: {
//         height: 140,
//     },
// });

const FollowerCard = props => {
    // const classes = useStyles();
    return (

        <div>
            <Container>
				<Card fluid>
					<Card.Content>
						<Card.Header>Followers</Card.Header>
					</Card.Content>
					<Card.Content>
						<Grid columns={3}>
							<Grid.Row>
								{props.MyFollowers.map(follower => (
									<Grid.Column key={follower.id}>
										<Card color='black'>
											<Image src={follower.avatar_url} wrapped ui={false} />
											<Card.Content>
												<Card.Header>
													<Icon name='github' />
													{follower.login}
												</Card.Header>
											</Card.Content>
										</Card>
									</Grid.Column>
								))}
							</Grid.Row>
						</Grid>
					</Card.Content>
				</Card>
			</Container>
        </div>
    );
}

export default FollowerCard;