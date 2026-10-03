import { createAuthClient } from "better-auth/react";
import { phoneNumberClient, emailOTPClient } from "better-auth/client/plugins";
import { envConfig } from "./env.config";

const auth = createAuthClient({
  baseURL: envConfig.auth_api_base_url,
  plugins: [phoneNumberClient(), emailOTPClient()],
});

export default auth;
