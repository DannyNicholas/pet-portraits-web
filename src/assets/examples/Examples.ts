import { ContentType, ExampleContent } from "../../types/Example"
import Merlin from "../media/Merlin-drawing-fixed.jpg"
import Mitzy from "../media/MitzyBIG.jpg"
import MitzyPhoto from "../media/Mitzy_Colour_Fixed-cropped.jpg"

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
