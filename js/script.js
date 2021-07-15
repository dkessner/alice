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


const creditText = 

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

   'This project was created by <a href="https://dkessner.github.io" target="_blank">Darren Kessner</a>, using free and open source software and public domain resources, and is dedicated to my niece Alice.'
    : {
        code: '<a href="https://github.com/dkessner/alice" target="_blank">https://github.com/dkessner/alice</a>',
        "visual novel engine": '<a href="https://monogatari.io" target="_blank">Monogatari</a>',
        text: '<a href="https://www.gutenberg.org/ebooks/11" target="_blank">Project Gutenberg</a>',
        images: '<a href="https://publicdomainreview.org/collection/carroll-illustrations-for-alice-undergound" target="_blank">Public Domain Review</a>',
    }
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
        'show image cat with fadeIn',
        '',
        'hide image cat with fadeOut',
        'wait 2000',
        'jump main',
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
        'she found a little bottle',
        'round the neck of the bottle was a paper label, with the words DRINK ME',
        '"What a curious feeling!" said Alice',
        'And so it was indeed: she was now only ten inches high',
        'hide image alice5 with fadeOut',

        'show image alice6 with fadeIn',
        'she found a very small cake, on which the words EAT ME were beautifully marked in currants',
        '"Curiouser and curiouser!" cried Alice',
        'Just then her head struck against the roof of the hall: in fact she was now more than nine feet high',
        'hide image alice6 with fadeOut',

        'show image alice7 with fadeIn',
        'It was the White Rabbit returning, splendidly dressed',
        'with a pair of white kid gloves in one hand and a large fan in the other',
        'he came trotting along in a great hurry, muttering to himself as he came',
        '"Oh! the Duchess, the Duchess! Oh! won’t she be savage if I’ve kept her waiting!"',
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

        'show image alice16 with fadeIn',
        "I do wish I hadn’t drunk quite so much!",
        'hide image alice16 with fadeOut',

        'show image alice17 with fadeIn',
        'She went on growing, and growing',
        'hide image alice17 with fadeOut',

        'show image alice18 with fadeIn',
        'Still she went on growing, and, as a last resource, she put one arm out of the window, and one foot up the chimney',
        '"Oh! So Bill’s got to come down the chimney, has he?" said Alice to herself',
        'hide image alice18 with fadeOut',

        'show image alice19 with fadeIn',
        'She drew her foot as far down the chimney as she could, and waited till she heard a little animal',
        'she gave one sharp kick, and waited to see what would happen next',
        'There goes Bill!',
        'hide image alice19 with fadeOut',

        'show image alice20 with fadeIn',
        'Hold up his head.  Brandy now.  Don’t choke him', 
        'How was it, old fellow? What happened to you? Tell us all about it!',
        'hide image alice20 with fadeOut',

        'show image alice21 with fadeIn',
        'The first thing I’ve got to do is to grow to my right size again',
        'An enormous puppy was looking down at her with large round eyes, and feebly stretching out one paw, trying to touch her',
        'hide image alice21 with fadeOut',

        'show image alice22 with fadeIn',
        'She stretched herself up on tiptoe, and peeped over the edge of the mushroom',
        'her eyes immediately met those of a large blue caterpillar, that was sitting on the top with its arms folded, quietly smoking a long hookah',
        'at last the Caterpillar took the hookah out of its mouth, and addressed her in a languid, sleepy voice',
        '"Who are you?" said the Caterpillar',
        'hide image alice22 with fadeOut',

        'show image alice23 with fadeIn',
        'nvl "You are old, Father William,” the young man said, "And your hair has become very white"', 
        'nvl "And yet you incessantly stand on your head. Do you think, at your age, it is right?"',
        'nvl "In my youth," Father William replied to his son, "I feared it might injure the brain"',
        'nvl "But, now that I’m perfectly sure I have none. Why, I do it again and again.',
        '',
        'hide image alice23 with fadeOut',

        'show image alice24 with fadeIn',
        'nvl "You are old," said the youth, "as I mentioned before, and have grown most uncommonly fat"',
        'nvl "Yet you turned a back-somersault in at the door.  Pray, what is the reason of that?"',
        'nvl "In my youth," said the sage, as he shook his grey locks, "I kept all my limbs very supple"', 
        'nvl "By the use of this ointment — one shilling the box — Allow me to sell you a couple?"',
        '',
        'hide image alice24 with fadeOut',

        'show image alice25 with fadeIn',
        'nvl "You are old," said the youth, "and your jaws are too weak for anything tougher than suet"',
        'nvl "Yet you finished the goose, with the bones and the beak.  Pray, how did you manage to do it?"',
        'nvl "In my youth," said his father, "I took to the law, and argued each case with my wife"',
        'nvl "And the muscular strength, which it gave to my jaw, has lasted the rest of my life."',
        '',
        'hide image alice25 with fadeOut',

        'show image alice26 with fadeIn',
        'nvl "You are old," said the youth, "one would hardly suppose that your eye was as steady as ever"',
        'nvl "Yet you balanced an eel on the end of your nose.  What made you so awfully clever?"',
        `nvl "I have answered three questions, and that is enough," said his father, "don't give yourself airs!"`,
        'nvl "Do you think I can listen all day to such stuff?  Be off, or I’ll kick you down stairs!"',
        '',
        'hide image alice26 with fadeOut',

        'show image alice27 with fadeIn',
        '"That is not said right," said the Caterpillar.',
        '"It is wrong from beginning to end," said the Caterpillar decidedly, and there was silence for some minutes.',
        'In a minute or two the Caterpillar took the hookah out of its mouth and yawned once or twice, and shook itself', 
        'hide image alice27 with fadeOut',

        'show image alice28 with fadeIn',
        'Then it got down off the mushroom, and crawled away in the grass, merely remarking as it went,',
        '"One side will make you grow taller, and the other side will make you grow shorter."',
        '"One side of what? The other side of what?" thought Alice to herself',
        '"Of the mushroom," said the Caterpillar, just as if she had asked it aloud',
        'all she could see was an immense length of neck, which seemed to rise like a stalk out of a sea of green leaves that lay far below her',
        'hide image alice28 with fadeOut',

        'show image alice29 with fadeIn',
        'a sharp hiss made her draw back in a hurry',
        'a large pigeon had flown into her face, and was beating her violently with its wings',
        '"Serpent!" screamed the Pigeon',
        `"I'm not a serpent!" said Alice indignantly. "Let me alone!"`,
        'hide image alice29 with fadeOut',

        'show image alice30 with fadeIn',
        'Alice went timidly up to the door, and knocked',
        '"But what am I to do?" said Alice',
        'she opened the door and went in',
        'Please would you tell me why your cat grins like that?',
        `"It's a Cheshire cat," said the Duchess, "and that's why."`, 
        '"But I don’t want to go among mad people," Alice remarked',
        `"Oh, you can’t help that," said the Cat: "we're all mad here. I'm mad. You're mad."`,
        `"How do you know I'm mad?" said Alice`,
        `"You must be," said the Cat, "or you wouldn't have come here."`,
        'hide image alice30 with fadeOut',

        'show image alice31 with fadeIn',
        '"Would you tell me," said Alice, a little timidly, "why you are painting those roses?"',
        'The Queen! The Queen!',
        'hide image alice31 with fadeOut',

        'show image alice32 with fadeIn',
        'Then followed the Knave of Hearts, carrying the King’s crown on a crimson velvet cushion',
        'and, last of all this grand procession, came the king and queen of hearts',
        'hide image alice32 with fadeOut',

        'show image alice33 with fadeIn',
        'The Queen turned crimson with fury, and, after glaring at her for a moment like a wild beast, screamed "Off with her head!"',
        '"Are their heads off?" shouted the Queen.  "Can you play croquet?"',
        'hide image alice33 with fadeOut',



        'show image alice34 with fadeIn',
        'Alice thought she had never seen such a curious croquet-ground in her life',
        'the balls were live hedgehogs, the mallets live flamingoes', 
        'hide image alice34 with fadeOut',

        'show image alice35 with fadeIn',
        `"No," said Alice. "I don't even know what a Mock Turtle is."`,
        `"It's the thing Mock Turtle Soup is made from," said the Queen.`,
        '"Up, lazy thing!" said the Queen,',
        '"take this young lady to see the Mock Turtle, and to hear his history"',
        'hide image alice35 with fadeOut',

        'show image alice36 with fadeIn',
        '"This here young lady," said the Gryphon, "she wants for to know your history, she do."',
        `"I'll tell it her," said the Mock Turtle in a deep, hollow tone: "sit down, both of you, and don’t speak a word till I’ve finished."`,
        '"Once," said the Mock Turtle at last, with a deep sigh, "I was a real Turtle."',
        'hide image alice36 with fadeOut',



        'show image alice37 with fadeIn',
        '"You may not have lived much under the sea, so you can have no idea what a delightful thing a Lobster Quadrille is!"',
        '"No, indeed," said Alice. "What sort of a dance is it?"',
        'hide image alice37 with fadeOut',
        

        'show image alice38 with fadeIn',
        'So they began solemnly dancing round and round Alice',
        `Will you, won't you, will you, won't you, won't you join the dance?`,
        'hide image alice38 with fadeOut',

        'show image alice39 with fadeIn',
        'The trial’s beginning!',
        'near the King was the White Rabbit, with a trumpet in one hand, and a scroll of parchment in the other',
        'In the very middle of the court was a table, with a large dish of tarts upon it',
        'hide image alice39 with fadeOut',

        'show image alice40 with fadeIn',
        '"No, no!" said the Queen. "Sentence first — verdict afterwards."',
        '"Stuff and nonsense!" said Alice loudly. "The idea of having the sentence first!"',
        '"Hold your tongue!" said the Queen, turning purple.',
        `"I won’t!" said Alice.`,
        '"Off with her head!" the Queen shouted at the top of her voice. Nobody moved.',
        'hide image alice40 with fadeOut',

        'show image alice41 with fadeIn',
        `"Wake up, Alice dear!" said her sister; "Why, what a long sleep you've had!"`,
        `"Oh, I've had such a curious dream!" said Alice`,
        'this same little sister of hers would, in the after-time, be herself a grown woman',
        'she would keep, through all her riper years, the simple and loving heart of her childhood',
        'she would gather about her other little children and make their eyes bright and eager with many a strange tale', 
        'perhaps even with the dream of Wonderland of long ago',
        'how she would feel with all their simple sorrows, and find a pleasure in all their simple joys', 
        'remembering her own child-life, and the happy summer days',
        'hide image alice41 with fadeOut',
        'wait 3000',
        'jump end'
    ],
    
    'end': [
        'show image cat with fadeIn',
        '',
        'hide image cat with fadeOut',
        'wait 2000',
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

monogatari.component ('main-screen').template (() => {
    return `
        <h1>Alice</h1>
        <br/> 
        <p>
        Lewis Carroll's original drawings, accompanied by text from later published versions of Alice in Wonderland.
        </p>
        <br/> 
        <center>
        <img src="assets/images/Lewis-Carroll-Alice-Under-Ground-1.jpg" height="30%"/>
        </center>

        <main-menu></main-menu>
    `;
});

