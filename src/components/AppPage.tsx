import { Outlet } from "react-router-dom"
import { Container } from "semantic-ui-react"
import { Media } from "./Media"

const AppPage = () => {

    const desktopStyle = {
        backgroundColor: '#fff',
        marginBottom: '3em',
        padding: '3em 1em',
    }

    const mobileStyle = {
        backgroundColor: '#fff',
        marginBottom: '2em',
        padding: '3em 1em',
    }

    return (
        <>
            <Media greaterThan='mobile'>
                <Container style={desktopStyle}>
                    <Outlet />
                </Container>
            </Media>
            <Media at='mobile'>
                <Container style={mobileStyle}>
                    <Outlet />
                </Container>
            </Media>
        </>
    )
}

export default AppPage
