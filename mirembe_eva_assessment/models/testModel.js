const mongoose=require('mongoose')
const router=require('../routes/formRoutes')

const testSchema= mongoose.Schema({
    surname:String,
    givenname:String,
    dateofbirth:String,
    residence:String,
    occupation:String,
    nationality:String,
    sex:String,
    category:String
})
module.exports=mongoose.model('test', testSchema)