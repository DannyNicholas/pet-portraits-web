import { Link } from "react-router-dom"
import { Container, Divider, Grid, GridColumn, Header, Image, Segment } from "semantic-ui-react"
import { Examples } from "../config/Examples"

const ExampleSummary = () => (
    <>
        <Container text>
            <Header as='h2'>Example Portraits</Header>
            <Divider />
            <p>
                Here are some examples of my portraits including the original photos that I worked from.
                Ideally I work from one photo but sometimes I have used more than one photo to complete a drawing.
            </p>
            <p>
                Click on each pet to see the portraits and the original photos.
            </p>
            <Grid stackable textAlign='center'>
                {Examples
                    .sort((a, b) => a.header.localeCompare(b.header))
                    .map(
                        (item, index) => (
                            <GridColumn width={8}>
                                <Link to={`/examples/${item.id}`} key={index} >
                                    <Segment secondary >
                                        <Header as={'h3'}>
                                            <Image circular src={item.icon} size='massive' />
                                            {item.header}</Header>
                                    </Segment>
                                </Link>
                            </GridColumn>
                        )
                    )}
            </Grid >
        </Container >
    </>
)

export default ExampleSummary
