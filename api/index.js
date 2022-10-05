import { app } from "./app.js";

const PORT = 3000;
const HOST = "0.0.0.0";


app.listen(PORT, HOST, () => {
    console.log(`Listening in ${PORT}`)
})