import { useParams } from "react-router-dom"
import { Container, Divider, Header } from "semantic-ui-react"

const Examples = () => {

    const { id } = useParams()

    type ExampleContent = {
        readonly id: string,
        readonly text: string,
    }

    const contentItems: ExampleContent[] = [
        {
            id: 'george',
            text: 'some text',
        },
        {
            id: 'hello',
            text: 'cheese',
        },
    ]

    const content: ExampleContent | undefined = contentItems.find(item => item.id === id)
    if (typeof content === "undefined") {
        throw new Error(`Example '${id}' not found.`)
    }

    return (
        <>
            <Container text>
                <Header as='h2'>Examples</Header>
                <Divider />
                <p>
                    Example: {content.id}
                </p>
                <p>
                    Example: {content.text}
                </p>
            </Container>
        </>
    )
}

export default Examples
