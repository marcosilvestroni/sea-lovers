import ContactsComp from "components/Contacts";
import Head from "next/head";

const Contacts = () => {
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
      <ContactsComp />
    </>
  );
};

export default Contacts;

