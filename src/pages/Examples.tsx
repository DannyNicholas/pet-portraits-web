import { useParams } from "react-router-dom"
import { Container, Divider, GridColumn, Header, Image, Label } from "semantic-ui-react"
import Merlin from "../assets/media/Merlin-drawing-fixed.jpg"

const Examples = () => {

    const { id } = useParams()

    const enum ContentType {
        Text, Image
    }

    type ExampleContent = {
        readonly id: string,
        readonly text: string,
        readonly image: string,
        readonly structure: (ImageContent | TextContent)[],
    }
    type ImageContent = {
        readonly type: ContentType.Image,
        readonly image: string,
        readonly caption: string,
    }
    type TextContent = {
        readonly type: ContentType.Text,
        readonly text: string,
    }

    const contentItems: ExampleContent[] = [
        {
            id: 'george',
            text: 'some text',
            image: Merlin,
            structure: [
                {
                    type: ContentType.Image,
                    image: Merlin,
                    caption: 'george'
                },
                {
                    type: ContentType.Text,
                    text: 'George is above',
                },
            ]
        },
        {
            id: 'hello',
            text: 'cheese',
            image: Merlin,
            structure: [
                {
                    type: ContentType.Text,
                    text: 'Hello is below',
                },
                {
                    type: ContentType.Image,
                    image: Merlin,
                    caption: 'hello'
                }
            ]
        },
    ]

    const content: ExampleContent | undefined = contentItems.find(item => item.id === id)
    if (typeof content === "undefined") {
        throw new Error(`Example '${id}' not found.`)
    }

    content.structure.map(
        item => {
            console.log(`The value enum type: ${item.type}`)
            console.log(`The value type: ${typeof item}`)
            if (item.type === ContentType.Text) {
                const text: TextContent = item as TextContent
                console.log(text.text)
            }
            if (item.type === ContentType.Image) {
                const image: ImageContent = item as ImageContent
                console.log(image.image)
            }
        })

    const ImageComponent = ({ image }: { image: ImageContent }) => {
        return (
            <GridColumn width={8} textAlign='left'>
                <Image src={image.image} fluid />
                <Label>{image.caption}</Label>
            </GridColumn>
        )
    }

    const TextComponent = ({ text }: { text: TextContent }) => {
        return (
            <p>
                {text.text}
            </p>
        )
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
                <GridColumn width={8} textAlign='left'>
                    <Image src={content.image} fluid />
                    <Label>{content.id}</Label>
                </GridColumn>

                <Header as='h2'>Test</Header>

                {content.structure.map(
                    item => {
                        if (item.type === ContentType.Text) {
                            const text: TextContent = item as TextContent
                            return <TextComponent text={text} />
                        }
                        if (item.type === ContentType.Image) {
                            const image: ImageContent = item as ImageContent
                            return <ImageComponent image={image} />
                        }
                    }
                )}

            </Container>
        </>
    )
}

export default Examples
