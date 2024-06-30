import { Container, Divider, Header, Icon, Image, List, Segment } from "semantic-ui-react";
import FooterImage from '../assets/background/Oscar-drawing-v2-Fixed-cropped.jpg';

const AppFooter = () => {

  return (
    <>
      <Segment inverted style={{ margin: '5em 0em 0em', padding: '3em 0em' }} vertical>
        <Container textAlign='center'>
          <Header as='h2' inverted>
            <Image circular src={FooterImage} /> Melanie Nicholas - Animal Portrait Artist
          </Header>
          <Divider inverted section />
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

export default AppFooter
