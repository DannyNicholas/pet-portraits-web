import { Header } from "semantic-ui-react";
import { MediaProps, MediaType } from "../types/Media";

const Title = ({ media }: MediaProps) => {

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

    const isMobile: boolean = media === MediaType.Mobile

    return (
        <>
            <Header size='huge' textAlign='center' inverted style={isMobile ? {} : hugeText}>
                {name}
            </Header>
            <Header size='large' textAlign='center' inverted style={isMobile ? {} : largeText}>
                {occupation}
            </Header>
        </>
    )
}

export default Title