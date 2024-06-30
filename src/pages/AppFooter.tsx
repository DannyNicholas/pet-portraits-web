import { Container, Divider, Header, Image, List, Segment } from "semantic-ui-react"
import Danny from '../assets/download.png'

const AppFooter = () => {

  return (
    <>
      <Segment inverted style={{ margin: '5em 0em 0em', padding: '3em 0em' }} vertical>
        <Container textAlign='center'>
          <Header as='h2' inverted>
            <Image circular src={Danny} /> Melanie Nicholas - Animal Portrait Artist
          </Header>
          <Divider inverted section />
          <Image src='/vite.svg' centered size='mini' />
          <List horizontal inverted divided link size='small'>
            <List.Item as='a' href='#'>
              E-Mail
            </List.Item>
            <List.Item as='a' href='#'>
              Twitter
            </List.Item>
          </List>
        </Container>
      </Segment>
    </>
  )
}

export default AppFooter
