import { Link, useParams } from "react-router-dom"
import { Container, Divider, Grid, GridColumn, GridRow, Header, Image, Label } from "semantic-ui-react"
import { Examples } from "../assets/examples/Examples"
import { ContentType, ExampleContent, ImageContent, TextContent } from "../types/Example"

const Example = () => {

    const { id } = useParams()

    // extract content for chosen example page
    // throw an error if user has navigated to an unrecognised example
    const content: ExampleContent | undefined = Examples.find(item => item.id === id)
    if (typeof content === "undefined") {
        throw new Error(`Example '${id}' not found.`)
    }

    const ImageComponent = ({ image }: { image: ImageContent }) => {
        return (
            <GridRow>
                <GridColumn width={16} textAlign='left'>
                    <Image src={image.image} fluid />
                    <Label>{image.caption}</Label>
                </GridColumn>
            </GridRow>
        )
    }

    const TextComponent = ({ text }: { text: TextContent }) => {
        return (
            <GridRow>
                <GridColumn width={16} textAlign='left'>
                    <p>
                        {text.text}
                    </p>
                </GridColumn>
            </GridRow>
        )
    }

    return (
        <>
            <Container text>
                <Header as='h2'>{content.header}</Header>
                <Divider />
                <Grid verticalAlign='middle' stackable >
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
                </Grid>
                <Header as='h2'>Other Examples</Header>
                <Divider />
                <p>Click below to see other examples of my work</p>
                {Examples.map(
                    item => (
                        <li><Link to={`/examples/${item.id}`}>{item.header}</Link></li>
                    )
                )}
            </Container>
        </>
    )
}

export default Example
