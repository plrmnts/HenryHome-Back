import mongoose, { ConnectOptions } from "mongoose";
import 'dotenv/config'



mongoose
    .connect(`${process.env.MONGODB_URI }`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      
    } as ConnectOptions)
    .then((db) => console.log(`DB is connected`))
    .catch((err) => console.log(err));
