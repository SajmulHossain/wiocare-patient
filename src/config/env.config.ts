interface IEnv {
  jwt_access_token_secret: string;
  jwt_refresh_token_secret: string;
  api_endpoint: string;
  next_public_base_url: string;
}

const loadEnv = (): IEnv => {
  return {
    jwt_access_token_secret: process.env.JWT_ACCESS_TOKEN_SECRET as string,
    jwt_refresh_token_secret: process.env.JWT_REFRESH_TOKEN_SECRET as string,
    api_endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT as string,
    next_public_base_url: process.env.NEXT_PUBLIC_BASE_URL as string,
  };
};

export default loadEnv();
