const SendStatusResult = ({ status }) => {
  if (status === "OK") {
    return <div>Inviato con successo</div>;
  }

  return <div>c'é stato un problem con l'invio, riprova!</div>;
};

export default SendStatusResult;
