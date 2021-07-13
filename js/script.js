/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});


const imageInfo = {
    cat: 'cat.png',
    //  alice1: 'Lewis-Carroll-Alice-Under-Ground-1.jpg',
    //  alice2: 'Lewis-Carroll-Alice-Under-Ground-2.jpg'
    //  ... 
};

(function initializeImageInfo() {
    for (let i=1; i<=42; i++)
        imageInfo["alice"+i] = "Lewis-Carroll-Alice-Under-Ground-" + i + ".jpg"
})();


// Define the images used in the game.
monogatari.assets ('images', imageInfo);


// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	}
});



const myscript = 
{
    'Start': [
        'Alice',
        'jump alice1',
        'show image cat with fadeIn',
        ' ',
        'hide image cat with fadeOut',
    ],

    'alice1': [
        'show image alice1 with fadeIn',
        '"What is the use of a book", thought Alice, "without pictures or conversations?"',
        'hide image alice1 with fadeOut',

        'show image alice2 with fadeIn',
        'Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do.',
        'hide image alice2 with fadeOut',

        'show image alice3 with fadeIn',
        'suddenly a White Rabbit with pink eyes ran close by her',
        '"Oh dear! Oh dear! I shall be late!"',
        'hide image alice3 with fadeOut',

        'show image alice4 with fadeIn',
        'The rabbit-hole went straight on like a tunnel for some way',
        'she found herself falling down a very deep well',
        'Down, down, down. Would the fall never come to an end?',
        'hide image alice4 with fadeOut',

        'show image alice5 with fadeIn',
        'DRINK ME',
        '"What a curious feeling!" said Alice',
        'hide image alice5 with fadeOut',

        'show image alice5 with fadeIn',
        'EAT ME',
        'hide image alice5 with fadeOut',

        'show image alice6 with fadeIn',
        '“Curiouser and curiouser!” cried Alice',
        'hide image alice6 with fadeOut',

        'show image alice7 with fadeIn',
        'the quick brown fox',
        'hide image alice7 with fadeOut',


        'jump alice2'
    ],
    
    'alice2': [
        'end',
        'show image alice2 with fadeIn',
        `So she was considering in her own mind 
         (as well as she could, 
        for the hot day made her feel very sleepy and stupid)`, 
        `whether the pleasure of making a daisy-chain would be worth the
        trouble of getting up and picking the daisies`,
        'hide image alice2 with fadeOut',
    ],

    'end': [
        'end'
    ]
};

monogatari.script(myscript);

/*
monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'y Hi {{player.name}} Welcome to Monogatari!',
		{
			'Choice': {
				'Dialog': 'y Have you already read some documentation?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],

	'No': [

		'y You can do it now.',

		'show message Help',

		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	]
});
*/



