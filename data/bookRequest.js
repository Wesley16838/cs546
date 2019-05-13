const mongoCollections = require("../mongoCollections");
const books = mongoCollections.bookRequests;
const objId = require('mongodb').ObjectID;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

    //////// Upload book requests ////////
    async create(bookName, bookISBN, bookDescription) {
       
        if (!bookName|| typeof bookName != 'string') throw "You must provide a book name";
    
        if (!bookISBN|| typeof bookISBN != 'string') throw "You must provide a book isbn";

        if (!bookDescription || typeof bookDescription != 'string') throw "You must provide a description";

        const bookCollection = await books();
       
        var checkExist = await bookCollection.find({bookISBN: bookISBN}).toArray();
    
        if(checkExist.length==0){
           
            let newBookRequest = {
                bookName: bookName,
                bookISBN:bookISBN,
                bookDescription: bookDescription
                };
            
                const insertInfo = await bookCollection.insertOne(newBookRequest);

                if (insertInfo.insertedCount === 0) 
                    throw "Could not add book request!";

           
        } 

        else{
            console.log("Not making any new request as it one alerady exists for,"+bookISBN)
        }
      }
}