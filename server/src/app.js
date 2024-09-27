
import express from "express";
import productsRouter from "./routes/products.router.js";
import mongoose from 'mongoose';
//import __dirname from "./utils.js";

const app = express();
const PORT = process.env.PORT || 8080;

const CONNECTION_STRING = 'mongodb+srv://eugeniomatiasbrave:Eco336699@clustereugebrave.g7439kd.mongodb.net/VadeProducts?retryWrites=true&w=majority&appName=ClusterEugeBrave';
mongoose.connect(CONNECTION_STRING);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});


app.use(express.json()); 
app.use('/api/products', productsRouter);