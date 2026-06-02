import { useState } from "react";
import BandCard from "../BandCard";
import { Container, Row, Col } from 'react-bootstrap';

const sampleArtists = [
  {
    id: "b3cbfbda-4b0b-455a-be1e-9109073d97ce",
    name: "Linkin Park",
    summary: `Linkin Park — американская рок-группа, ставшая особенно известной в начале 2000-х благодаря альбомам, которые смешивали альтернативный рок, хип-хоп и электронное звучание. Группа прославилась эмоциональными текстами и мощными композициями, а также неповторимым вокалом и динамичными аранжировками. Самые известные песни — например, “Numb”, “In the End” и “Crawling”.`,
    updatedAt: "01-06-2026",
    imageUrl: "https://images2.alphacoders.com/542/thumb-1920-542031.jpg",
  },
  {
    "id": "3d9d7c1e-6a4b-4b8b-8d0f-5b8d0d0f6c21",
    "name": "Radiohead",
    "summary": "Альтернативный рок-коллектив из Оксфорда, известный экспериментальным звучанием и атмосферными альбомами.",
    "updatedAt": "2026-05-25T10:15:30Z",
    "imageUrl": "https://wallpapercat.com/w/full/1/3/c/2375945-3000x1980-desktop-hd-radiohead-background-photo.jpg"
  },
  {
    "id": "7c3b3c2e-1f1f-4b8a-9f9a-3c7e9f5a2e18",
    "name": "Nirvana",
    "summary": "Группа из Сиэтла, ставшая символом гранжа 90-х и оказавшая огромное влияние на рок-музыку.",
    "updatedAt": "2026-05-24T08:40:12Z",
    "imageUrl": "https://images.wallpapersden.com/image/download/nirvana-kurt-cobain-krist-novoselic_amlnaGuUmZqaraWkpJRmbmdlrWZlbWU.jpg"
  },
  {
    "id": "b1d5a6c0-3a4d-49c4-8a7f-5a2b9c1d7e44",
    "name": "The Beatles",
    "summary": "Легендарный британский рок-ансамбль, сформировавший поп-музыку XX века и задавший новые стандарты в жанре.",
    "updatedAt": "2026-05-23T16:05:45Z",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv3Oby8Cq11t-TxwGXffssxTtYFFexV4Wz6w&s"
  },
  {
    "id": "9a7f2c6b-6e31-4d9e-9f6b-2d1a4b3c7e09",
    "name": "Eagles",
    "summary": "Американская рок-группа, известная гармониями и хитами в стиле country rock и классического рока.",
    "updatedAt": "2026-05-22T12:20:09Z",
    "imageUrl": "https://wallpapercat.com/w/full/2/6/6/1345859-2700x1875-desktop-hd-the-eagles-band-wallpaper.jpg"
  },
  {
    "id": "2f8c9d10-5a21-4a6b-8b3f-4e9c2d7a6b1c",
    "name": "Daft Punk",
    "summary": "Французский электронный дуэт с узнаваемой эстетикой и инновационными релизами в жанре house и synth-pop.",
    "updatedAt": "2026-05-21T19:33:27Z",
    "imageUrl": "https://images7.alphacoders.com/405/thumb-1920-405830.jpg"
  }
];

const BandList = () => {
  const [bands, setBands] = useState(sampleArtists);

  return (
    <div>
      <Container className="my-5 ">
        <Row xs={1} md={2} lg={3} className="g-4">
          {bands.map(band => (
            <Col key={band.id}>
              <BandCard band={band} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default BandList;