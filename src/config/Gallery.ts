import { Photo } from 'react-photo-album';
import Mitzy from '../assets/media/Mitzy_Colour_Fixed-cropped.jpg';
import Merlin from "../assets/pets/merlin/merlin.jpg";

// holds photos for the gallery
export const Photos: Photo[] = [
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