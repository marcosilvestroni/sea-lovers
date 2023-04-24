const SendStatusResult = ({ status, t }) => {
  if (status === "OK") {
    return <div>{t("formSuccess")}</div>;
  }

  return <div>{t("formFail")}</div>;
};

export default SendStatusResult;

