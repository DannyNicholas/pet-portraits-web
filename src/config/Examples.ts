import Mitzy from "../assets/media/MitzyBIG.jpg"
import MitzyPhoto from "../assets/media/Mitzy_Colour_Fixed-cropped.jpg"
import MerlinPhoto from "../assets/pets/merlin/merlin-photo.jpg"
import Merlin from "../assets/pets/merlin/merlin.jpg"
import { ContentType, ExampleContent } from "../types/Example"

// holds content for each example page
export const Examples: ExampleContent[] = [
    {
        id: 'merlin',
        header: 'Merlin',
        structure: [
            {
                type: ContentType.Text,
                text: 'My first portrait - a 21st birthday present for my husband.',
            },
            {
                type: ContentType.Image,
                image: Merlin,
                caption: 'Merlin'
            },
            {
                type: ContentType.Image,
                image: MerlinPhoto,
                caption: 'Merlin - Original Photo'
            },
        ]
    },
    {
        id: 'mollie',
        header: 'Mollie',
        structure: [
            {
                type: ContentType.Text,
                text: 'My first portrait - a 21st birthday present for my husband.',
            },
            {
                type: ContentType.Image,
                image: Merlin,
                caption: 'Merlin'
            },
            {
                type: ContentType.Image,
                image: MerlinPhoto,
                caption: 'Merlin - Original Photo'
            },
        ]
    },
    {
        id: 'maud',
        header: 'Maud',
        structure: [
            {
                type: ContentType.Text,
                text: 'My first portrait - a 21st birthday present for my husband.',
            },
            {
                type: ContentType.Image,
                image: Merlin,
                caption: 'Merlin'
            },
            {
                type: ContentType.Image,
                image: MerlinPhoto,
                caption: 'Merlin - Original Photo'
            },
        ]
    },
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
