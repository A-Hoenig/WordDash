const words = ["bronc", "cites", "cilia", "burgs", "lilts", "floor", "trips", "seize", "pones", "crime", "huzza", "mired", "timid", "toque", "turfs", "dears", "yokel", "poles", "tuple", "pinky", "flams", "exude", "takes", "cheep", "wanta", "algae", "lunch", "molto", "buffa", "woozy", "shrug", "libra", "enrol", "babes", "risky", "niter", "fatal", "dross", "glove", "homer", "fight", "wimpy", "juror", "looks", "beech", "cruft", "aider", "hafts", "buffo", "madly", "muser", "wazoo", "finks", "allot", "vires", "rungs", "yoked", "slurs", "flier", "mungy", "plyer", "stiff", "taxis", "prong", "foots", "filar", "glint", "zebus", "hoist", "pitas", "funky", "rasae", "broom", "fired", "slave", "tykes", "speed", "humid", "grave", "campo", "fermi", "oozes", "wised", "toons", "knoll", "limed", "pasts", "diazo", "paths", "loads", "obits", "larva", "avant", "muddy", "packs", "meats", "bards", "maple", "servo", "barge", "curia", "manic", "basis", "sorry", "recta", "tests", "drums", "rival", "fancy", "gusts", "combo", "bakes", "dodgy", "glebe", "watsa", "tunas", "borne", "sects", "sites", "weedy", "unsex", "genet", "pixel", "beast", "peter", "burps", "gunks", "igloo", "latin", "stews", "poppy", "minis", "turps", "mecca", "shred", "dells", "suing", "girts", "sorer", "mosey", "mould", "mosts", "neigh", "break", "braes", "filed", "marks", "stern", "kiths", "baize", "lairs", "pupil", "summa", "tulip", "agony", "dorms", "apart", "mores", "laths", "leery", "waist", "worst", "miler", "toots", "bubba", "dewey", "bract", "prigs", "thins", "actor", "boned", "pesky", "goofy", "claim", "aphid", "water", "gonad", "leafs", "axled", "major", "light", "waits", "clink", "dared", "gnaws", "sneak", "safer", "photo", "tutus", "odour", "reify", "spear", "tardy", "sally", "filer", "mines", "sexes", "seats", "sleek", "ankhs", "pints", "oinks", "dynes", "boats", "alums", "stint", "haunt", "aways", "dogie", "vales", "begun", "selah", "tater", "gazer", "after", "tiger", "mazer", "spays", "conks", "bolls", "gaffe", "poser", "unify", "skate", "mimes", "board", "muses", "divvy", "ivies", "blocs", "pound", "masks", "spars", "dress", "rumba", "drubs", "tromp", "oaten", "jells", "gluon", "nuder", "polka", "cruet", "purty", "burns", "grunt", "grope", "cargo", "hated", "calms", "lamed", "axing", "grays", "croon", "cased", "waifs", "tinny", "herds", "scare", "dieth", "truly", "keels", "canoe", "shags", "yells", "cuffs", "evoke", "casks", "craft", "story", "beans", "ousel", "motet", "molds", "japan", "final", "fully", "lumps", "brags", "carve", "roles", "palsy", "toper", "booky", "curvy", "bayed", "whump", "limbo", "hyper", "grips", "koine", "situs", "stuff", "berry", "roper", "keens", "doeth", "quirk", "trays", "shuck", "loner", "twice", "panga", "sized", "unmet", "fatso", "dowry", "livid", "hanky", "milks", "curry", "jenny", "ahhhh", "raspy", "taros", "gusty", "parts", "thumb", "cooch", "boozy", "smear", "pence", "bunco", "wrest", "mania", "pores", "cough", "achoo", "fibre", "units", "reeds", "coals", "plans", "trees", "injun", "wowee", "sedan", "louts", "teems", "maces", "finch", "pulse", "aloof", "prove", "cowls", "duces", "based", "sires", "limen", "flask", "swims", "worms", "petit", "jibes", "match", "geeks", "billy", "power", "rally", "cabin", "pulps", "depot", "crabs", "saris", "basin", "fowls", "sower", "dicot", "aleck", "feats", "butts", "nixes", "debit", "seest", "thrum", "carat", "primp", "dhows", "mucus", "scuse", "leapt", "gamic", "wager", "kulak", "klugy", "ulnar", "goers", "stela", "taxon", "shrew", "triad", "doors", "wowed", "skoal", "treap", "mercy", "clout", "mamma", "grubs", "skimp", "morph", "paces", "mimed", "butyl", "slunk", "feint", "bilge", "maker", "rears", "fires", "fossa", "dazes", "hinds", "leach", "sever", "fuzzy", "annas", "sided", "beset", "whack", "brass", "midis", "money", "welch", "whooo", "lolly", "swaps", "adopt", "bully", "tonal", "hocks", "totem", "gangs", "sulky", "giber", "unwed", "moper", "hauls", "cloud", "slope", "stain", "rusty", "sates", "brows", "frees", "flair", "tooth", "esses", "fleas", "dovey", "decoy", "swigs", "golds", "bonus", "gauze", "etext", "mails", "piety", "hapax", "islet", "truck", "black", "porks", "spitz", "gross", "saint", "fazes", "wound", "alien", "shiki", "spunk", "hairy", "filet", "vines", "roach", "lawns", "tubas", "furze", "okapi", "miser", "fable", "snort", "miles", "negro", "flash", "snuck", "perky", "sleep", "coper", "bongs", "lordy", "snits", "shahs", "chute", "fares", "paste", "liest", "shear", "stirs", "levee", "dryad", "space", "arity", "chugs", "julep", "taper", "needs", "tours", "local", "sidle", "pffft", "skiff", "bravo", "gales", "gapes", "batch", "saucy", "carne", "muggy", "kraal", "slomo", "signs", "hexer", "boxed", "edger", "sheaf", "twins", "oxbow", "cheap", "plums", "furls", "gonna", "molar", "paled", "joule", "sowed", "spasm", "sieve", "renew", "teeny", "toils", "puked", "ovals", "tweed", "later", "lover", "burnt", "usurp", "flour", "bossy", "colon", "bytes", "batty", "studs", "dirks", "groin", "snuff", "forma", "finis", "biddy", "gases", "gulch", "bongo", "viols", "joins", "locos", "abaft", "ichor", "poler", "fores", "growl", "plein", "fleck", "mommy", "steak", "cruds", "humpf", "beget", "shunt", "urine", "jests", "hived", "ducky", "raged", "tumor", "amber", "smurf", "brain", "pouch", "wield", "lathe", "eying", "forks", "shaft", "caste", "homed", "booms", "thief", "defog", "culpa", "mated", "youse", "mesas", "olios", "spook", "panda", "dilly", "paved", "texts", "butte", "hovel", "huger", "clerk", "beige", "plank", "dater", "carom", "goons", "plait", "hunky", "poxed", "cinch", "broke", "pales", "amuck", "biter", "manse", "holer", "bassi", "unban", "bruin", "musky", "shays", "greps", "noter", "frats", "spots", "boxer", "gauzy", "dicta", "cento", "excel", "baddy", "orals", "plies", "pluck", "tubal", "flubs", "stork", "algin", "loafs", "buoys", "human", "peaty", "unite", "limes", "prime", "allay", "trims", "sakes", "dykes", "gruel", "stick", "stump", "shews", "twist", "bombe", "bight", "erupt", "shlep", "redid", "divan", "axons", "guise", "wroth", "vends", "hafta", "defun", "sadly", "bugle", "unbar", "fugit", "shout", "pansy", "goosy", "icons", "rakes", "labor", "study", "exurb", "aegis", "speak", "bowie", "daisy", "wales", "condo", "grins", "ikats", "axels", "louis", "drawl", "civic", "heads", "malls", "phial", "raves", "scoop", "fries", "tithe", "tenth", "swung", "paren", "piney", "fames", "focal", "pager", "sperm", "sighs", "swank", "beams", "zooms", "begot", "gravy", "binge", "rimed", "tatty", "koala", "grapy", "idols", "ditch", "adman", "casas", "tared", "pawky", "lards", "bowls", "delta", "moody", "talus", "drabs", "privy", "revet", "guppy", "kopek", "johns", "shrub", "dweeb", "enjoy", "swain", "steps", "shore", "silos", "bland", "redly", "fanin", "altar", "beryl", "barns", "groan", "micks", "basks", "route", "prink", "doggo", "bails", "quasi", "stabs", "bogus", "ninth", "trait", "scrip", "veals", "slept", "spawn", "hunks", "shied", "wills", "flake", "drips", "jetty", "weirs", "wools", "drops", "clogs", "locus", "runny", "krona", "topic", "hydra", "leaks", "olden", "sandy", "luted", "icers", "whoso", "moxie", "bumph", "voile", "freed", "envoy", "reaps", "trike", "flesh", "quote", "backs", "yikes", "payed", "scuba", "wages", "wends", "dozes", "yarns", "plaza", "thing", "dusty", "piped", "froze", "trove", "kudos", "hypos", "bwana", "busty", "rabid", "rusts", "fresh", "nonny", "chase", "affix", "music", "seeps", "ruing", "faded", "sable", "sated", "souls", "amens", "aorta", "cowry", "flyer", "abbey", "lines", "basso", "gushy", "drawn", "guess", "loser", "cameo", "pause", "tongs", "scrap", "drams", "annoy", "parks", "tonic", "teach", "acned", "shill", "eruct", "umber", "namer", "globe", "graft", "slays", "mothy", "obeys", "tight", "nasal", "bench", "avers", "baker", "kazoo", "banns", "ruddy", "etude", "mashy", "arbor", "turdy", "strep", "chore", "letup", "shark", "yummy", "sputa", "floes", "sours", "buret", "toady", "mohel", "arena", "cutup", "elder", "dulse", "float", "likes", "sired", "store", "halma", "jelly", "bungs", "demon", "untie", "spued", "yards", "hoped", "garde", "yours", "mitre", "nards", "sizes", "frizz", "adult"];

// ####################################################################################
// ########################### setup eventlisteners ###################################
// ####################################################################################

document.getElementById('level-easy').addEventListener('click', easy);
document.getElementById('level-normal').addEventListener('click', normal);
document.getElementById('level-master').addEventListener('click', expert);
document.getElementById('guess-button').addEventListener('click', processTurn);
document.getElementById("user-guess").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        processTurn();
    }
});
document.getElementById('info-icon').addEventListener('click', showInstructions);
document.getElementById('popup-info').addEventListener('click', showInstructions);
// ###################################################################################
// ###################################################################################

document.getElementById("user-guess").disabled = true;
document.getElementById("guess-button").disabled = true;

function easy() {
    document.getElementById("selected-level").innerText = "easy";
    startGame("easy");
    return;
}
function normal() {
    document.getElementById("selected-level").innerText = "normal";
    startGame("normal");
    return;
}
function expert() {
    document.getElementById("selected-level").innerText = "expert";
    startGame("expert");
    return;
}

// INITIAL GAME SETUP //
function startGame(level) {
    
    let turns;

    document.getElementById('answer-word').innerHTML = words[Math.floor(Math.random() * words.length)]; // get random word form array and add it to the hidden solution element

    console.log("start " + level + " game");
    console.log('answer: ' + document.getElementById('answer-word').textContent); // can be deleted after error checking
    console.log("------------------------------"); // can be deleted after error checking

    // set up how many turns each type of level gets
   
    if (level==="expert") {
         turns = 5;
    } else if (level==="normal") {
        turns = 6;
    } else {    
        turns = 7;
    }
    console.log( level + " level = " + turns + " turns");

    document.getElementById('selected-level').innerHTML = level;
    document.getElementById("popup-level").style.display = "none"; // hide game menu
    setupGuessRows(turns); // // 5,6, or 7 turns
    document.getElementById("user-guess").disabled = false;
    document.getElementById("guess-button").disabled = false;
    document.getElementById("user-guess").placeholder = "type a 5 letter word";
    document.getElementById("user-guess").focus(); // add cursor to guess window so user can immediately type
}

/** generates a dynamic number of rows with unique Id for each letter box. (Format: id='letter-xn'
 * where x is the row and n is the nth letter in that row).
 * Number of rows based on #selected-level element
 */
function setupGuessRows(guesses) {

    const guessRows = document.getElementById('guess-rows');
    /* loop to build n rows of HTML based on level */
    document.getElementById('maxTurns').innerHTML = guesses; /* write maximum number of turns to dom */

    for (let i = 0; i < guesses; i++) {
        let string = "<section class='guess-row' id='guess-" + (i) + "'>";
        for (let r = 0; r < 5; r++) {
            string = string + `
          <div class="letter-box" id="letter-${i}${r}"></div>`;
        }
        string = string + `
      </section>
      `;
        guessRows.insertAdjacentHTML("beforeend", string);
    }
}

function processTurn() {

    let turnNumber = parseInt(document.getElementById('turnNumber').textContent); // get current turn number from hidden #turn-number div
    let maxTurns = parseInt(document.getElementById('maxTurns').textContent) - 1;  // get current maximum turns from hidden #maxTurns div
    let answer = document.getElementById('answer-word').textContent;  // get word answer to compare to guess
    let userguess = document.getElementById('user-guess').value;  // get word answer to compare to guess
    userguess = userguess.toLowerCase(); //convert all to lowercase incase caps lock is on
    let regex = /^[a-zA-Z]+$/; //allowed letters for answer

    console.log('turn: ' + (turnNumber + 1) + " out of " + (maxTurns + 1)); // can be deleted after error checking
    console.log('users guess: ' + userguess); // can be deleted after error checking

    if (userguess === answer) {

        document.getElementById("user-guess").placeholder = "YOU WON!";
        document.getElementById("user-guess").disabled = true;
        document.getElementById("guess-button").disabled = true;
        addWordToGrid(userguess, turnNumber); // no need to check guess as answer is correct format
        colorLetters(userguess, answer, turnNumber);
        updateUsedLetters(userguess);
        addWordToGrid(answer, 9); //add answer to popup
        document.getElementById("popup-won").style.display = "block"; //show winner popup

        console.log("---------USER WON!! -----------");

        return;

    } else if (userguess.length < 5 || regex.test(userguess) === false) {

        document.getElementById('user-guess').value = "";
        document.getElementById("user-guess").placeholder = "invalid word!";

    } else if (turnNumber <= maxTurns) {

        document.getElementById("user-guess").placeholder = "type a 5 letter word";
        addWordToGrid(userguess, turnNumber);
        colorLetters(userguess, answer, turnNumber);
        updateUsedLetters(userguess);
        console.log("------------------------------");
        document.getElementById('turnNumber').textContent = turnNumber + 1; // increment turn number

        if (turnNumber === maxTurns) {
            // game over
            document.getElementById("user-guess").disabled = true;
            document.getElementById("guess-button").disabled = true;
            document.getElementById("user-guess").placeholder = "YOU LOST!";
            console.log("------END OF GAME----------");
            document.getElementById("popup-lost").style.display = "block"; //show winner popup
            return; // dont process guess after max turns reached
        }

    } 

}

/** takes the word and row input and places each letter on the board
 * then resets focus for a new entry
 */
function addWordToGrid(userguess, row) {
    console.log("add word to grid: " + userguess + " row: " + row);


    //loop though child letter elements and add each letterID
    if (userguess === null || row === null) {
        //do nothing
    } else {

        for (let i = 0; i < 5; i++) {
            let destinationID = `letter-${row}${i}`;
            document.getElementById(destinationID).textContent = userguess.charAt(i);
        }

        document.getElementById("user-guess").value = ""; // deleted guessed word from button
        document.getElementById("user-guess").focus(); // set focus on button for next word
    }
}

function colorLetters(userguess, answer, row) {
    let userguessArray = [];
    let exactMatches = [];
    let nonExactMatches = [];
    let answerArray = [];

    //convert userguess and answer to arrays of 5 letters
    userguessArray = userguess.split('');
    answerArray = answer.split('');

    // find exact matches first
    for (let i = 0; i < 5; i++) {
        if (userguessArray[i] === answerArray[i]) {
            exactMatches.push(`letter-${row}${i}`);
            userguessArray[i] = null; //mark as matched in both arrays
            answerArray[i] = null;
        }
    }

    // now match non exact matches that aren't null yet
    for (let x = 0; x < 5; x++) {
        if (userguessArray[x] !== null && answerArray.includes(userguessArray[x])) {
            nonExactMatches.push(`letter-${row}${x}`);
            answerArray[answerArray.indexOf(userguessArray[x])] = null; // marks as matched
        }
    }
    //now color the respective letters based on both arrays
    exactMatches.forEach((element) => document.getElementById(element).classList.add("correct-posit"));
    nonExactMatches.forEach((element) => document.getElementById(element).classList.add("correct-letter"));
}

/** gets list of letters from game area, adds unique user guess letters and sorts,
 * then writes it all back to the game area
 */
function updateUsedLetters(userguess) {
    // create current used letter array from HTML element
    let letterListArray = document.getElementById("used-letters").textContent.split('');
    // convert userguess into an array of letters
    let userguessArray = userguess.split('');
    let newLetterListString = "";
    // check each letter and add if not in the list already
    for (let letter of userguessArray) {
        if (!letterListArray.includes(letter)) {
            letterListArray.push(letter);
        }
    }
    // sort the array 
    letterListArray.sort();
    // convert array back to a string
    newLetterListString = letterListArray.join('');
    //now write list back to game area
    document.getElementById("used-letters").textContent = newLetterListString;
}

function showInstructions () {
    var i = document.getElementById("popup-info");
    i.style.visibility = i.style.visibility === 'hidden' ? '' : 'hidden';
}
/* current bugs */





/* To DO LIST 
optional check box to force words to be from list // valid
add background
finish styling */
