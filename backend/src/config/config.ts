import { config } from "dotenv";
config()

const envConfig={
    port:process.env.PORT,
    mongoDbString:process.env.MONGODB_URI,
    backendURL:process.env.BACKEND_URL,
    environment:process.env.NODE_ENV,
    frontendUrl:process.env.FRONTEND_URL
}

export default envConfig;