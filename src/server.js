import app from "./app";

app.listen(process.env.SERVER_PORT, () => process.env.SERVER_ADDRESS);
