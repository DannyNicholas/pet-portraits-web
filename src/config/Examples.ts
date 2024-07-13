import BertiePhoto from "../assets/pets/bertie/bertie-photo.jpg"
import Bertie from "../assets/pets/bertie/bertie.jpg"
import FiliPhoto from "../assets/pets/fili/fili-photo.jpg"
import Fili from "../assets/pets/fili/fili.jpg"
import GeorgePhoto1 from "../assets/pets/george/george-photo-1.jpg"
import GeorgePhoto2 from "../assets/pets/george/george-photo-2.jpg"
import George from "../assets/pets/george/george.jpg"
import JazzPhoto from "../assets/pets/jazz/jazz-photo.jpg"
import Jazz from "../assets/pets/jazz/jazz.jpg"
import LegendPhoto from "../assets/pets/legend/legend-photo.jpg"
import Legend from "../assets/pets/legend/legend.jpg"
import MaudPhoto1 from "../assets/pets/maud/maud-photo-1.jpg"
import MaudPhoto2 from "../assets/pets/maud/maud-photo-2.jpg"
import MaudPhoto3 from "../assets/pets/maud/maud-photo-3.jpg"
import Maud from "../assets/pets/maud/maud.jpg"
import MerlinPhoto from "../assets/pets/merlin/merlin-photo.jpg"
import Merlin from "../assets/pets/merlin/merlin.jpg"
import MitzyPhoto from "../assets/pets/mitzy/mitzy-photo.jpg"
import Mitzy from "../assets/pets/mitzy/mitzy.jpg"
import MolliePhoto1 from "../assets/pets/mollie/mollie-photo-1.jpg"
import MolliePhoto2 from "../assets/pets/mollie/mollie-photo-2.jpg"
import MolliePhoto3 from "../assets/pets/mollie/mollie-photo-3.jpg"
import Mollie from "../assets/pets/mollie/mollie.jpg"
import MustardPhoto from "../assets/pets/mustard/mustard-photo.jpg"
import Mustard from "../assets/pets/mustard/mustard.jpg"
import OscarPhoto from "../assets/pets/oscar/oscar-photo.jpg"
import Oscar from "../assets/pets/oscar/oscar.jpg"
import Saffy from "../assets/pets/saffy/saffy.jpg"
import SoldusPhoto from "../assets/pets/soldus/soldus-photo.jpg"
import Soldus from "../assets/pets/soldus/soldus.jpg"
import SonnyPhoto from "../assets/pets/sonny/sonny-photo.jpg"
import Sonny from "../assets/pets/sonny/sonny.jpg"
import TommyPhoto from "../assets/pets/tommy/tommy-photo.jpg"
import Tommy from "../assets/pets/tommy/tommy.jpg"
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
                text: 'Dennis, who commissioned the portrait of Mollie as a surprise present for his friends, wanted the pose from the middle photo for the drawing.\
                Unfortunately the photo wasn\'t clear enough for the detail I needed, so I used a combination of 3 photos to complete the portrait.\
                I had to use a lot of artistic licence for this portrait and so I was delighted and relieved when I received this message from Dennis:',
            },
            {
                type: ContentType.Text,
                quote: true,
                text: '"We gave the portrait to Mollie\'s owners this week and they were absolutely delighted, with tears in their eyes … so many many many thanks for a great drawing."',
            },
            {
                type: ContentType.Image,
                image: Mollie,
                caption: 'Mollie'
            },
            {
                type: ContentType.Image,
                image: MolliePhoto1,
                caption: 'Mollie - Original Photo'
            },
            {
                type: ContentType.Image,
                image: MolliePhoto2,
                caption: 'Mollie - Original Photo'
            },
            {
                type: ContentType.Image,
                image: MolliePhoto3,
                caption: 'Mollie - Original Photo'
            },
        ]
    },
    {
        id: 'maud',
        header: 'Maud',
        structure: [
            {
                type: ContentType.Text,
                text: 'Helen, who commissioned the portrait of Maud for her mum, wanted the pose from the top photo for her drawing.\
                Unfortunately the photo wasn’t clear enough for the detail I needed, so I used a combination of 3 photos to complete the portrait.\
                Quite a challenge, but I was pleased with the result.  Here are a few words from Helen:',
            },
            {
                type: ContentType.Text,
                quote: true,
                text: '"Mel did a drawing of my mum\'s Jack Russell Maud which I gave her for her 70th birthday present.\
                I gave Mel a few photos to work from and she came up with a stunning image that completely captured Maud and really took my breath away.\
                My mum was delighted with such a high quality, unique gift. Thank you Mel!"',
            },
            {
                type: ContentType.Image,
                image: Maud,
                caption: 'Maud'
            },
            {
                type: ContentType.Image,
                image: MaudPhoto1,
                caption: 'Maud - Original Photo'
            },
            {
                type: ContentType.Image,
                image: MaudPhoto2,
                caption: 'Maud - Original Photo'
            },
            {
                type: ContentType.Image,
                image: MaudPhoto3,
                caption: 'Maud - Original Photo'
            },
        ]
    },
    {
        id: 'george',
        header: 'George',
        structure: [
            {
                type: ContentType.Image,
                image: George,
                caption: 'George'
            },
            {
                type: ContentType.Image,
                image: GeorgePhoto1,
                caption: 'George - Original Photo'
            },
            {
                type: ContentType.Image,
                image: GeorgePhoto2,
                caption: 'George - Original Photo'
            },
        ]
    },
    {
        id: 'mitzy',
        header: 'Mitzy',
        structure: [
            {
                type: ContentType.Image,
                image: Mitzy,
                caption: 'Mitzy'
            },
            {
                type: ContentType.Image,
                image: MitzyPhoto,
                caption: 'Mitzy - Original Photo'
            }
        ]
    },
    {
        id: 'bertie',
        header: 'Bertie',
        structure: [
            {
                type: ContentType.Image,
                image: Bertie,
                caption: 'Bertie'
            },
            {
                type: ContentType.Image,
                image: BertiePhoto,
                caption: 'Bertie - Original Photo'
            }
        ]
    },
    {
        id: 'fili',
        header: 'Fili',
        structure: [
            {
                type: ContentType.Image,
                image: Fili,
                caption: 'Bertie'
            },
            {
                type: ContentType.Image,
                image: FiliPhoto,
                caption: 'Fili - Original Photo'
            }
        ]
    },
    {
        id: 'jazz',
        header: 'Jazz',
        structure: [
            {
                type: ContentType.Text,
                quote: true,
                text: '"Thank you Mel for such a wonderful drawing of Jazz!\
                You have captured her perfectly (particularly her ears and nose!) and the drawing is much admired.\
                We can\'t thank you enough."',
            },
            {
                type: ContentType.Image,
                image: Jazz,
                caption: 'Jazz'
            },
            {
                type: ContentType.Image,
                image: JazzPhoto,
                caption: 'Jazz - Original Photo'
            }
        ]
    },
    {
        id: 'legend',
        header: 'Legend',
        structure: [
            {
                type: ContentType.Image,
                image: Legend,
                caption: 'Legend'
            },
            {
                type: ContentType.Image,
                image: LegendPhoto,
                caption: 'Legend - Original Photo'
            }
        ]
    },
    {
        id: 'mustard',
        header: 'Mustard',
        structure: [
            {
                type: ContentType.Image,
                image: Mustard,
                caption: 'Mustard'
            },
            {
                type: ContentType.Image,
                image: MustardPhoto,
                caption: 'Mustard - Original Photo'
            }
        ]
    },
    {
        id: 'oscar',
        header: 'Oscar',
        structure: [
            {
                type: ContentType.Image,
                image: Oscar,
                caption: 'Oscar'
            },
            {
                type: ContentType.Image,
                image: OscarPhoto,
                caption: 'Oscar - Original Photo'
            }
        ]
    },
    {
        id: 'saffy',
        header: 'Saffy',
        structure: [
            {
                type: ContentType.Image,
                image: Saffy,
                caption: 'Saffy'
            },
        ]
    },
    {
        id: 'soldus',
        header: 'Soldus',
        structure: [
            {
                type: ContentType.Text,
                quote: true,
                text: '"We absolutely love the drawing of Soldus. You captured her beautiful brown eyes perfectly."',
            },
            {
                type: ContentType.Image,
                image: Soldus,
                caption: 'Soldus'
            },
            {
                type: ContentType.Image,
                image: SoldusPhoto,
                caption: 'Soldus - Original Photo'
            },
        ]
    },
    {
        id: 'sonny',
        header: 'Sonny',
        structure: [
            {
                type: ContentType.Image,
                image: Sonny,
                caption: 'Sonny'
            },
            {
                type: ContentType.Image,
                image: SonnyPhoto,
                caption: 'Sonny - Original Photo'
            },
        ]
    },
    {
        id: 'tommy',
        header: 'Tommy',
        structure: [
            {
                type: ContentType.Text,
                text: 'Tommy was a present for a friend who takes my children for pony rides on him.\
                Drawing my first white animal was quite a challenge but I really enjoyed my first equine portrait.\
                More importantly, Tommy\'s owner was really pleased:',
            },
            {
                type: ContentType.Text,
                quote: true,
                text: '"Thank you very much for the portrait of Tommy, it has had lots of admirers."',
            },
            {
                type: ContentType.Image,
                image: Tommy,
                caption: 'Tommy'
            },
            {
                type: ContentType.Image,
                image: TommyPhoto,
                caption: 'Tommy - Original Photo'
            },
        ]
    },
]
