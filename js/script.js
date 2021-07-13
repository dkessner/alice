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
        'jump main',
        'show image cat with fadeIn',
        ' ',
        'hide image cat with fadeOut',
    ],

    'main': [

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
        'And so it was indeed: she was now only ten inches high',
        'hide image alice5 with fadeOut',

        'show image alice6 with fadeIn',
        'EAT ME',
        '"Curiouser and curiouser!" cried Alice',
        'Just then her head struck against the roof of the hall: in fact she was now more than nine feet high',
        'hide image alice6 with fadeOut',

        'show image alice7 with fadeIn',
        'It was the White Rabbit returning, splendidly dressed',
        'with a pair of white kid gloves in one hand and a large fan in the other',
        'he came trotting along in a great hurry, muttering to himself as he came',
        'hide image alice7 with fadeOut',

        'show image alice8 with fadeIn',
        '"I wish I hadn’t cried so much!" said Alice, as she swam about, trying to find her way out.',
        'I shall be punished for it now, I suppose, by being drowned in my own tears!',
        'That will be a queer thing, to be sure! However, everything is queer to-day.',
        'hide image alice8 with fadeOut',

        'show image alice9 with fadeIn',
        'O Mouse, do you know the way out of this pool? I am very tired of swimming about here, O Mouse!',
        'hide image alice9 with fadeOut',

        'show image alice10 with fadeIn',
        'It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it',
        'there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures',
        'Alice led the way, and the whole party swam to the shore',
        'hide image alice10 with fadeOut',

        'show image alice11 with fadeIn',
        'They were indeed a queer-looking party that assembled on the bank',
        'the birds with draggled feathers, the animals with their fur clinging close to them, and all dripping wet, cross, and uncomfortable',
        'hide image alice11 with fadeOut',

        'show image alice12 with fadeIn',
        'clear',
        'wait',
        'hide image alice12 with fadeOut',

        'show image alice13 with fadeIn',
        'they began running when they liked, and left off when they liked, so that it was not easy to know when the race was over',
        'The race is over! But who has won?',
        'Everybody has won, and all must have prizes',
        'hide image alice13 with fadeOut',

        'show image alice14 with fadeIn',
        'Very soon the Rabbit noticed Alice, as she went hunting about, and called out to her in an angry tone',
        '"He took me for his housemaid," she said to herself as she ran',
        'hide image alice14 with fadeOut',

        'show image alice15 with fadeIn',
        'There was no label this time with the words DRINK ME',
        'nevertheless she uncorked it and put it to her lips', 
        'I know something interesting is sure to happen',
        'hide image alice15 with fadeOut',

        'jump end'
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



