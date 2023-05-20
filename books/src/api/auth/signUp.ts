import { AUTH_API_URL } from "../../consts/conf";

export interface SignUpUserInfo {
  username: string;
  password: string;
  email: string;
  confirmpassword:string
}

type SuccessResponse = SignUpUserInfo;

export type FailureResponse = {
  errors: Partial<Record<keyof SignUpUserInfo, string[]>>;
};

export const signUp = (
  user: SignUpUserInfo
): Promise<SuccessResponse | FailureResponse> =>
  fetch(`${AUTH_API_URL}/auth/users/`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    const data = await res.json();
    return res.ok ? data : { errors: data };
  });
