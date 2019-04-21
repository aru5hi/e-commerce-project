/*Require all the apckages*/
var express=require('express'),
	mongoose=require('mongoose'),
	bp=require('body-parser'),
	passport=require("passport"),
	localstrategy = require("passport-local"),
	passportLocalMongoose=require("passport-local-mongoose"),
	User=require("./models/users"); 

/*set up the*/
mongoose.connect("mongodb://localhost/shrom_db");

var app=express();
app.use(bp.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("style"));


/* ROUTES */
app.get("/", function(req,res){
	res.render("home");
});

app.get("/register", function(req,res){
	res.render("signup");
});

app.get("/login", function(req,res){
	res.render("login");
});

app.post("/register", function(req,res){
	req.body.fname
	req.body.email
	req.body.date
	req.body.password
User.register(new User({username:req.body.fname,email:req.body.email,dob:req.body.date}),req.body.password,function(err,nuser){
	if(err){
		console.log(err);
		res.json(err);
	}
		passport.authenticate("local")(req,res,function(){
			res.redirect("/");
		});
});
});
app.listen(3000, function(){
	console.log("server is running at port:3000");
});