//Read and set any environment variables with the dotenv package:
require("dotenv").config();

//To retrieve the data that will power this app, we'll need to send requests to the Twitter, Spotify and OMDB APIs. 
//Grab the Node packages.
//Grab the request package to send requests to the OMDB API.
var request = require("request");
//Grab the Spotify package to send requests to the Spotify API.
var Spotify = require('node-spotify-api');
//Grap the Twitter package to send requests to the Twitter API.
var Twitter = require('twitter');

// fs is a core Node package for reading and writing files
var fs = require("fs");

//Using the require keyword, let's access all of the keys in the keys.js file
var keys = require("./keys.js");

//process.argv will print out any command line arguments.
var input = process.argv;

//Create variable to hold all the possible liri commands you can enter
//my-tweets, spotify-this-song, movie-this, do-what-it-says
var liriCommand = input[2];

//If the liriCommand is movie-this, we will need a variable to hold the movie name.
var movieName = input[3];

//If the liriCommand is spotify-this-song, we will need a variable to hold the song name.
var songName = input[3];

//Code to access keys information.
//var client = new Twitter(keys.twitter);

//If the liriCommand is movie-this and a movieName is provided...
//Output information about that movie.
if (liriCommand === "movie-this") {
	//log liriCommand to log.txt.
	logData("=======================================================================================================");
	logData("liri command: movie-this");
	logData("Movie name: " + movieName);
	getMovieInfo();
}

//If the liriCommand is my-tweets, show last 20 tweets and when they were created in terminal window.
if (liriCommand === "my-tweets") {
	//log liriCommand to log.txt.
	logData("liri command: my-tweets");
	getLatestTweets();
}

//If the liriCommand is spotify-this-song, show song info for the specified song.
if (liriCommand === "spotify-this-song") {
	//log liriCommand to log.txt.
	logData("liri command: spotify-this-song");
	getSongInfo(songName);
}

//If the liriCommand is do-what-it-says, take the text inside of random.txt and then use it to run spotify-this-song for "I want it that way."
if (liriCommand === "do-what-it-says") {
	//log liriCommand to log.txt.
	logData("liri command: do-what-it-says");
	doWhatItSays();
}

//Get movie info function... Run this function to get movie info for the specified movie.
function getMovieInfo() {

	//If no movie name is specified on the command line, then show the movie info for the movie, Mr. Nobody.
	if (!movieName) {
		//If no movie is specified, set movieName equal to Mr. Nobody.
		movieName = "Mr Nobody";
	}

	//Then, run a request to the OMDB API with the movieName value.
	request("http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy", function(error, response, body) {

		//If the request is successful (i.e. if the response status code is 200)
		if (!error && response.statusCode === 200) {
			//Parse the body of the JSON object that holds the movie data and display the movie info.
			var movieInfo = JSON.parse(body);
			//console.log(movieInfo);
			//Output the following information to terminal window.
			//Title of the movie.
			console.log("Title: " + movieInfo.Title);
			logData("Title: " + movieInfo.Title);
		   	//Year the movie came out.
		   	console.log("Year movie was released: " + movieInfo.Year);
		   	logData("Year movie was released: " + movieInfo.Year);
		   	//IMDB Rating of the movie.
		   	console.log("IMDB movie rating (out of 10): " + movieInfo.imdbRating);
		   	logData("IMDB movie rating (out of 10): " + movieInfo.imdbRating);
		   	//Rotten Tomatoes rating of the movie.
		   	console.log("Rotten Tomatoes rating (out of 100%): " + movieInfo.Ratings[1].Value);
		   	logData("Rotten Tomatoes rating (out of 100%): " + movieInfo.Ratings[1].Value);
		   	//Country where the movie was produced.
		   	console.log("Filmed in: " + movieInfo.Country);
		   	logData("Filmed in: " + movieInfo.Country);
		   	//Language of the movie.
		   	console.log("Language: " + movieInfo.Language);
		   	logData("Language: " + movieInfo.Language);
		   	//Plot of the movie.
		   	console.log("Movie plot: " + movieInfo.Plot);
		   	logData("Movie plot: " + movieInfo.Plot);
		   	//Actors in the movie.
		   	console.log("Actors: " + movieInfo.Actors);
		   	logData("Actors: " + movieInfo.Actors);
		   	logData("=======================================================================================================");
		}
	});
}

//Get tweets function... Run this function to get last 20 tweets and when they were created.
function getLatestTweets(){

	//Code to access Twitter keys information.
	var client = new Twitter({
		consumer_key: process.env.TWITTER_CONSUMER_KEY,
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
		access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
	});

	//Parameters. Show the tweets from iamPhilStubbs timeline (my timeline). Limit to the last 20 tweets.
	var params = {screen_name: 'iamPhilStubbs', limit: 20};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	    //console.log(tweets);
	    //Show last 20 tweets from my timeline.
	    console.log("My last 20 tweets");
	    for (var i=0; i < tweets.length; i ++) {
	    	console.log("============================================================================================================================");
	    	//Display tweet number for each tweet. For example, the first tweet returned will be tweet #1, the second returned will be tweet #2, etc.
	    	console.log("Tweet #" + (i+1));
	    	//Output the tweet text from Twitter to the terminal.
	    	console.log("Tweet: " + tweets[i].text);
	    	//Output the date/time when the tweet was created to the terminal.
	    	console.log("Created at: " + tweets[i].created_at);
	    	console.log("============================================================================================================================");
	    }
	  }
	});
}

//Get song info function... Run this function to get information about the specified song.
function getSongInfo(songName) {

	//var spotify = new Spotify(keys.spotify);
	var spotify = new Spotify({
  		id: process.env.SPOTIFY_ID,
  		secret: process.env.SPOTIFY_SECRET
	});

	//If no song name is specified on the command line, show song info for "The Sign" by Ace of Base.
	if (!songName) {
		//If no song is specified, set the songName variable to "The Sign."
		songName = "The Sign";
	}

	//Use the Spotify package to search for a song/track. Set search results limit to 10.
	spotify.search({ type: 'track', query: songName, limit: 10 }, function(err, data) {

  
  		//If there is an error, log it.
  		if (err) {
    		return console.log('Error occurred: ' + err);
  		}
 
 	// If there is no error... then print out the song data.
  	// Use JSON.stringify to print the data in string format.
  	// Use the JSON.stringify argument of "2" to make the format pretty.
  	// See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
	//console.log(JSON.stringify(data, null, 2)); 

	//If no song is provided, then the app will default to "The Sign" by Ace of Base.
	if (songName === "The Sign") {
		//Output the artist
		console.log("Artist: " + data.tracks.items[5].artists[0].name);
		logResults = 
		//Output the song's name.
		console.log("Song title: " + data.tracks.items[5].name)
		//Output a preview link of the song from Spotify.
		console.log("Preview song: " + data.tracks.items[5].preview_url);
		//Output the album that the song is from.
		console.log("Album: " + data.tracks.items[5].album.name);
	}


	//If song name is provided, output first 10 songs with that name to the terminal.
	else {
		console.log("Top 10 songs on Spotify with the name, " + songName);
		logData("Top 10 songs on Spotify with the name, " + songName);
		//Loop through the JSON data to display the top songs.
		for (var i = 0; i < data.tracks.items.length; i ++) {
		var trackInfo = data.tracks.items[i];
		console.log("========================================================================================================================================");
		logData("========================================================================================================================================");
		//Display song number for each song. For example, the first song returned will be Song #1, the second returned will be Song #2, etc.
		console.log("Song #" + (i+1));
		//append song # to log.txt file.
		logData("Song #" + (i+1));
		//Output the artist
		console.log("Artist: " + trackInfo.artists[0].name);
		//Append artist to log.txt file.
		logData("Artist: " + trackInfo.artists[0].name);
		//Output the song's name.
		console.log("Song title: " + trackInfo.name)
		//Append song name to log.txt file.
		logData("Song title: " + trackInfo.name);
		//Output a preview link of the song from Spotify.
		console.log("Preview song: " + trackInfo.preview_url);
		//Append preview link of song to log.txt file.
		logData("Preview song: " + trackInfo.preview_url);
		//Output the album that the song is from.
		console.log("Album: " + trackInfo.album.name);
		//Append album name to log.txt file.
		logData("Album: " + trackInfo.album.name);
		console.log("========================================================================================================================================");
		logData("========================================================================================================================================");
		}
	}
	});
}

//doWhatItSays function...
//If the liriCommand is do-what-it-says, take the text inside of random.txt and then use it to run spotify-this-song for "I want it that way."
function doWhatItSays() {
	//This code will read from the random.txt file.
	// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
	// The code will store the contents of the reading inside the variable "data"
	fs.readFile("random.txt", "utf8", function(error, data) {
		// If the code experiences any errors it will log the error to the console.
  		if (error) {
    		return console.log(error);
  		}
  		 // We will then print the contents of data
 		//console.log(data);

 		// Then split it by commas (to make it more readable)
  		var songdataArray = data.split(",");

  		// We will then re-display the content as an array for later use.
  		//console.log(songdataArray);
  		//Call the getSongInfo function to display the song info for "I want it that way."
  		getSongInfo(songdataArray[1]);
 	});
}

//Bonus: In addition to logging the data to the terminal/bash window, output the data to a .txt file called log.txt.
function logData(logResults) {
	// We then append the contents into the file
	// If the file didn't exist then it gets created on the fly.
	fs.appendFile("log.txt", logResults + "\r\n" , function(err) {

	// If an error was experienced we say it.
	if (err) {
		console.log(err);
	}

	// If no error is experienced, we'll log the phrase "Content Added" to our node console.
	else {
		//console.log("Content Added!");
	}
});

}