import { Container, Divider, Grid, Header, HeaderSubheader, Icon, Image, List, Segment } from "semantic-ui-react"
import FooterImage from '../assets/pets/oscar/oscar-icon.jpg'
import { MediaProps, MediaType } from "../types/Media"
import { Media } from "./Media"

const AppFooter = () => {

  const desktopStyle = {
    margin: '5em 0em 0em',
    padding: '1em 0em'
  }

  const mobileStyle = {
    margin: '1em 0em 0em'
  }

  const FormattedFooter = ({ media }: MediaProps) => {
    const isMobile: boolean = media === MediaType.Mobile
    return (
      <>
        <Segment inverted style={isMobile ? mobileStyle : desktopStyle} vertical>
          <Container textAlign='center'>

            <Grid verticalAlign='middle' inverted >
              <Grid.Column width={8} textAlign='center'>
                <Image circular size='tiny' src={FooterImage} floated='right' />
              </Grid.Column>
              <Grid.Column width={8} textAlign='left'>
                <Header as={isMobile ? 'h3' : 'h2'} inverted>
                  Melanie Nicholas
                </Header>
                <HeaderSubheader>
                  Animal Portrait Artist
                </HeaderSubheader>
              </Grid.Column>
            </Grid>

            <Divider inverted section style={{ marginTop: '1em', marginBottom: '1em' }} />

            <List horizontal inverted divided link size='medium'>
              <List.Item as='a' target='_blank' rel='noopener noreferrer' href='mailto:melnicholas72%40gmail.com?Subject=Portrait%20Enquiry'>
                <Icon name='mail' />
                E-Mail
              </List.Item>
              <List.Item as='a' target='_blank' rel='noopener noreferrer' href='https://twitter.com/melnicholas72'>
                <Icon name='twitter' />
                Twitter
              </List.Item>
            </List>
          </Container>
        </Segment>
      </>
    )
  }


  return (
    <>
      <Media greaterThan='mobile'>
        <FormattedFooter media={MediaType.Desktop} />
      </Media>
      <Media at='mobile'>
        <FormattedFooter media={MediaType.Mobile} />
      </Media>
    </>
  )
}

export default AppFooter
