import Merlin from "../assets/media/Merlin-drawing-fixed.jpg"
import Mitzy from "../assets/media/MitzyBIG.jpg"
import MitzyPhoto from "../assets/media/Mitzy_Colour_Fixed-cropped.jpg"
import { ContentType, ExampleContent } from "../types/Example"

export const Examples: ExampleContent[] = [
    {
        id: 'george',
        header: 'George',
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
        header: 'Hello',
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
    {
        id: 'mitzy',
        header: 'Mitzy',
        structure: [
            {
                type: ContentType.Image,
                image: MitzyPhoto,
                caption: 'Mitzy'
            },
            {
                type: ContentType.Image,
                image: Mitzy,
                caption: 'Mitzy Photo'
            }
        ]
    },
]
