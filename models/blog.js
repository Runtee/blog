const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  err=>{
      if(!err){
          console.log('connection succeeded')
      }
      else{
          console.log('error in connection '+ err)
      }
    }
)

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
    comments: [
		{
			body: String,
			username: String,
			createdAt: String,
			userId: Schema.Types.ObjectId
		}
	],
    // creator:{
    //     type:Schema.Types.ObjectId,
    //     required:true
    // },
    // created:{
    //     type:String,
    //     required:true
    // }
})

module.exports=Blog
