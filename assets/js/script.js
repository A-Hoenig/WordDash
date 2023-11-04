const words = ["bronc", "cites", "cilia", "burgs", "lilts", "floor", "trips", "seize", "pones", "crime", "huzza", "mired", "timid", "toque", "turfs", "dears", "yokel", "poles", "tuple", "pinky", "flams", "exude", "takes", "cheep", "wanta", "algae", "lunch", "molto", "buffa", "woozy", "shrug", "libra", "enrol", "babes", "risky", "niter", "fatal", "dross", "glove", "homer", "fight", "wimpy", "juror", "looks", "beech", "cruft", "aider", "hafts", "buffo", "madly", "muser", "wazoo", "finks", "allot", "vires", "rungs", "yoked", "slurs", "flier", "mungy", "plyer", "stiff", "taxis", "prong", "foots", "filar", "glint", "zebus", "hoist", "pitas", "funky", "rasae", "broom", "fired", "slave", "tykes", "speed", "humid", "grave", "campo", "fermi", "oozes", "wised", "toons", "knoll", "limed", "pasts", "diazo", "paths", "loads", "obits", "larva", "avant", "muddy", "packs", "meats", "bards", "maple", "servo", "barge", "curia", "manic", "basis", "sorry", "recta", "tests", "drums", "rival", "fancy", "gusts", "combo", "bakes", "dodgy", "glebe", "watsa", "tunas", "borne", "sects", "sites", "weedy", "unsex", "genet", "pixel", "beast", "peter", "burps", "gunks", "igloo", "latin", "stews", "poppy", "minis", "turps", "mecca", "shred", "dells", "suing", "girts", "sorer", "mosey", "mould", "mosts", "neigh", "break", "braes", "filed", "marks", "stern", "kiths", "baize", "lairs", "pupil", "summa", "tulip", "agony", "dorms", "apart", "mores", "laths", "leery", "waist", "worst", "miler", "toots", "bubba", "dewey", "bract", "prigs", "thins", "actor", "boned", "pesky", "goofy", "claim", "aphid", "water", "gonad", "leafs", "axled", "major", "light", "waits", "clink", "dared", "gnaws", "sneak", "safer", "photo", "tutus", "odour", "reify", "spear", "tardy", "sally", "filer", "mines", "sexes", "seats", "sleek", "ankhs", "pints", "oinks", "dynes", "boats", "alums", "stint", "haunt", "aways", "dogie", "vales", "begun", "selah", "tater", "gazer", "after", "tiger", "mazer", "spays", "conks", "bolls", "gaffe", "poser", "unify", "skate", "mimes", "board", "muses", "divvy", "ivies", "blocs", "pound", "masks", "spars", "dress", "rumba", "drubs", "tromp", "oaten", "jells", "gluon", "nuder", "polka", "cruet", "purty", "burns", "grunt", "grope", "cargo", "hated", "calms", "lamed", "axing", "grays", "croon", "cased", "waifs", "tinny", "herds", "scare", "dieth", "truly", "keels", "canoe", "shags", "yells", "cuffs", "evoke", "casks", "craft", "story", "beans", "ousel", "motet", "molds", "japan", "final", "fully", "lumps", "brags", "carve", "roles", "palsy", "toper", "booky", "curvy", "bayed", "whump", "limbo", "hyper", "grips", "koine", "situs", "stuff", "berry", "roper", "keens", "doeth", "quirk", "trays", "shuck", "loner", "twice", "panga", "sized", "unmet", "fatso", "dowry", "livid", "hanky", "milks", "curry", "jenny", "ahhhh", "raspy", "taros", "gusty", "parts", "thumb", "cooch", "boozy", "smear", "pence", "bunco", "wrest", "mania", "pores", "cough", "achoo", "fibre", "units", "reeds", "coals", "plans", "trees", "injun", "wowee", "sedan", "louts", "teems", "maces", "finch", "pulse", "aloof", "prove", "cowls", "duces", "based", "sires", "limen", "flask", "swims", "worms", "petit", "jibes", "match", "geeks", "billy", "power", "rally", "cabin", "pulps", "depot", "crabs", "saris", "basin", "fowls", "sower", "dicot", "aleck", "feats", "butts", "nixes", "debit", "seest", "thrum", "carat", "primp", "dhows", "mucus", "scuse", "leapt", "gamic", "wager", "kulak", "klugy", "ulnar", "goers", "stela", "taxon", "shrew", "triad", "doors", "wowed", "skoal", "treap", "mercy", "clout", "mamma", "grubs", "skimp", "morph", "paces", "mimed", "butyl", "slunk", "feint", "bilge", "maker", "rears", "fires", "fossa", "dazes", "hinds", "leach", "sever", "fuzzy", "annas", "sided", "beset", "whack", "brass", "midis", "money", "welch", "whooo", "lolly", "swaps", "adopt", "bully", "tonal", "hocks", "totem", "gangs", "sulky", "giber", "unwed", "moper", "hauls", "cloud", "slope", "stain", "rusty", "sates", "brows", "frees", "flair", "tooth", "esses", "fleas", "dovey", "decoy", "swigs", "golds", "bonus", "gauze", "etext", "mails", "piety", "hapax", "islet", "truck", "black", "porks", "spitz", "gross", "saint", "fazes", "wound", "alien", "shiki", "spunk", "hairy", "filet", "vines", "roach", "lawns", "tubas", "furze", "okapi", "miser", "fable", "snort", "miles", "negro", "flash", "snuck", "perky", "sleep", "coper", "bongs", "lordy", "snits", "shahs", "chute", "fares", "paste", "liest", "shear", "stirs", "levee", "dryad", "space", "arity", "chugs", "julep", "taper", "needs", "tours", "local", "sidle", "pffft", "skiff", "bravo", "gales", "gapes", "batch", "saucy", "carne", "muggy", "kraal", "slomo", "signs", "hexer", "boxed", "edger", "sheaf", "twins", "oxbow", "cheap", "plums", "furls", "gonna", "molar", "paled", "joule", "sowed", "spasm", "sieve", "renew", "teeny", "toils", "puked", "ovals", "tweed", "later", "lover", "burnt", "usurp", "flour", "bossy", "colon", "bytes", "batty", "studs", "dirks", "groin", "snuff", "forma", "finis", "biddy", "gases", "gulch", "bongo", "viols", "joins", "locos", "abaft", "ichor", "poler", "fores", "growl", "plein", "fleck", "mommy", "steak", "cruds", "humpf", "beget", "shunt", "urine", "jests", "hived", "ducky", "raged", "tumor", "amber", "smurf", "brain", "pouch", "wield", "lathe", "eying", "forks", "shaft", "caste", "homed", "booms", "thief", "defog", "culpa", "mated", "youse", "mesas", "olios", "spook", "panda", "dilly", "paved", "texts", "butte", "hovel", "huger", "clerk", "beige", "plank", "dater", "carom", "goons", "plait", "hunky", "poxed", "cinch", "broke", "pales", "amuck", "biter", "manse", "holer", "bassi", "unban", "bruin", "musky", "shays", "greps", "noter", "frats", "spots", "boxer", "gauzy", "dicta", "cento", "excel", "baddy", "orals", "plies", "pluck", "tubal", "flubs", "stork", "algin", "loafs", "buoys", "human", "peaty", "unite", "limes", "prime", "allay", "trims", "sakes", "dykes", "gruel", "stick", "stump", "shews", "twist", "bombe", "bight", "erupt", "shlep", "redid", "divan", "axons", "guise", "wroth", "vends", "hafta", "defun", "sadly", "bugle", "unbar", "fugit", "shout", "pansy", "goosy", "icons", "rakes", "labor", "study", "exurb", "aegis", "speak", "bowie", "daisy", "wales", "condo", "grins", "ikats", "axels", "louis", "drawl", "civic", "heads", "malls", "phial", "raves", "scoop", "fries", "tithe", "tenth", "swung", "paren", "piney", "fames", "focal", "pager", "sperm", "sighs", "swank", "beams", "zooms", "begot", "gravy", "binge", "rimed", "tatty", "koala", "grapy", "idols", "ditch", "adman", "casas", "tared", "pawky", "lards", "bowls", "delta", "moody", "talus", "drabs", "privy", "revet", "guppy", "kopek", "johns", "shrub", "dweeb", "enjoy", "swain", "steps", "shore", "silos", "bland", "redly", "fanin", "altar", "beryl", "barns", "groan", "micks", "basks", "route", "prink", "doggo", "bails", "quasi", "stabs", "bogus", "ninth", "trait", "scrip", "veals", "slept", "spawn", "hunks", "shied", "wills", "flake", "drips", "jetty", "weirs", "wools", "drops", "clogs", "locus", "runny", "krona", "topic", "hydra", "leaks", "olden", "sandy", "luted", "icers", "whoso", "moxie", "bumph", "voile", "freed", "envoy", "reaps", "trike", "flesh", "quote", "backs", "yikes", "payed", "scuba", "wages", "wends", "dozes", "yarns", "plaza", "thing", "dusty", "piped", "froze", "trove", "kudos", "hypos", "bwana", "busty", "rabid", "rusts", "fresh", "nonny", "chase", "affix", "music", "seeps", "ruing", "faded", "sable", "sated", "souls", "amens", "aorta", "cowry", "flyer", "abbey", "lines", "basso", "gushy", "drawn", "guess", "loser", "cameo", "pause", "tongs", "scrap", "drams", "annoy", "parks", "tonic", "teach", "acned", "shill", "eruct", "umber", "namer", "globe", "graft", "slays", "mothy", "obeys", "tight", "nasal", "bench", "avers", "baker", "kazoo", "banns", "ruddy", "etude", "mashy", "arbor", "turdy", "strep", "chore", "letup", "shark", "yummy", "sputa", "floes", "sours", "buret", "toady", "mohel", "arena", "cutup", "elder", "dulse", "float", "likes", "sired", "store", "halma", "jelly", "bungs", "demon", "untie", "spued", "yards", "hoped", "garde", "yours", "mitre", "nards", "sizes", "frizz", "adult"];



/** returns a random word from the array 'words' */
function generateRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

/** generates a dynamic number of rows with unique Id for each letter box. (Format: id='letter-xn'
 * where x is the row and n is the nth letter in that row).
 * Number of rows based on #selected-level element
 */
function setupGuessRows(guesses) {

    const guessRows = document.getElementById('guess-rows');
    /* loop to build n rows of HTML based on level */
    for (let i = 0; i < guesses - 1; i++) {
        let string = "<section class='guess-row' id='guess-" + (i + 1) + "'>"; // row 0 already in DOM as master
        for (let r = 0; r < 5; r++) {
            string = string + `
          <div class="letter-box" id="letter-${i + 1}${r}"></div>`
        }
        string = string + `
      </section>
      `
        guessRows.insertAdjacentHTML("beforeend", string);
        // console.log(string) //delete this once it works
    }
}

// ####################################################################################
// ########################### setup eventlisteners ###################################
// ####################################################################################

document.getElementById('restart-button').addEventListener('click', restart);
document.getElementById('level-easy').addEventListener('click', setEasy);
document.getElementById('level-medium').addEventListener('click', setNormal);
document.getElementById('level-master').addEventListener('click', setMaster);

document.getElementById('guess-button').addEventListener('click', mainGameLoop);
document.getElementById('gear-icon').addEventListener('click', gameMenu);
document.getElementById("user-guess").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        mainGameLoop();
    }
});
// ###################################################################################
// ###################################################################################


// GAME SETUP ON PAGE LOAD 
document.getElementById('answer-word').innerHTML = generateRandomWord(); // get random word form array and add it to the hidden solution element
console.log (document.getElementById('answer-word').innerHTML); // DELETE ME ONCE ERROR CHECKING IS DONE !!!!

const level = document.getElementById('selected-level');
if (level.textContent == "MASTER") {
    numberOfRows = 5
} else if (level.textContent == "NORMAL") {
    numberOfRows = 6
} else {
    numberOfRows = 7 //easy = default
}

setupGuessRows(numberOfRows);
document.getElementById("user-guess").focus(); // add cursor to guess window so user can immediately type

/** takes the word and row input and places each letter on the board
 * then resets focus for a new entry
 */
function addWordToGrid(userguess, row) {
    
    //loop though child letter elements and add each letterID
    if (userguess === null || row === null) {
        //do nothing
    } else { 

    for (let i = 0; i < 5; i++) {
        let destinationID = `letter-${row}${i}`;
        document.getElementById(destinationID).textContent = userguess.charAt(i);
    }

    document.getElementById("user-guess").value = "";
    document.getElementById("user-guess").focus();
}
}
//#######################################################################################
/** main game loop. check turn elememt on page to end game after set number of guesses */
//#######################################################################################

function mainGameLoop() {
    // get current turn number from hidden #turn-number div
    let turnNumber = parseInt(document.getElementById('turnNumber').textContent);
    // get word answer to compare to guess
    answer = document.getElementById('answer-word').innerHTML; 

    console.log('turn number: ' + turnNumber); // can be deleted after error checking

    if (turnNumber < numberOfRows) {

        // get users guess from input field
        let userguess = document.getElementById('user-guess').value;
        userguess = userguess.toLowerCase(); //convert all to lowercase incase caps lock is on
        let regex = /^[a-zA-Z]+$/; //allowed letters for answer

        if (userguess.length = 5 && regex.test(userguess)) {
            // check and add word to grid
            addWordToGrid(userguess, turnNumber);
            // verify colors for correct letters
            colorLetters(userguess, answer, turnNumber);
            //check if game won

            /* increment turn at the end */
            document.getElementById('turnNumber').textContent = turnNumber + 1; // increment turn number
        } else {

            alert('please input a valid 5 letter word!'); // not a valid input

        }
    } else {
        // GAME OVER
        alert("sorry, you've run out of guesses")
    }
}

//#######################################################################################
//############################## main game loop end  ####################################
//#######################################################################################



/** bring up game menu to change difficulty or resart */
function gameMenu() {
    if (document.getElementById("popup-level").style.display === "none") {
        document.getElementById("popup-level").style.display = "block";
    } else {
        document.getElementById("popup-level").style.display = "none";
    }
}

function setEasy() {
    console.log("easy");
    document.getElementById('selected-level').innerHTML = "EASY";
    gameMenu();
    mainGameLoop();
}
function setNormal() {
    console.log('medium');
    document.getElementById('selected-level').innerHTML = "NORMAL";
    gameMenu();
    mainGameLoop();
}
function setMaster() {
    console.log('hard');
    document.getElementById('selected-level').innerHTML = "MASTER";
    gameMenu();
    mainGameLoop();
}

function restart() {
    alert("This will restart the game!")
    gameMenu();
    mainGameLoop();
}

function colorLetters(userguess, answer, row) {
  
    const exactMatches = [];
    const wrongPosition = [];
  
    /* build 2 arrays with exact match IDs and wrong position IDs */
    for (let i = 0; i < 5; i++) {
      if (userguess[i] === answer[i]) {
        exactMatches.push(`letter-${row}${i}`);
      } else if (answer.includes(userguess[i])) {
        wrongPosition.push(`letter-${row}${i}`);
      }
    }
    
        /* now add the repsecitve class to each found letter */
        exactMatches.forEach((element) => document.getElementById(element).classList.add("correct-posit"));
        wrongPosition.forEach((element) => document.getElementById(element).classList.add("correct-letter"));
  }
  
  
/* current bugs */
// word verification has stopped working
// wrong position letter should not be included if already in correct position array
// gear icon needs a double click to show menu
// end of game needs to not allow input anymore


/* To DO LIST*/
// guessed letters output
// show win or lose popup
// fix restart function without causing constant webpage reload
// only allow level change if game is ended
// change mechanics as its too easy without having to geuss actual words.