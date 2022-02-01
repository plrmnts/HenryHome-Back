import server from './src/server' 
import 'dotenv/config'
import sequelize from './src/db'

const PORT = process.env.PORT || 3002

sequelize.sync({force:true}).then(()=>{
    server.listen(PORT,()=>{
        console.log(`"%s listening at ${PORT}`);
    })
})