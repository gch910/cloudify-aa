import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "./Carousel.css";
import Track from "../Track";

const CarouselSongs = () => {
  const albums = [
    "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1607362705516-R5Q22H4FVIVPNMW8OWD7/ke17ZwdGBToddI8pDm48kOM0wi0zWgY49OChaGdbQod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Udq808UFTE3RUCYZpscC1JaI0xjbDb9OOCsv-L8MD1ND_7k-9-XsFQ9lvpTgv0wwCA/SamSpratt_KidCudi_ManOnTheMoon3_AlbumCover_Web.jpg?format=original",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4bb82b72535211.5bead62fe26d5.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81jTA8MrZEL._AC_SL1500_.jpg",
    "https://www.michigandaily.com/sites/default/files/styles/large/public/180411/Yeezus%20-%20Def%20Jam%20Recordings.jpg?itok=9lpE97_2",
  ];

  return (
    <div className="carousel-div">
      <Carousel
        style={{ height: "100%", width: "100%" }}
        offset="20"
        plugins={[
          "arrows",
          "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 4,
            },
          },
        ]}
      >
        {albums.map((el, idx) => (
          <Track key={idx} source={el} hyperlink="/" />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSongs;
