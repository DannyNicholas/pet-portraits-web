import { Container, Divider, Header } from "semantic-ui-react"

const Contact = () =>
(
    <Container text>
        <Header as='h2'>Contact Me</Header>
        <Divider />
        <p>
            If you want to know more about my portraits or would like to commission
            a drawing please contact me. I would love to hear from you.
        </p>
        <Header as='h3' textAlign='center'>Email: melnicholas72@gmail.com</Header>
        <Header as='h3' textAlign='center'>01225 862785</Header>
    </Container>
)

export default Contact
