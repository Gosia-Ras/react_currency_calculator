import { ErrorBox, ErrorIcon } from "./styled";

export const Error = () => {
  return (
    <ErrorBox>
      <ErrorIcon />
      <p>
        Something went wrong! Please check your internet connection and try
        again
      </p>
    </ErrorBox>
  );
};
