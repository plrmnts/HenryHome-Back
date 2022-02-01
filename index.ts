import server from './src/server' 
import 'dotenv/config'
import './src/db'

const PORT = process.env.PORT || 3002
server.listen(PORT, ()=>{
    console.log(`"%s listening at ${PORT}`);
})