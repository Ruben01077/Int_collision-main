import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();


const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/contact_us", (req, res) => {
  res.render("contact_us.ejs");
});

app.get("/appointment", (req, res)=>{
  res.render("appoitment.ejs")
})

app.get("/service", (req, res)=>{
  res.render("service.ejs")
})

app.get("/before_and_after", (req, res)=>{
  res.render("before_and_after.ejs")
})

app.get("/estimate", (req, res)=>{
  res.render("estimate.ejs")
})



app.listen(process.env.PORT)
