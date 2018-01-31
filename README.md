# LIRI

<p>LIRI is like iPhone's SIRI or Google's Google Assistant. However, while SIRI and Google Assistant are a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back tweets, songs, and movies.</p>

## Table of contents
  * [About this project](#about-this-project)
  * [Live](#live)
  * [Getting started](#contribute)
  * [Structure of the project](#structure-of-project)
  * [Examples](#examples)
  	* [Display last 20 tweets](#tweets)
  	* [Display movie information for specified movie](#movie-specified)
  	* [Display movie information for Mr. Nobody when no movie is specified](#movie-not-specified)
  	* [Display top 10 songs on Spotify for the specified song name](#spotify-this-song)
  	* [Display top 10 songs on Spotify for the song, I want it that way](#do-what-it-says)
  	* [Display song information for The Sign by Ace of Base when no song is specified](#song-not-specified)
  * [Technologies used to create app](#technologies-used)
  * [About Node.js](#about-node)
  * [Command line help](#command-line-help)
  * [Future code development](#feature-enhancements)
  * [Issues](#issues)

## <a name="about-this-project"></a> About this project


## <a name="contribute"></a> Getting started


## <a name="structure-of-project"></a> Structure of the project
<p>The project directory structure is setup as follows:</p>
<ul>
	<li> <b>keys.js</b>: Allows access to the keys that are used to send and retrieve data to and from the Twitter and Spotify APIs.
	</li>
	<li><b>liri.js</b>: Contains the code that is used to run the application from the command line.</li>
	<li><b>log.txt</b>: App log file. When you run a command, data gets logged to the terminal as well as to the log.txt file in the project's root directory.</li>
	<li><b>package.json</b>: Lists the project dependencies (third party npm packages) and their version numbers.</li>
	<li><b>random.txt</b>: Used to run the do-what-it-says command.</li>
</ul>

## <a name="examples"></a> Examples

### <a name ="tweets"></a> Display last 20 tweets
<pre>
$ node liri.js my-tweets

My last 20 tweets
==========================================================================
Tweet #1
Tweet: RT @NOTSportsCenter: When you know you’re about to get fired and you just DGAF anymore https://t.co/phbBNKxZMH
Created at: Sat Jan 27 03:02:24 +0000 2018
==========================================================================
==========================================================================
Tweet #2
Tweet: RT @TheFostersTV: "What is an American?" ✊🏻✊🏼✊🏽✊🏾✊🏿
______
Song: "Don't Give Up" by @RyanStar https://t.co/FvJkDkZLZi
Created at: Sat Jan 27 03:01:53 +0000 2018
==========================================================================
==========================================================================
Tweet #3
Tweet: RT @Fullscreen: Awwwwkward. https://t.co/PrsaEcBsd9
Created at: Mon Jan 01 06:32:42 +0000 2018
==========================================================================
==========================================================================
Tweet #4
Tweet: RT @KarlTowns: Happy New Years to everyone! Hope 2018 brings everyone blessings, positivity, and success! God bless!
Created at: Mon Jan 01 05:25:52 +0000 2018
==========================================================================
==========================================================================
Tweet #5
Tweet: RT @NFL: 2017 Division WINNERS! https://t.co/4KZyG4dR5y
Created at: Mon Jan 01 03:43:26 +0000 2018
==========================================================================
==========================================================================
Tweet #6
Tweet: RT @DukeMBB: If you start watching the 2015 National Championship Game on your DVR at about 10:51:41 PM and skip commercials/halftime, Tyus…
Created at: Mon Jan 01 03:43:07 +0000 2018
==========================================================================
==========================================================================
Tweet #7
Tweet: “Why I Left My $100,000+ Developer Job at Google” by YK Sugishita https://t.co/KS6N8pF9BN
Created at: Sun Dec 31 02:17:12 +0000 2017
==========================================================================
==========================================================================
Tweet #8
Tweet: “One Hour of Side Project Coding a Day*— a New Year’s Resolution Worth Making” by @LeMarquisOfAndy https://t.co/VIglVFbMZX
Created at: Sun Dec 31 02:08:02 +0000 2017
==========================================================================
==========================================================================
Tweet #9
Tweet: RT @lindseyvonn: Good ol’ Buck Hill!!! Where I grew up❤️ https://t.co/Vcg9BwSRwd
Created at: Sat Dec 30 02:47:32 +0000 2017
==========================================================================
==========================================================================
Tweet #10
Tweet: RT @UKCoachCalipari: You only know if you’re going to win or lose when you win or lose, so why create any anxiety and look ahead? If you st…
Created at: Fri Dec 29 23:39:31 +0000 2017
==========================================================================
==========================================================================
Tweet #11
Tweet: RT @Timberwolves: Hey Jimmy Butler, can you name someone more clutch than you?

3️⃣9️⃣ points and an #NBAVote! https://t.co/bNQAiLpsnK
Created at: Thu Dec 28 15:28:12 +0000 2017
==========================================================================
==========================================================================
Tweet #12
Tweet: RT @espn: Jimmy Butler in overtime: money. https://t.co/0DABuIHwyE
Created at: Thu Dec 28 15:28:06 +0000 2017
==========================================================================
==========================================================================
Tweet #13
Tweet: RT @MNWolfDen: THANK YOU JIMMY! Wolves fans retweet to vote him into the All-Star game because he just single handily won us the game!

Jim…
Created at: Thu Dec 28 04:10:45 +0000 2017
==========================================================================
==========================================================================
Tweet #14
Tweet: RT @NOTSportsCenter: Today’s bowl schedule:

Florida State/Southern Miss: The Yes FSU Is Bowl Eligible Somehow Bowl

Iowa/Boston College:…
Created at: Wed Dec 27 23:56:19 +0000 2017
==========================================================================
==========================================================================
Tweet #15
Tweet: RT @TheFostersTV: The second you graduate college, parents be like: https://t.co/YdjQPYLLX6
Created at: Wed Dec 27 23:55:29 +0000 2017
==========================================================================
==========================================================================
Tweet #16
Tweet: RT @lecrae: Sometimes it’s not a loss. It’s just God helping you clean house.
Created at: Wed Dec 27 23:55:12 +0000 2017
==========================================================================
==========================================================================
Tweet #17
Tweet: RT @LukeKennard5: Happy birthday Jesus! Merry Christmas everyone!
Created at: Mon Dec 25 15:45:21 +0000 2017
==========================================================================
==========================================================================
Tweet #18
Tweet: RT @lecrae: Celebrate Jesus.
Eat terribly.
Destroy someone’s soul in monopoly.
Open gifts. #ChristmasEve
Created at: Mon Dec 25 03:45:02 +0000 2017
==========================================================================
==========================================================================
Tweet #19
Tweet: RT @bigballerbrand: It's not about the money for the Ball Brothers. They have a passion to play Basketball and to experience playing as pro…
Created at: Mon Dec 18 00:38:51 +0000 2017
==========================================================================
==========================================================================
Tweet #20
Tweet: RT @AthleteSwag: Funniest video on Twitter 😂 https://t.co/cRnb21ZxW9
Created at: Fri Nov 24 16:39:14 +0000 2017
==========================================================================
</pre>


### <a name ="movie-specified"></a> Display movie information for specified movie
<pre>
$ node liri.js movie-this Miracle
=======================================================================================================
liri command: movie-this Miracle
=======================================================================================================
Title: Miracle
Year movie was released: 2004
IMDB movie rating (out of 10): 7.5
Rotten Tomatoes rating (out of 100%): 80%
Filmed in: Canada, USA
Language: English
Movie plot: Miracle tells the true story of Herb Brooks (Kurt Russell), the player-turned-coach who led the 1980 U.S. Olympic hockey team to victory over the seemingly invincible Russian squad.
Actors: Kurt Russell, Patricia Clarkson, Noah Emmerich, Sean McCann
=======================================================================================================
</pre>

### <a name ="movie-not-specified"></a> Display movie information for Mr. Nobody when no movie is specified
<pre>
$ node liri.js movie-this
=======================================================================================================
liri command: movie-this Mr Nobody
=======================================================================================================
Title: Mr. Nobody
Year movie was released: 2009
IMDB movie rating (out of 10): 7.9
Rotten Tomatoes rating (out of 100%): 66%
Filmed in: Belgium, Germany, Canada, France, USA, UK
Language: English, Mohawk
Movie plot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.
Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham
=======================================================================================================
</pre>

### <a name ="spotify-this-song"></a> Display top 10 songs on Spotify for the specified song name
<pre>
$ node liri.js spotify-this-song What ifs
Top 10 songs on Spotify with the name,  What ifs
==========================================================================
Song #1
Artist: Kane Brown
Song title: What Ifs
Preview song: https://p.scdn.co/mp3-preview/9a1bc6de88d686138b641e6022a4b30c6e75de74?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: Kane Brown
==========================================================================
==========================================================================
Song #2
Artist: Kane Brown
Song title: What Ifs
Preview song: https://p.scdn.co/mp3-preview/38694be1b7496f8ff0f308340855c9d8dfc5cf01?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: Kane Brown (Deluxe Edition)
==========================================================================
==========================================================================
Song #3
Artist: Kane Brown
Song title: What Ifs (Remix)
Preview song: https://p.scdn.co/mp3-preview/b05441ecafdf40446beb4bc8f8835b1a2421d447?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: What Ifs (Remix)
==========================================================================
==========================================================================
Song #4
Artist: boyChild
Song title: Counting What Ifs (feat. Soundmouse) - Original
Preview song: https://p.scdn.co/mp3-preview/70d964d280f453940f23b78f5bc8233742ebbc2e?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: Counting What Ifs (feat. Soundmouse)
==========================================================================
==========================================================================
Song #5
Artist: boyChild
Song title: Counting What Ifs (feat. Soundmouse) - Darkhorse Ambient Room Remix
Preview song: https://p.scdn.co/mp3-preview/307753756f5d7f6cdebc8112a50bf31512bdb7d6?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: Counting What Ifs (feat. Soundmouse)
==========================================================================
==========================================================================
Song #6
Artist: Melanie Baker
Song title: What Ifs
Preview song: https://p.scdn.co/mp3-preview/9de234644b9cc922ae56869b0b7f98a2d62c16cf?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: What Ifs
==========================================================================
==========================================================================
Song #7
Artist: boyChild
Song title: Counting What Ifs - Vika Remix
Preview song: https://p.scdn.co/mp3-preview/f672b9ef58af0e8a32f5525ae52e312716253db3?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: Counting What Ifs (feat. Soundmouse)
==========================================================================
==========================================================================
Song #8
Artist: Jaguar Wright
Song title: The What If's
Preview song: https://p.scdn.co/mp3-preview/0d1d44193e56b600f0f549591ddb7145fab70b52?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: Denials Delusions And Decisions
==========================================================================
==========================================================================
Song #9
Artist: boyChild
Song title: Counting What Ifs (feat. Soundmouse) - No Beats
Preview song: https://p.scdn.co/mp3-preview/0d1d44193e56b600f0f549591ddb7145fab70b52?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: Counting What Ifs (feat. Soundmouse)
==========================================================================
==========================================================================
Song #10
Artist: Ryan Krysiak
Song title: What Ifs (feat. Brenna Nicole Bone)
Preview song: https://p.scdn.co/mp3-preview/7b49eeca51d768df6692c553973484c212171015?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: What Ifs (feat. Brenna Nicole Bone)
==========================================================================
</pre>


### <a name = "do-what-it-says"></a> Display top 10 songs on Spotify for the song, I want it that way
<pre>
$ node liri.js do-what-it-says
Top 10 songs on Spotify with the name, "I Want it That Way"
==========================================================================
Song #1
Artist: Backstreet Boys
Song title: I Want It That Way
Preview song: https://p.scdn.co/mp3-preview/e72a05dc3f69c891e3390c3ceaa77fad02f6b5f6?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: The Hits--Chapter One
==========================================================================
==========================================================================
Song #2
Artist: Backstreet Boys
Song title: I Want It That Way
Preview song: https://p.scdn.co/mp3-preview/f9f504a705fcaaf2f24b004b629725451014ad6c?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: The Essential Backstreet Boys
==========================================================================
==========================================================================
Song #3
Artist: Backstreet Boys
Song title: I Want It That Way
Preview song: https://p.scdn.co/mp3-preview/b8c2410a5acb68b462be6ac85f1312430e2b149c?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: Millennium
==========================================================================
==========================================================================
Song #4
Artist: Anthem Lights
Song title: I Want It That Way
Preview song: https://p.scdn.co/mp3-preview/4a163fbfa2dbbe4433f277e0e7395dca656364f5?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: Covers Part IV
==========================================================================
==========================================================================
Song #5
Artist: Glee Cast
Song title: Bye Bye Bye / I Want It That Way (Glee Cast Version)
Preview song: https://p.scdn.co/mp3-preview/3aa63b5c98b98ae333e567813e5c720abb2914f0?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: Bye Bye Bye / I Want It That Way (Glee Cast Version)
==========================================================================
==========================================================================
Song #6
Artist: Manuel Costa
Song title: I Want It That Way
Preview song: https://p.scdn.co/mp3-preview/cdde86f49ca4ef217ac08bbbb0c6295c16f015b0?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: I Want It That Way
==========================================================================
==========================================================================
Song #7
Artist: Backstreet Boys
Song title: I Want It That Way
Preview song: https://p.scdn.co/mp3-preview/2f96341eb8415a3efb27375db1c4d59928408c2f?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: 90 Sweet 90s Hits!
==========================================================================
==========================================================================
Song #8
Artist: "Weird Al" Yankovic
Song title: Ebay (Parody of "I Want It That Way" by the Backstreet Boys)
Preview song: https://p.scdn.co/mp3-preview/e217ea111ab84a777f204252fce4b18d5de3ae80?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: Poodle Hat
==========================================================================
==========================================================================
Song #9
Artist: Dynamite Boy
Song title: I Want It That Way
Preview song: null
Album: Punk Goes Pop
==========================================================================
==========================================================================
Song #10
Artist: Landon Austin & Julia Sheer
Song title: I Want It That Way
Preview song: https://p.scdn.co/mp3-preview/e777be5446dc3df34abc2eaec241edb5a590976c?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: I Want It That Way
==========================================================================
</pre>

### <a name = "song-not-specified"></a> Display song information for The Sign by Ace of Base when no song is specified
<pre>
$ node liri.js spotify-this-song
Artist: Ace of Base
Song title: The Sign
Preview song: https://p.scdn.co/mp3-preview/4c463359f67dd3546db7294d236dd0ae991882ff?cid=090b6f40fd9e40eaa389e1a6e6aa1cfd
Album: The Sign (US Album) [Remastered]
</pre>

## <a name="technologies-used"></a> Technologies used to build app

  * Node.js (https://nodejs.org/en/)
  * Twitter node package (https://www.npmjs.com/package/twitter) - used to send requests to Twitter API and receive tweets.
  * Spotify node package (https://www.npmjs.com/package/node-spotify-api) - used to send requests to Spotify API and receive song information.
  * Request node package (https://www.npmjs.com/package/request) - used to send requests to OMDB API and receive movie information.
  * DotEnv node package (https://www.npmjs.com/package/dotenv) - used to load environment variables from a .env file into process.env.
  * Javascript

## <a name="about-node"></a>About Node.js

## <a name="command-line-help"></a> Command line help
<p>Help information is available for each command from the command line.</p>
<p>To access the command line help, run the following command in the project's root directory:</p>
<pre>node liri.js help</pre>

## <a name="feature-enhancements"></a> Future code development
<p>Source code will be developed over time to handle new features in the future.</p>
<p>The following is a list of potential feature enhancements:</p>

## <a name ="Issues"></a> Issues
<p>If you find an issue while using the app or have a request, <a href="https://github.com/philipstubbs13/Project-Longshot/issues/" target="_blank">log the issue or request here</a>. These issues will be addressed in a future code update.</p>

