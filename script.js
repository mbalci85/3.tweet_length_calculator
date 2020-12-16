const calculateCharacter = () => {
	// let tweet =
	// 	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aperiam.';

	let tweet = prompt('Enter your tweet: ');

	//this calculates the number of characters
	let tweetCount = tweet.length;
	let tweetLeft = 280 - tweetCount;

	// console.log(
	// 	`You have written ${tweetCount} characters, you have ${tweetLeft} characters remaining.`,
	// );
	alert(
		`You have written ${tweetCount} characters, you have ${tweetLeft} characters remaining.`,
	);
};

// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
