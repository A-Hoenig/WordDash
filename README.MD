# WordDash Browser Word Guessing Game


<a href="https://github.com/A-Hoenig/WordDash">
    <img src="android-chrome-512x512.png" alt="Logo" width="80" height="80">
  </a>



![Summary of Site on different screens](assets/readme-images/am-i-res1.jpg)

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
This website was built for a hypothetical client interested in showcasing his studio photography work. His express wishes were for a clean professional looking site that is easy to navigate and puts his work front and center. He also provided a short bio he wanted included on the site and wished for a contact form to be able to generate a list of potential clients. Finally, he provided a list of previous customer's feedback to be added on a seperate page as a testimonials section.

In summary the site should contain these basic sections:

<ol>
  <li>Home / Landing page showcasing primary work</li>
  <li>About section with hero image to introduce the photographer</li>
  <li>Gallery Page to show primary selected work</li>
  <li>Testimonials page to show previous satisfied customers</li>
  <li>Contact page / form to allow contacting the photographer</li>
</ol>

### Built With
* [https://www.gitpod.io/](GitPod)

![GitHub last commit](https://img.shields.io/github/last-commit/A-Hoenig/Project-One?color=red&style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/A-Hoenig/Project-One?color=orange&style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/A-Hoenig/Project-One?color=yellow&style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/A-Hoenig/Project-One?color=green&style=for-the-badge)

<p align="right">(<a href="#contents">back to top</a>)</p>

<!-- GETTING STARTED -->
## Accessing the Site

The finished site is hosted with gitpages under:

<br>
<a href="https://a-hoenig.github.io/Project-One/">William Cooke Photography</a>
<br/>

## User Experience

To ease navigation, standard practices were used to allow the visitor quick access to the site pages via a Navigation bar. 

In keeping with the 'mobile first' philosophy, on smaller screens the Navbar is consolidated into a 'menu burger icon' that presents a drop down view of the navigation bar when pressed.

Other elements such as the Photographer's signature, the contact button and copyright info are all dynamically sized to make full use of the available screen realestate.

Hover events are utilized thoughout to give feedback to the user that they are interacting with a clickable button.

Bold Font in the navigation bar visibly informs the user which page they are on.

## Design

### Colour Scheme

The web interface was deliberately chosen with a monochrome dark grey and white look to offset the interface and provide a contrast to the pictures being presented.
Tht color #fafafa was used for text and button elements to reduce the stark contrast of pure white on black.

### Typography

2 Fonts are used on the site for minimalist design. 

<a href="https://fonts.google.com/specimen/Montserrat?query=montserrat">Montserrat</a> Used for all site text and headings.

![Montserrat Font Example](assets/readme-images/montserrat-sample.png)

<a href="https://fonts.google.com/specimen/Freehand?query=freehand">Freehand</a> Used only for the Site Title and the photographers signature.

![Freehand Font Example](assets/readme-images/freehand-sample.png)

<p align="right">(<a href="#contents">back to top</a>)</p>


### Wireframes

Wireframes were created for mobile, tablet and desktop using Balsamiq.

![Home Page](assets/readme-images/mockup-home.png)
![About Section](assets/readme-images/mockup-about.png)

<p align="right">(<a href="#contents">back to top</a>)</p>

![Gallery Page](assets/readme-images/mockup-gallery.png)
![Testimonials Page](assets/readme-images/mockup-testimonials.png)

<p align="right">(<a href="#contents">back to top</a>)</p>

![Contact Page](assets/readme-images/mockup-contact.png)

<p align="right">(<a href="#contents">back to top</a>)</p>

#### The Home Page

The home page serves as the landing page and aims to impress the visitor with a striking studio portrait image that fills the screen on a minimal interface. The bold white text instantly informs the visitor what the purpose of the site is.

![Home page image](assets/readme-images/screenshot-home.jpg)

The navigation bar and footer are fixed to keep the site controls always visible. 

A single white centered arrow invites the user to scroll down to view the next section - in this case the about summary of the photographer.

#### The About Section

![About Page image](assets/readme-images/screenshot-about.jpg)

The about section shows a self portrait of the Photographer and his welcome text to invite you in and share his passion. The text dynamically adjusts around the circular photo on larger screens.

<p align="right">(<a href="#contents">back to top</a>)</p>

#### The Gallery Page

The gallery page is designed to put the pictures first on a clean well ordered canvas. Only minimal margins are used to allow maximum content. The columns dynamically adjust using HTML flex properties to adjust to all screen sizes. For phone displays only a single column is used with each picture taking up the full width. 

A simple white border is used as a mouse over effect to highlight a specific picture the user is interested in.

![Gallery Page](assets/readme-images/screenshot-gallery.jpg)

#### The Testimonials Page

This page uses a marquee effect of vertically scrolling text to showcase previous customers feedback. The text is scolled in a simple transparent frame that dynamically resizes for screen realestate.

![Testimonials Page Image](assets/readme-images/screenshot-testimonials.jpg)

<p align="right">(<a href="#contents">back to top</a>)</p>

#### The Contact Page

The contact form invites the user to fill in their details and select what type of photoshoot they might be interested in. The form dynamically resizes to the left on larger screens to keep the interface manageable. The same form background styling is used as throughout the site.

![Contact Page image](assets/readme-images/screenshot-contact.jpg)

#### Future Implementations

Future developement of the site would include:

1. Clickable images in the gallery to present a photo on full screen.
2. Left and right arrows to allow the user to step through the images.
3. Dynamic effects and display of the pop up menu should be animated to make the transition less abrupt and convey a further sense of professionalism.
4. Automated slide show of a collection of landing images to offer some variety on the main homepage.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Accessibility

I have been mindful during coding to ensure that the website is as accessible friendly as possible. This has been achieved by:

* Using semantic HTML.
* Using a hover state on all buttons on the site to make it clear to the user if they are hovering over a button.
* Choosing a sans serif font for the site - these fonts are suitable for people with dyslexia.
* Ensuring that there is a sufficient colour contrast throughout the site.
* Using detailed alt descriptions of all images and adding aria-labels for navigational elements where neccessary.

![Contrast Button](assets/readme-images/button-hover.gif)

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

* [FakeNameGenerator](https://www.fakenamegenerator.com/) - Used to generate random profile of a fake person.

* [MOV to GIF](https://cloudconvert.com/mov-to-gif) - used to generate gifs from screen recordings.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Repository

### Deployment

The site is deployed using GitHub pages - [William Cooke Photography](https://a-hoenig.github.io/Project-One/index.html).

To deploy the site using GitHub pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [A-Hoenig/Project-One](https://github.com/A-Hoenig/Project-One).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [A-Hoenig/Project-One](https://github.com/A-Hoenig/Project-One)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [A-Hoenig/Project-One](https://github.com/A-Hoenig/Project-One)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

<p align="right">(<a href="#contents">back to top</a>)</p>

## Testing

### Validator Testing

#### HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)

#### CSS
  - No major errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)

  a single parse error is returned that could not be resolved. Research into the correct syntax of the circle() property (used to align the text around the circular image in the about section) indicates the correct use of the property. Nevertheless, the instruction works as intended.

  ![CSS Validator Parse Error](assets/readme-images/css-error.png)

## Manual Testing

### HOME PAGE

| Feature        | Expect | Action | Result |
| :-------------- | :------ | :------ | :------ |
|**GENERAL TESTS** |
|Layout|Layout dynamically changes based on screen size|tested on iphone and all desktop browsers|all elements shift and resize as expected|
|Responsiveness|elements resize when browser window changes|resizing tested on selected browsers|dynamic elements and media queries work as expected|
|Internal Links|BurgerMenu|On small screens burger menu click displays nav bar|nav bar shos up and links work|
|Internal Links|NAV bar elements link to correct page|checked on selected browsers and iPhone|All links work and point to correct page|
|Mouse Over events|NAV elements highlight when user hovers on them|tested on desktop browsers|Works as expected|
|Nav Bar link highlight|correct page (Home) is highlighted|checked on deployed site|displayed correctly|
|Nav bar burger icon|nav bar is displayed below burger icon|tested on all browsers|works as expected|
|**PAGE SPECIFIC TESTS** |
|About section|dynamic resizing of intro text on large screens | tested on selected browsers | works as expected |

### GALLERY PAGE

| Feature        | Expect | Action | Result |
| :-------------- | :------ | :------ | :------ |
|**GENERAL TESTS** |
|Layout|Layout dynamically changes based on screen size|tested on iphone and all desktop browsers|all elements shift and resize as expected|
|Responsiveness|elements resize when browser window changes|resizing tested on selected browsers|dynamic elements and media queries work as expected|
|Internal Links|BurgerMenu|On small screens burger manu click displays nav bar|nav bar shos up and links work|
|Internal Links|NAV bar elements link to correct page|checked on selected browsers and iPhone|All links work and point to correct page|
|Mouse Over events|NAV elements highlight when user hovers on them|tested on desktop browsers|Works as expected|
|Nav Bar link highlight|correct page (Gallery) is highlighted|checked on deployed site|displayed correctly|
|Nav bar burger icon|nav bar is displayed below burger icon|tested on all browsers|works as expected|
|**PAGE SPECIFIC TESTS** |
|Aspect ratios|Photos Display correctly|tested on selected browsers|photos look good even when resizing window|
|Gallery Layout|layout correctly adjusts|tested on all window sizes on 6k screen|works as intended (large screen not enough photos to fill page|
|Picture Highlighting|mouse over highlights picture|testes on desktop browsers|works as expected|
|Photo centering|cropped pictures centered|check no photos are left or right justified|all look good|

### TESTIMONIALS PAGE

| Feature        | Expect | Action | Result |
| :-------------- | :------ | :------ | :------ |
|**GENERAL TESTS** |
|Layout|Layout dynamically changes based on screen size|tested on iphone and all desktop browsers|all elements shift and resize as expected|
|Responsiveness|elements resize when browser window changes|resizing tested on selected browsers|dynamic elements and media queries work as expected|
|Internal Links|BurgerMenu|On small screens burger menu click displays nav bar|nav bar shos up and links work|
|Internal Links|NAV bar elements link to correct page|checked on selected browsers and iPhone|All links work and point to correct page|
|Mouse Over events|NAV elements highlight when user hovers on them|tested on desktop browsers|Works as expected|
|Nav Bar link highlight|correct page (Testimonials) is highlighted|checked on deployed site|displayed correctly|
|Nav bar burger icon|nav bar is displayed below burger icon|tested on all browsers|works as expected|
|**PAGE SPECIFIC TESTS** |
|marquee testimonials|testimonial page displays all feedback elements as vertical scrolling text|tested on all browsers|mostly works, Safari scrolling is rough|
|marquee testimonials|testimonial section resizes with window|tested on all browsers|works as expected dynamically|

### CONTACT PAGE PAGE

| Feature        | Expect | Action | Result |
| :-------------- | :------ | :------ | :------ |
|**GENERAL TESTS** |
|Layout|Layout dynamically changes based on screen size|tested on iphone and all desktop browsers|all elements shift and resize as expected|
|Responsiveness|elements resize when browser window changes|resizing tested on selected browsers|dynamic elements and media queries work as expected|
|Internal Links|BurgerMenu|On small screens burger menu click displays nav bar|nav bar shos up and links work|
|Internal Links|NAV bar elements link to correct page|checked on selected browsers and iPhone|All links work and point to correct page|
|Mouse Over events|NAV elements highlight when user hovers on them|tested on desktop browsers|Works as expected|
|Nav Bar link highlight|off as contact page has own link and is not displayed|checked on deployed site|displayed correctly|
|Nav bar burger icon|nav bar is displayed below burger icon|tested on all browsers|works as expected|
|**PAGE SPECIFIC TESTS** |
|user form submittable|user can send request data and sees what was recieved server side|tested with Chrome|works as expected|
|user form text entry validation|required text entry and data format is set|leaving blank or not entering email is flagged|works as expected|
|user form formatting|form resizes dynamically to left on large screens|ltested on all browsers|works as expected|

<p align="right">(<a href="#contents">back to top</a>)</p>

### Responsiveness

tested manually as well as with Am I Responsive Website
![Am I responsive](assets/readme-images/am-i-res1.jpg)
![Am I responsive](assets/readme-images/am-i-res2.jpg)

<p align="right">(<a href="#contents">back to top</a>)</p>

![Am I responsive](assets/readme-images/am-i-res3.jpg)
![Am I responsive](assets/readme-images/am-i-res4.jpg)

<p align="right">(<a href="#contents">back to top</a>)</p>


### Accessibility

An accessibility score of 100 was achieved when anaylsing the site using Google Chrome Dev Tools Lighthouse.

![Chrome Lighthouse Results](assets/readme-images/lighthouse-result.png)

<p align="right">(<a href="#contents">back to top</a>)</p>



### Browser Compatibility

The site was tested on three most popular browsers for functionality:

![Most Popular Browsers](assets/readme-images/popular-browsers.png)

The only issue regarding browser support was found with safari. On both desktop and mobile versions of Safari, the marquee scrolling feature used in the testimonials page is a little rough and does not scroll smooth. On all other broswers, the feature rendered with no issues.

 <pre>|       SAFARI        |         CHROME         |          EDGE           |</pre>
![Safari rough scroll](assets/readme-images/scroll.gif)


### Known / Fixed Bugs

* When expanding the browser window the burger icon jumps imperceptibily whe passing the 768px screen width media query. This is most likely due to the fact that the header element is switched to a different grid spacing and the align-items: center; overrides the burger-label top:; property. -- **SOLVED** by adjusting the percentage sizes of the header grid.

* on the gallery page when displaying a 2 column grid, the flex property aligning the individual photos leaves a blank slot after the 5th photo. (start of a new div) - **SOLVED**

A solution was implemented using flex grow on a single div that automativally arranges the pictures into strechable columns. The page now dynamically adjusts equal sized tiles to fill the screen thus removing the need for media queries and allowing for dynamic columns and rows as needed. (solution found under: <a href="https://blog.logrocket.com/responsive-image-gallery-css-flexbox/">Click here</a> )



## Credits

### Code Used

* I used the Code Institute - Love Running walkthrough project as the basis for the pop up nav bar.
* The gallery bug fix was impelementd using this blog post: <a href="https://blog.logrocket.com/responsive-image-gallery-css-flexbox/">How to create a responsive image gallery with CSS flexbox</a> )
* TheQuizArms Pub Quiz project README was recommended as a baseline for this README. many thanks. <a href="https://github.com/kera-cudmore/TheQuizArms/blob/main/README.md">The Quiz Arms README.md</a>


<!-- IMAGE-CREDITS -->
## Image Credits

All images are sourced from stock image sites (pexels, unsplash, pixabay) and are license free.
<br>
Acknowlegements to the original photographer listed below:

| Image Name    | License | Originator | Link |
| ------------- | :---: | :--- | :--- |
| portrait1.jpg | pexels | Ali Pazani | https://www.pexels.com/photo/woman-wearing-orange-sweater-2613260/ |
| portrait2.jpg | pexels | Ali Pazani | https://www.pexels.com/photo/woman-wearing-brown-fur-beanies-and-white-and-balck-top-2681751/ |
| portrait3.jpg | pexels | Ali Pazani | https://www.pexels.com/photo/woman-in-grey-long-sleeved-shirt-2787341/ |
| portrait4.jpg | pexels | Arsham Haghani | https://www.pexels.com/photo/photo-of-woman-closing-her-eyes-3429877/ |
| portrait5.jpg | pexels | Bruno Salvadori | https://www.pexels.com/photo/light-fashion-person-red-2330169/ |
| portrait6.jpg | pexels | Collis | https://www.pexels.com/de-de/foto/graustufen-seitenansicht-portratfoto-des-mannes-der-mit-geschlossenen-augen-aufwirft-3031397/ |
| portrait7.jpg | pexels | Marlon Schmeiski | https://www.pexels.com/photo/woman-standing-next-to-yellow-wall-3839904/ |
| portrait8.jpg | pexels | George Desipris | https://www.pexels.com/de-de/foto/graustufenfoto-des-mannes-mit-bart-818261/ |
| portrait9.jpg | pexels | Guilherme Almeida | https://www.pexels.com/de-de/foto/1858175/ |
| portrait10.jpg | pexels | Gusher Gill | https://www.pexels.com/photo/portrait-of-woman-in-traditional-clothing-and-with-henna-tattoos-18633023/ |
| portrait11.jpg | pexels | Hywel Jones | https://www.pexels.com/photo/attractive-woman-wearing-white-top-2744193/ |
| portrait12.jpg | pexels | Italo Melo | https://www.pexels.com/de-de/foto/portratfoto-des-lachelnden-mannes-mit-gekreuzten-armen-die-vor-der-weissen-wand-stehen-2379004/ |
| portrait13.jpg | pexels | Arsham Haghani | https://www.pexels.com/photo/photo-of-woman-with-short-hair-3445218/ |
| portrait14.jpg | pexels | Moose Photos | https://www.pexels.com/photo/woman-wearing-pink-collared-half-sleeved-top-1036623/ |
| portrait15.jpg | pexels | Olena Bohovyk | https://www.pexels.com/photo/grayscale-photo-of-man-holding-round-mirror-3635872/ |
| portrait16.jpg | pexels | Pixabay | https://www.pexels.com/de-de/foto/graustufenfoto-der-frau-im-schwarzen-neckholder-kleid-mit-u-ausschnitt-60712/ |
| portrait17.jpg | pexels | Samad Ismayilov | https://www.pexels.com/photo/woman-wearing-black-scoop-neck-top-735552/ |
| portrait18.jpg | pexels | Spencer Selover | https://www.pexels.com/de-de/foto/mann-der-t-shirt-mit-der-rechten-hand-nahe-wange-tragt-428333/ |
| portrait19.jpg | pexels |  Gustavo Santana| https://www.pexels.com/de-de/foto/mann-mit-zigarette-im-mund-1933873/ |
| portrait20.jpg | pexels | Vitaly Gorbachev | https://www.pexels.com/zh-tw/photo/18652728/ |
| photographer.jpg | pexels | Rockerzzz | https://www.pexels.com/de-de/foto/mann-fotografiert-vor-camea-1265718/ |
| testimonials-bg | unsplash | Arsham Haghani | https://unsplash.com/photos/woman-in-black-v-neck-shirt-Ef3AOkt6hHg |
| contact-bg | pixabay | Krivitskiy | https://pixabay.com/de/photos/portrait-m%C3%A4dchen-studio-weiblich-4181643/ |

<p align="right">(<a href="#contents">back to top</a>)</p>

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

* Milly - for helping with the tricky stuff, especially github and devtools - thanks!

<p align="right">(<a href="#william-cooke-photography-site">back to top</a>)</p>