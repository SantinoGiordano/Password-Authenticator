import mongoose from 'mongoose'


const URI_MONGO_STRING = process.env.URI_MONGO_STRING;

if(!URI_MONGO_STRING){
    throw new Error('Please define MongoUri inside .env');
}
async function dbConnect(){
    if(mongoose.connection.readyState !==1){
        try {
            await mongoose.connect(URI_MONGO_STRING as string)
            console.log("DB is connected")
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    else{
        console.log("DB is already connected")
    }

}
export default dbConnect;