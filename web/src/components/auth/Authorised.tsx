import { useAuth0 } from "@auth0/auth0-react";
import { PropsWithChildren } from "react";

const Authorised = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <>{children}</>;
  }
};

export default Authorised;
