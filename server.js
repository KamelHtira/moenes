const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const usersSchema = mongoose.Schema(
    {
        username: {
            type:String,
            required:true,
            unique: true 
        },
        password: {
            type:String,
            required:true
        }
    }
)
Users = mongoose.model('users',usersSchema)

app.get("/api",async (req, res) => {
  res.send("MOENES!!..");
  try{

    let new_user = new Users (
      {
        username: req.body.username,
        password: req.body.password
      }
    )
    console.log(new_user)
    await  new_user.save();
    res.send(`user is added successfully : ${new_user}`)
    }
    catch(err)
    {
      console.log(err) 
      res.send(err)
    }
});

// connecting server to mongoDB Atlas :
mongoose.connect("mongodb://127.0.0.1:27017", (err, done) => {
  if (err) {
    console.log(err);
  }
  if (done) {
    console.log("database is connected..");
  }
});

app.listen(5000, () => console.log("Exame-maker is listening on port 5000."));
