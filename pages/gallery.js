import Photos from "components/Photos";
import Head from "next/head";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Sea Lovers Italy Apartment | Contacts</title>
        <meta
          name="description"
          content="Sea Lovers Italy Apartment Bed & Breakfast"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Photos />
    </>
  );
};

export default Gallery;

