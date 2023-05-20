import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";

import {
  activateUser,
  ActivateUserBody,
  FailureResponse,
} from "../../api/auth/activateUser";


const ActivateUser = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const params = useParams<{
    uid: "string";
    token: "string";
  }>();

  useEffect(() => {
    activateUser(params as ActivateUserBody).then((res) => {
      if ((res as FailureResponse).error) {
        setError(true);
      } else {
        navigate("/");
      }
    });
  }, [navigate, params]);

  if (error) {
    return (
      <NavLink to="/sign-up">
        <p>Error, return to sign-up page</p>
      </NavLink>
    );
  }

  return null;
};

export default ActivateUser;
