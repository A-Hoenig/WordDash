# WordDash Browser Word Guessing Game

<a href="https://github.com/A-Hoenig/WordDash">
    <img src="android-chrome-512x512.png" alt="Logo" width="80" height="80">
  </a>

![Summary of Site on different screens](assets/docs/app_screenshot.png)

## CONTENTS

<!-- TABLE OF CONTENTS -->

  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#user-experience">User Experience</a></li>
    <li><a href="#design">Design</a></li>
    <li><a href="#technologies-used">Technologies</a></li>
    <li><a href="#repository">Deployment</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#image-credits">Image Credits</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#accessibility">Accessibility</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>

<!-- ABOUT THE PROJECT -->
## About The Project
This project was limited to building a fuctional interactive website using only HTML, CSS and JavaScript.
The presented site implements a simple word guessing game in whiche the user is asked to guess a 5 letter word.
The game area is dynamically built using javascript to adjust how many guesses / rows are shown based on the selected level.
The user recieves feedback on the guess to see if a letter was correct, or correct but in the wrong position.

To ensure the variables required to track game progress are always avaiable, the game is presented on a single page using hidden <divs> that can be displayed as in game popups to give the user feedback. This eliminates the need for a back end to store game information across multiple site pages.

Implemented popups are:
<ol>
  <li>Info page / Landing page : shown on website load and explains the game. Also shown if user taps the 'i' icon in top right corner</li>
  <li>Level selection Popup : 2 buttons to allow EASY, NORMAL or MASTER level selection</li>
  <li>Win pop up : congratulates the player for guessing correctly</li>
  <li>Lose pop up : show game over graphic and displays the correct answer</li>
</ol>

### Built With
* [https://www.gitpod.io/](GitPod)

![GitHub last commit](https://img.shields.io/github/last-commit/A-Hoenig/WordDash?color=red&style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/A-Hoenig/WordDash?color=orange&style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/A-Hoenig/WordDash?color=yellow&style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/A-Hoenig/WordDash?color=green&style=for-the-badge)

<p align="right">(<a href="#contents">back to top</a>)</p>

<!-- GETTING STARTED -->
## Accessing the Site

The finished site is hosted with gitpages under:

<br>
<a href="https://a-hoenig.github.io/worddash/">WordDash Word Guessing Game</a>
<br/>

## User Experience

The game is designed to be single use quick game fun. A maximum of 2 taps are needed to start the game and words can be entered by clicking submit button or just hitting the Enter key.
Guesses are checked for validity at entry (5 valid alphabetic letters) - wrong inputs are rejected and the user is given feeback in the input field.

once a valid guess is accepted it is added to the board. Tiles are colored to indicate correct letters for both position and the letter itself.

The feedback lets the user make an infomed further guess to narrow down the correct word.

Previously played letters are displayed in a list above the input field to help with the guess, especially on smaller screens where not all rows might be visible due to the oncreen keyboard.

once the answer is found, or the maximum guesses is reached, the user recieves the appropriate feedback.

To restart the game, simply reload the page.

## Design

### Colour Scheme

The color scheme was chose to replicate the feel of a table top word game such as scrabble. The background shows a similar theme.
The main color used to achieve this was the system color :moccasin (hex code: #F7E6C0, or RGB(247, 230, 192))
This main color is complemented buy brown or black borders. 
Selectable items on mouse over are show with a green background and white text.

### Typography

One Font are used on the site to simulate the look of the classig table word guessing game Scrabble. 

<a href="https://fonts.google.com/specimen/Roboto?query=roboto">Roboto</a>  -- Used for all word tiles and game displays.

![Montserrat Font Example](assets/docs/font_example.png)

<p align="right">(<a href="#contents">back to top</a>)</p>


### Wireframes

Wireframes were created for mobile, tablet and desktop using Balsamiq.

The Landing page will display 2 popups. An initial info popup to explain the game mechanics
Once acknowleged, the user will be presented with the second popup to select the diffculty level

![Landing Page](assets/docs/wireframe_1.jpg)

The main game are will display the game title graphics in a header,
a block of 5 blank letter tiles showing the number of moves available.
A footer where the user can enter a word, click a submit button (enter will also work) as well as see a list of already played letters arranged aplhabetically.

![Main Game Area](assets/docs/wireframe_2.jpg)

<p align="right">(<a href="#contents">back to top</a>)</p>

each guess will be verified to contain only 5 letters (input field will not accept more than 5). Also, the guess will be checked for only valid letters lower or uppercase
Once a valid word is submitted, it is added to the grid.
Colors give feedback on the gues:

* no color  : That letter is not contained in the word
* orange : the letter is in the answer, but not at that position
* green : a correct letter at the correct position is indicated

![First Guess + Feedback](assets/docs/wireframe_3.jpg)

using the clues the the user informs their next guess to try and narrow down the correct word.
any letters can be guessed, but the number of guesses available limits how many clues can be gained from simply typing the alphabet.
A future update could include the additional difficulty level of only allowing valid 5 letter words. The number of guesses would have to be adjusted to ensure realistic chance of success.
![Second Guess + Feedback](assets/docs/wireframe_4.jpg)

<p align="right">(<a href="#contents">back to top</a>)</p>

![Third Guess + feedback](assets/docs/wireframe_5.jpg)


Once the user gueses the word correctly, or has run out of moves, a popup will display a congratulatory message or indicate game over and reveal the answer.
![Game Win Popup (or Lose)](assets/docs/wireframe_6.jpg)

<p align="right">(<a href="#contents">back to top</a>)</p>

#### The Landing Page

The home page serves as the landing page and aims to impress the visitor with a striking studio portrait image that fills the screen on a minimal interface. The bold white text instantly informs the visitor what the purpose of the site is.

![Landing Page image](assets/docs/screenshot1.jpg)
![Level Select image](assets/docs/screenshot2.jpg)

#### The Game Area

![Game Area](assets/docs/screenshot3.jpg)

<p align="right">(<a href="#contents">back to top</a>)</p>

#### Gameplay

<img src="assets/docs/screenscroll.gif" alt="gameplay-animation" width="200"/>

<p align="right">(<a href="#contents">back to top</a>)</p>

#### Feedback Popup Windows

![Popups - win](assets/docs/screenshot4.jpg)
![Popups - lose](assets/docs/screenshot5.jpg)

<p align="right">(<a href="#contents">back to top</a>)</p>

#### Future Implementations

Future developement of the game could include:

1. Running statistics of games played and a points system rewarding the earliest correct guess
2. Optional checkbox to force the user to only post valid 5 letter words
3. Add graphics animations to add a professional look
4. create an in game onscreen keyboard to avoid the specific ios onscreen keyboard issue. This will eliminate the need fo the user to continually scroll between the feeback word on the grid and the text input field. The keyboard can then also color keys to indicate used letters.
5. Additionally: option for 6 letter words
6. Add backend implementation to keep the wordlist off site (on a server). the app could then only fetch a single random word from the server, rather than having to load the entire list of words on page load, improving performance.
7. online challenges to friends and random users (first to finish wins)
8. Option to to display the definition of a word
9. option to prevent repeating already played words

<p align="right">(<a href="#contents">back to top</a>)</p>

## Accessibility

I have been mindful during coding to ensure that the website is as accessible friendly as possible. This has been achieved by:

* Using semantic HTML.
* Using a hover state on all buttons on the site to make it clear to the user if they are hovering over a button.
* Choosing a sans serif font for the site - txshese fonts are suitable for people with dyslexia.
* Ensuring that there is a sufficient colour contrast throughout the site.
* Using detailed alt descriptions of all images and adding aria-labels for navigational elements where neccessary.

<img src="assets/docs/button_hover.gif" alt="button-hover-animation" width="400"/>

## Technologies Used

#### Languages:

HTML, CSS only.

* [Balsamiq](https://balsamiq.com/) - Used to create wireframes.

* [Git](https://git-scm.com/) - For version control.

* [Github](https://github.com/) - To save and store the files for the website.

* [GitPod](https://gitpod.io/) - IDE used to create the site.

* [GithubPages](https://pages.github.com/) - Hosts the deployed website

* [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.

* [Google Developer Tools](https://developers.google.com/web/tools) - To troubleshoot and test features, solve issues with responsiveness and styling.

* [Favicon.io](https://favicon.io/) To create the favicon.

* [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.

* [Webpage Spell-Check](https://chrome.google.com/webstore/detail/webpage-spell-check/mgdhaoimpabdhmacaclbbjddhngchjik/related) - a google chrome extension that allows you to spell check your webpage. Used to check the site and the readme for spelling errors.

* [ChatGPT](https://chat.openai.com/auth/login) - AI Large Language Model used to generate fake customer testimonials and photographer bio.

* [MOV to GIF](https://cloudconvert.com/mov-to-gif) - used to generate gifs from screen recordings.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Repository

### Deployment

The site is deployed using GitHub pages - [WordDash](https://a-hoenig.github.io/WordDash/).

To deploy the site using GitHub pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [A-Hoenig/WordDash](https://github.com/A-Hoenig/WordDash).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [A-Hoenig/WordDash](https://github.com/A-Hoenig/WordDash)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [A-Hoenig/WordDash](https://github.com/A-Hoenig/WordDash)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Testing

### Validator Testing

#### HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)

#### CSS
  
  - No errors were returned when passing CSS code through : [CSS Validator](https://jigsaw.w3.org/css-validator/)

#### JS

  - Validating JS code only produces warnings about newer methods that might no longer be supported my older browsers 
  - specifically const vs let variable declaration, temperate literals and arrow function syntax.

#### Chrome Lighthouse Analysis (mobile selected)
Lighthouse test on the deployed site returned 4 x 100% score for 

* Performance
* Accessibility
* Best Practices
* SEO (search engine optimization)

<img src="./assets/docs/site-performance.png" alt="lighthouse-results" width="400"/>

## Manual Testing

### HOME PAGE

| Feature        | Expect | Action | Result |
| :-------------- | :------ | :------ | :------ |
|**GENERAL TESTS** |
|Initialization|App selects a random word from the given list|initially output to console|works as expected. Console output removed to prevent cheating|
|Responsiveness|Layout dynamically changes based on screen size|tested on iphone and all desktop browsers|all elements shift and resize as expected|
|||||
|||||
|||||
|||||
|||||
|||||
|||||

|**PAGE SPECIFIC TESTS** |
|About section|dynamic resizing of intro text on large screens | tested on selected browsers | works as expected |

### GAMEPLAY

| Feature        | Expect | Action | Result |
| :-------------- | :------ | :------ | :------ |
|** GAMEPLAY ** |
|Layout|Layout dynamically changes based on screen size|tested on iphone and all desktop browsers|all elements shift and resize as expected|

### POPUPS

| Feature        | Expect | Action | Result |
| :-------------- | :------ | :------ | :------ |
|**GENERAL TESTS** |
|Layout|Layout dynamically changes based on screen size|tested on iphone and all desktop browsers|all elements shift and resize as expected|


<p align="right">(<a href="#contents">back to top</a>)</p>

### Responsiveness

tested manually on the listed browsers and on iphones. The game was designed to be fully responsive with dynamic sizing without the need for media queries. It is best played in a small browser window, but will work fine on mobile and tablet devices.

<p align="right">(<a href="#contents">back to top</a>)</p>

<p align="right">(<a href="#contents">back to top</a>)</p>

### Browser Compatibility

The site was tested on three most popular browsers for functionality:

<img src="./assets/docs/popular-browsers.png" alt="popular browsers" width="400"/>

<pre>|       SAFARI MacOS      |         SAFARI iOS      |        CHROME         |          EDGE           |</pre>

Safari was tested on both desktop and mobile versions.
In general the game works as intended on all browsers.
One issue was discovered during development that could not be fully resolved.
As per the mockups, the original intent was to have the user input fiels as part of a fixed / sticky header and allow the guess rows to scroll underneath. However, on safari mobile phones, once the user clicks to start typing a word, the onscreen keyboard is presented. in safari, once this happens, it overrides the fixed position of the header and scrolles it off the screen, greatly reducing usability. This is a known issue and a direct easy workaround could not be found. As a result, the overall design was change to add the inuot fields to the footer and add a scrolling feature to the current user guess row to allow the user to type, but then also see the word.
one more involved fix for this would be to remove the need for the onscreen keyboard by providing a built in on screen keyboard that can be fied moved and styled as needed for ease of use.

### Known / Fixed Bugs

no major bugs found impacting playability or styling

## Credits

### Code Used

* TheQuizArms Pub Quiz project README was recommended as a baseline for this README. many thanks. <a href="https://github.com/kera-cudmore/TheQuizArms/blob/main/README.md">The Quiz Arms README.md</a>


<!-- IMAGE-CREDITS -->
## Image Credits

All graphics are sourced from stock image sites (reshot, pexels) and are license free.
<br>

| Image Name    | License | Originator | Link |
| ------------- | :---: | :--- | :--- |
|background.webp | pexels | Pixabay | https://www.pexels.com/de-de/foto/brown-wooden-scrabble-lot-278881/ |
|reshot-icon-sad.svg|reshot|n/a|https://www.reshot.com/free-svg-icons/item/melancholia-4SYTWLM68P/|
|reshot-icon-winner.svg|reshot|n/a|https://www.reshot.com/free-svg-icons/item/winner-D87WTAELR2/|

all other graphics including favicon were self generated.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Word List
the comprehensive list of 5 letter words was sourced at:

[Jotto Word List](https://www.easysurf.cc/list6.htm)

as the list was a full dictionary list of ALL words (including profanity, slurs and trigger words), obvious objectionable words were manually removed.
Further improvement to the list is recommended to remove obscure or obsolote words aswell.

## License

![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png) 
<br>
This project is license free and part of Code Institute Full Stack Developer Course.
It is for educational use only.

<!-- CONTACT -->
## Contact

Alex Hönig -  LimeyDeveloper@pm.me

Project Link: [https://github.com/A-Hoenig/Project-One/tree/main](https://github.com/A-Hoenig/Project-One/tree/main)

## Acknowledgments

I would like to acknowledge the following people:

* Jubril Akolade - My Code Institute Mentor for the guidance.
* Martin from the Tutor team who helped me find the tricky "= vs === bug" as well as the issues with the favicon paths. Thanks!

<p align="right">(<a href="#contents">back to top</a>)</p>