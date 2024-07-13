import { Link } from "react-router-dom"
import { Container, Divider, Header } from "semantic-ui-react"
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
            {Examples
                .sort((a, b) => a.header.localeCompare(b.header))
                .map(
                    (item, index) => (
                        <li key={index}>
                            <Link to={`/examples/${item.id}`}>{item.header}</Link>
                        </li>
                    )
                )}
        </Container>
    </>
)

export default ExampleSummary
