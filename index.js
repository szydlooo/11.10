const mongoString = "mongodb+srv://szydlooo:1234@szydlooo.r5unm5g.mongodb.net/?retryWrites=true&w=majority"

const { MongoClient } = require('mongodb');

const client = new MongoClient(mongoString);
async function main(){
    try{

        await client.connect();
    }   catch (error){
        console.error(error);
    }   finally{
        await client.close();
    }
}

main();

//chuj kocham mefedron