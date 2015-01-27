# textCounter.js

  TextCounter is a jQuery plugin which provides a countdown and a normal counter of text in an input field. Inspired by the way Twitter counts down the remaining characters in a tweet, textCounter is a configurable jQuery plugin that easily allows anyone to add this same functionality. Written with best practices in mind, textCounter offers multiple character count ranges, custom coloration via CSS classes, and even the ability to prevent users from exceeding the character count limit.  
TextCounter can work with TinyMCE, thanks Lesson Planet

## Quick start 

The original repo is from https://github.com/commadelimited
Clone the git repo - `git clone https://github.com/commadelimited/textCounter.js.git` - or [download it](https://github.com/commadelimited/textCounter.js/zipball/master)

## Usage & Documentation

	$(function(){ 
		$('#theCounter').textCounter({ 
		     target: '#myTextarea' // required: string 
		}); 
	});

	$(function(){
		$('#theCounter').textCounter({
			order: 'DESC', // optional: string
						   //  ['ASC', 'DESC'] this string specify the direction of the counter
			target: '#myTextarea', // required: string
			count: 70, // optional: if string, specifies attribute of target to use as value
			           //           if integer, specifies value. [defaults 140]
			alertAt: 20, // optional: integer [defaults 20]
			warnAt: 10, // optional: integer [defaults 0]
			stopAtLimit: false // optional: defaults to false
		});
	});

## Project Info / License

Released under Apache License, Version 2
	http://www.apache.org/licenses/LICENSE-2.0

Copyright: Andy Matthews - http://andymatthews.net