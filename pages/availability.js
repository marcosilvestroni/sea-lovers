import AvailabilityComp from "components/Availability";
import Head from "next/head";

const Availability = () => {
  return (
    <>
      <Head>
        <title>Sea Lovers Italy Apartment | Availability</title>
        <meta
          name="description"
          content="Sea Lovers Italy Apartment Bed & Breakfast"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AvailabilityComp />
    </>
  );
};

export default Availability;

