import Image from "next/image";
import { DescriptionImage, DescriptionText, DescriptionWrapper } from "./style";

import descImage from "assets/img/blue.JPG";
import Text from "components/Text";

const Description = () => {
  return (
    <DescriptionWrapper>
      <DescriptionText>
        <Text variant="heading" tag={"h2"}>
          Qualcosa su di noi
        </Text>

        <Text>
          L'Appartamento al mare, un piccolo gioiello sognato da tempo..., si
          trova a Porto Recanati, nella regione Marche, centro Italia sulla
          costa del Mar Adriatico. Proprio per fare apprezzare la bellezza di
          questa zona, l'appartamento è ideale, si trova a 50 m dalla spiaggia
          di Porto Recanati e vicino a paesini meravigliosi come Recanati,
          Loreto, Sirolo e Numana.
        </Text>
        <Text>
          La struttura fornisce gratuitamente due biciclette e una convenzione
          per la spiaggia ( accordarsi con l'host per l'utilizzo).
          L'appartamento comprende 1 camera da letto, un soggiorno, una TV a
          schermo piatto, una cucina attrezzata con zona pranzo, lavastoviglie e
          1 bagno con bidet, la lavatrice e un balcone.
        </Text>
        <Text>
          L'Aeroporto più vicino è quello di Ancona-Falconara, a 37 km.
          L'Aeroporto di Roma Fiumicino è a 300 km ( 3 ore).
        </Text>
        <Text>
          Sarete i benvenuti amanti del mare! Mi rendo a disposizione per
          consigli sulla zona e sulle attrattive di riferimento per far si che
          possiate trascorrere un piacevole soggiorno nella regione Marche. Da
          appassionata viaggiatrice consiglio questa zona per i paesaggi, la
          tranquillità e la buona cucina. La guida e le foto potranno darvi
          un'idea più dettagliata.
        </Text>
        <Text>
          Appartamento in pieno centro, a pochi passi dal mare , 20 metri dal
          Lungomare Lepanto con parcheggio pubblico. Vicinissimo alla piazza
          principale Piazza Brancondi. L'appartamento è composto da 3 stanze:
          una sala con cucina attrezzata con posate, stoviglie, pentole,
          macchinetta del caffè, frigorifero, freezer, lavastoviglie, forno,
          piano cottura, mobile TV, tavolo e sedie, divano letto, una camera da
          letto con letto matrimoniale (lenzuola e biancheria inclusa e
          possibilità di inserire un lettino per bimbo piccolo) con armadio, la
          stanza del bagno (con set di asciugamani, phon, lavatrice, doccia,
          bagnoschiuma, shampoo e balsamo).
        </Text>
        <Text>
          La casa dispone di aria condizionata, di riscaldamento a pavimento e
          di un cortile privato con portabiciclette. L'appartamento è ideale per
          coppie e famiglie: il numero massimo di ospiti è 3/4 (di cui 2 adulti
          e 2 bambini oppure 3 adulti e 1 bambino, più ev. bimbo piccolo in
          lettino). La casa al primo piano con balcone, si affaccia su di un
          grazioso cortile privato, al riparo dai rumori del lungomare e dal
          movimentato Corso principale. Tutta la struttura è di recente
          costruzione. Mi rendo a disposizione per consigli sulla zona e sulle
          attrattive del luogo.
        </Text>
      </DescriptionText>
      <DescriptionImage>
        <Image src={descImage} alt="Su di noi" />
      </DescriptionImage>
    </DescriptionWrapper>
  );
};

export default Description;

