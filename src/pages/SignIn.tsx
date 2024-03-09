import { useAuth } from "@components/AuthProvider";
import { paths } from "@utils/router";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();
  const userContext = useAuth();
  const onClickHandler = () => {
    userContext.signin();
    navigate(paths.dashboard, { replace: true });
  };

  return (
    <>
      <p>Sign in page</p>
      <button onClick={onClickHandler}>Log in!</button>
    </>
  );
}
