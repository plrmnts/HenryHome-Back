import express, {Application} from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes'
// import 'dotenv/config' Si quieren usar varibles de entorno
// console.log(process.env.PRUEBA);

const server: Application = express()


// Configurations
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(cors())


/* server.get("/", (req,res)=>{
    res.send('Holis')
}) */

// Initial route
server.use("/api",routes)

export default server



