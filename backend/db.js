const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://camraobro:Clash0fclan@mernproj.larexvj.mongodb.net/goFoodmern?retryWrites=true&w=majority'
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected successfully");
        // const fetched_data = mongoose.connection.db.collection("food");
        // fetched_data.find({}).toArray( (err, data) => {
        //     if (err)
        //         console.log(err);  //THIS IS HOW ITS TAUGHT IN THE TUTORIAL BUT AS CALLBACKS ARE NOT 
        //     else                   //SUPPROTED BELOW METHOD IS USED
        //         console.log(data);
        // })

        const fetched_data = mongoose.connection.db.collection("food");
        const data = await fetched_data.find({}).toArray();
        global.food_items = data
        const foodCategory = mongoose.connection.db.collection("foodCategory")
        const catData = await foodCategory.find({}).toArray();
        global.cateData = catData;
        // console.log(global.food_items);
    }
    catch (error){
        console.log("Error in connection", error);
    }
}

module.exports = mongoDB;