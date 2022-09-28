const mongoose=require('mongoose');



const Schema=mongoose.Schema;

const BlogSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    // comments: [
	// 	{
	// 		body: String,
	// 		username: String,
	// 		createdAt: String,
	// 		userId: Schema.Types.ObjectId
	// 	}
	// ],
    // creator:{
    //     type:Schema.Types.ObjectId,

    //     required:true
    // },
    created:{
        type:Date,
        default:Date.now(),
        required:true
    }
})
const Blog =  mongoose.model('Blog',BlogSchema);

module.exports=Blog
