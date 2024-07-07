import { Container, Header } from "semantic-ui-react"
import { MediaProps, MediaType } from "../types/Media"
import { Media } from "./Media"

const AppTitle = () => {

    const name = 'MELANIE NICHOLAS'
    const occupation = 'Animal Portrait Artist'

    const hugeText = {
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: '0.5em',
        marginTop: '1em',
    }

    const largeText = {
        fontSize: '3em',
        fontWeight: 'normal',
        marginBottom: '1em',
        marginTop: '0.5em',
    }

    const FormattedTitle = ({ media }: MediaProps) => {
        const isMobile: boolean = media === MediaType.Mobile
        return (
            <>
                <Container text >
                    <Header size='huge' textAlign='center' inverted style={isMobile ? {} : hugeText}>
                        {name}
                    </Header>
                    <Header size='large' textAlign='center' inverted style={isMobile ? {} : largeText}>
                        {occupation}
                    </Header>
                </Container>
            </>
        )
    }

    return (
        <>
            <Media greaterThan='mobile'>
                <FormattedTitle media={MediaType.Desktop} />
            </Media>
            <Media at='mobile'>
                <FormattedTitle media={MediaType.Mobile} />
            </Media>
        </>
    )
}

export default AppTitle