import { ResultCard } from "./style";

const SendStatusResult = ({ status, t }) => {
  const isSuccess = status === "OK";

  if (status === "OK") {
    return <ResultCard isSuccess>{t("formSuccess")}</ResultCard>;
  }

  return <ResultCard>{t("formFail")}</ResultCard>;
};

export default SendStatusResult;

