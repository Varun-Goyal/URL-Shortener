
/*
 * GET home page.
 */

var queryExec = require("./queryExecutor");
var ejs = require("ejs");
var crypto = require('crypto');
var request = require("request");

function index(req, res){

  res.render("bitlyHome");
}


function graph(req, res){

	  res.render("graph");
	}


//This function logs user in facebook.

function login(req, res){
	
	var loginInfo, url, queryString;
	
	//console.log("Inside Server's login function...");
		
	
	res.end("working");
	
	/*request('awseb-e-b-AWSEBLoa-1GL1T7LV4LO3A-1792251966.us-west-2.elb.amazonaws.com/facebook', function (error, response, body) {
	    if (!error) {
	        res.end("success"); // Show the HTML for the Modulus homepage.
	    }else {
	    	res.end("error");
	    }
	    
	});*/
	
	
	/*request.post({
		url: 'awseb-e-b-AWSEBLoa-1GL1T7LV4LO3A-1792251966.us-west-2.elb.amazonaws.com',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"longURL": req.body.name
		})
	}, function(error, response, body){
		if(error) {
			console.log(error);
			res.end("error");
	    } else {
	        res.end("success");
	    } 
	});*/
	
	/*loginInfo = req.body;
	url = loginInfo.loginEmail;
		
	var encrypPassword = crypto.createHash('sha1').update(url).digest("hex"); // Encrption of Password
	
	//Check if the Email ID and Password exists in the system.
	
	queryString = "INSERT INTO url_link (long_url, short_url) VALUES ('" + loginInfo.loginEmail + "', '" + encrypPassword + "')";
	
	//queryString = "SELECT email_id FROM users WHERE email_id = '" + loginInfo.loginEmail + "' AND password = '" + loginInfo.loginPass + "'";  
	console.log("Login Query is: "+ queryString);
	
	queryExec.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			console.log("URL Shortened succesfully");
		}	
	},queryString);*/
	
		
}

exports.index=index;
exports.graph=graph;

exports.login=login;