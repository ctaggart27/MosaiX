BUGS:
_______________

•Viewing another users profile while logged in:
			 -doesn't pull up unique data(username/prof_pic/their sprites etc)
			 -Remove all feeds except "My Creation"

•Edit button on own sprite no longer has functionality


CSS
•Side Nav Bar:
	-Reduce padding size between buttons
	-Move entire bar away from FEEDS
	-Buttons

TOP NAV BAR:
-Fill page width
-Increase MosaiX logo Size
-remove background color
-change opacity on search field
-add search button Image















4/12/17
NOTES:
_______________
**Need route for phaser engine

Need hbs for phaser engine
	-currentUsers Profile Pic & Name
	-Button to home**

**TO-DO**

Phaser:
GALVANIZE Q2 Project
2d side scroller
	(Get to the keg before stand-down)

	-Pixel Art GALVANIZE
	***STRETCH*** Choose multiple backgrounds
		-Render Background

	-Choose sprite to upload(character)
		-Render Sprite to page
	***STRETCH*** Character has custom attributes?

	-Display KEYBOARD_EVENT (controls)
		-KeyBind KEYBOARD_EVENT to sprite movement
		-Add animation to KEYBOARD_EVENT

	-Add enemies// Obstacles
	-Add dynamic (environmental movement) component



























git pull

git branch spriteCreator

git checkout spriteCreator














4/11/17 NOTES
______________________
! **TO DO** !
______________________

==========================
• **NAV**
	-Transparent NAV BAR
	-Responsiveness
	-Search Button Pixel Art Image
==========================
• **SPLASH/INDEX PAGE**

		* Links (red text in about me)
	 **Sprite Div**
		* LIKE BUTTON
				-Add 'like' Button(pixel art img)
				-Ability to like in feed
				-display 'like' count
				-Alter color if logged-in user has 'liked'
		* COMMENTS
		 	-Display comment count( Comments: 37)
	**CREATE BUTTON**
		-Route to CREATE PAGE on click

=========================

 **FRONT END LAYOUT/STYLE**
		-Background ***(?)***

		-Splash PAGE ~Semi-complete
		-Login PAGE ~Semi-complete
		-Sprite PAGE
				-Frame (border color thingy)
				-Name(of sprite)
				-Author Name
				-Current user Data(Avatar/ Name On left)
				-Rendered Sprite
				-Likes(Heart img) & number of likes
					-Different color if you have liked it(red - to - gold/yellow)
				-Tags
				-Details/Description
				-Comments
					-Username
					-UserProfile Picture
					-Date created
					-Edited(?)
					-Sort in Chronological order

		-Query PAGE
			-Render Sprites (4 columns X 3 rows (scroll bar))

		-MyProfile / Profile PAGE
			* NAV BAR
				-LOGO, Search field, Log-out
			• **FEEDS**
				* TRENDING FEED LOGIC
				* FOLLOWING FEED LOGIC
							**-MY_PROFILE:**
										-MY SPRITES
										-FOLLOWING (MOST RECENT)							
										-TRENDING(MOST LIKED)
			 * FEED TITLE CLICK REDIRECTS TO A POPULATED QUERY PAGE (4 sprites wide by 3 rows) w/ Scroll

***BACK-BURNER***
   ~~~ Error page ~~~

________________________
Q2 description

-A project description
	SPRITE DATABASE:
		A place to upload and view sprites.

-Who uses it?
	Game developers

-What outputs do they need?

-What inputs are needed to generate those outputs?

-A list of technologies that you plan to use:
		HTML
		CSS BOOTSTRAP
		NODE
		EXPRESS
		KNEX
		POSTGRES

-An MVP with listed user stories

-A list of "Nice to have" features
***STRETCH***
SEARCH BY BIT TYPE:
	-(8bit, 16bit, 32bit, 64bit) (clickable button selector)

***STRETCH***
1.) SPRITE CREATOR:
		***STRETCH***
				-Separate TOOLSETS for landscape vs Character creation;
				-upload and edit sprites
		***STRETCH***
				-Translatable sprite components(rotate on elbow// move fingers// rotate eyebrows etc.)
		***STRETCH***
				-create file type with layer rendering (editable layers upon upload)

***STRETCH***			
2.)ANIMATION RENDER:
	-Able to add sprites together and render animation (by Frame Rate)

***STRETCH***
3.)2d Game Engine
		-Allows users to "play" with their sprite creations

__________________________________________ (•- •)
