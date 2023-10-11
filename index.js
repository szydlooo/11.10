const mongoString = "mongodb+srv://szydlooo:1234@szydlooo.r5unm5g.mongodb.net/?retryWrites=true&w=majority"

const { MongoClient } = require('mongodb');

const client = new MongoClient(mongoString);
async function main(){
    try{

        await client.connect();
        await listDB(client);
    }   catch (error){
        console.error(error);
    }   finally{
        await client.close();
    }
}

    async function listDB(client){
        let databaseList = await client.db().admin().listDatabases();
        //console.log(databaseList);
        console.log("Lista baz danych:");
        databaseList.databases.forEach(database => {
            console.log("Nazwa:" + database.name + ",Rozmiar:" + database.sizeOnDisk);        
        });
    }
main();

//chuj kocham mefedron