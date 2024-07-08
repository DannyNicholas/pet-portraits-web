import { useRef, useState } from "react";
import PhotoAlbum from "react-photo-album";
import { Container, Divider, Header } from "semantic-ui-react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import Merlin from '../assets/media/Merlin-drawing-fixed.jpg';
import Mitzy from '../assets/media/Mitzy_Colour_Fixed-cropped.jpg';

const Gallery = () => {

    const captionsRef = useRef(null)
    const slideshowRef = useRef(null)
    const [index, setIndex] = useState(-1)

    const photos = [
        {
            src: Merlin,
            width: 4083,
            height: 3045,
            title: "Merlin",
            srcSet: [
                { src: Merlin, width: 320, height: 213 },
                { src: Merlin, width: 4083, height: 3045 },
            ]
        },
        {
            src: Mitzy,
            width: 3633,
            height: 3548,
            title: "Mitzy",
            srcSet: [
                { src: Mitzy, width: 320, height: 320 },
                { src: Mitzy, width: 3633, height: 3548 },
            ]
        },
    ];

    return (
        <Container text>
            <Header as='h2'>Gallery</Header>
            <Divider />
            <p>
                Please click on a picture to see the drawing in more detail.
            </p>
            <PhotoAlbum layout="rows"
                photos={photos}
                targetRowHeight={150}
                onClick={({ index: current }) => setIndex(current)} />
            <Lightbox
                index={index}
                slides={photos}
                open={index >= 0}
                close={() => setIndex(-1)}
                plugins={[Captions, Slideshow]}
                captions={{ ref: captionsRef }}
                slideshow={{ ref: slideshowRef }}
            />
        </Container>
    )
}

export default Gallery
