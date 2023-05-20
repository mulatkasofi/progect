import { AUTH_API_URL } from "../../consts/conf";

export interface ActivateUserBody {
  uid: "string";
  token: "string";
}

interface SuccessResponse {}

export interface FailureResponse {
  error: true;
}

export const activateUser = (
  body: ActivateUserBody
): Promise<SuccessResponse | FailureResponse> =>
  fetch(`${AUTH_API_URL}/auth/users/activation/`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.ok ? {} : { error: true };
  });
