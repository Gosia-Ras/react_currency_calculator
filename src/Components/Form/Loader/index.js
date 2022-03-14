import { LoaderBox, LoaderSpinner, LoaderText } from "./styled";

export const Loader = () => {
  return (
    <LoaderBox>
      <LoaderSpinner />
      <LoaderText>
        Loading data from the European Central Bank <br />
        Please wait...
      </LoaderText>
    </LoaderBox>
  );
};
