const form = document.querySelector(".form");
let features = document.querySelector(".features-list");
let urlMeaning;

const randomWords = [
  "apple",
  "banana",
  "orange",
  "pear",
  "grape",
  "watermelon",
  "pineapple",
  "strawberry",
  "blueberry",
  "mango",
  "kiwi",
  "peach",
  "plum",
  "lemon",
  "lime",
  "cherry",
  "apricot",
  "grapefruit",
  "coconut",
  "pomegranate",
  "raspberry",
  "blackberry",
  "cranberry",
  "avocado",
  "melon",
  "cantaloupe",
  "honeydew",
  "fig",
  "date",
  "olive",
  "guava",
  "papaya",
  "passionfruit",
  "persimmon",
  "dragonfruit",
  "bread",
  "butter",
  "cheese",
  "milk",
  "yogurt",
  "egg",
  "bacon",
  "sausage",
  "ham",
  "chicken",
  "beef",
  "pork",
  "lamb",
  "fish",
  "shrimp",
  "lobster",
  "crab",
  "clam",
  "oyster",
  "rice",
  "pasta",
  "noodle",
  "potato",
  "carrot",
  "broccoli",
  "cauliflower",
  "tomato",
  "cucumber",
  "lettuce",
  "spinach",
  "kale",
  "onion",
  "garlic",
  "pepper",
  "salt",
  "sugar",
  "flour",
  "butter",
  "oil",
  "vinegar",
  "honey",
  "syrup",
  "mustard",
  "ketchup",
  "mayonnaise",
  "soy sauce",
  "chocolate",
  "vanilla",
  "coffee",
  "tea",
  "water",
  "juice",
  "soda",
  "wine",
  "beer",
  "whiskey",
  "vodka",
  "rum",
  "gin",
  "cocktail",
  "smoothie",
  "soup",
  "salad",
  "sandwich",
  "burger",
  "pizza",
  "pasta",
  "sushi",
  "taco",
  "burrito",
  "fries",
  "ice cream",
  "cake",
  "cookie",
  "pie",
  "chocolate",
  "candy",
  "snack",
  "appetizer",
  "entree",
  "dessert",
  "breakfast",
  "lunch",
  "dinner",
  "brunch",
  "midnight",
  "morning",
  "afternoon",
  "evening",
  "night",
  "day",
  "week",
  "month",
  "year",
  "decade",
  "century",
  "millennium",
  "second",
  "minute",
  "hour",
  "day",
  "week",
  "month",
  "year",
  "decade",
  "century",
  "millennium",
  "sun",
  "moon",
  "star",
  "planet",
  "galaxy",
  "universe",
  "earth",
  "ocean",
  "mountain",
  "river",
  "lake",
  "forest",
  "desert",
  "jungle",
  "island",
  "volcano",
  "rainbow",
  "cloud",
  "sunshine",
  "rain",
  "snow",
  "wind",
  "storm",
  "thunder",
  "lightning",
  "fire",
  "ice",
  "air",
  "land",
  "water",
  "nature",
  "environment",
  "ecosystem",
  "climate",
  "weather",
  "season",
  "spring",
  "summer",
  "autumn",
  "winter",
  "flower",
  "tree",
  "grass",
  "bush",
  "weed",
  "rock",
  "soil",
  "sand",
  "mud",
  "dirt",
  "stone",
  "wood",
  "metal",
  "glass",
  "plastic",
  "paper",
  "cloth",
  "fabric",
  "thread",
  "needle",
  "button",
  "zipper",
  "string",
  "rope",
  "wire",
  "electricity",
  "battery",
  "power",
  "energy",
  "light",
  "sound",
  "music",
  "instrument",
  "guitar",
  "piano",
  "drum",
  "violin",
  "trumpet",
  "flute",
  "saxophone",
  "clarinet",
  "harmonica",
  "accordion",
  "organ",
  "keyboard",
  "voice",
  "singer",
  "dancer",
  "actor",
  "actress",
  "artist",
  "painter",
  "sculptor",
  "writer",
  "author",
  "poet",
  "novelist",
  "playwright",
  "director",
  "producer",
  "musician",
  "composer",
  "photographer",
  "filmmaker",
  "scientist",
  "engineer",
  "doctor",
  "nurse",
  "teacher",
  "professor",
  "student",
  "athlete",
  "player",
  "coach",
  "referee",
  "judge",
  "lawyer",
  "pilot",
  "driver",
  "captain",
  "soldier",
  "officer",
  "detective",
  "firefighter",
  "paramedic",
  "chef",
  "baker",
  "waiter",
  "waitress",
  "bartender",
  "tailor",
  "designer",
  "builder",
  "plumber",
  "electrician",
  "mechanic",
  "carpenter",
  "gardener",
  "farmer",
  "librarian",
  "architect",
  "banker",
  "accountant",
  "cashier",
  "clerk",
  "manager",
  "boss",
  "employee",
  "worker",
  "customer",
  "client",
  "patient",
  "visitor",
  "friend",
  "family",
  "mother",
  "father",
  "parent",
  "sister",
  "brother",
  "child",
  "son",
  "daughter",
  "baby",
  "cousin",
  "aunt",
  "uncle",
  "grandmother",
  "grandfather",
  "grandparent",
  "relatives",
  "neighbour",
  "friend",
  "acquaintance",
  "stranger",
  "partner",
  "colleague",
  "classmate",
  "teacher",
  "student",
  "boss",
  "employee",
  "team",
  "group",
  "community",
  "society",
  "country",
  "nation",
  "world",
  "continent",
  "government",
  "politics",
  "democracy",
  "president",
  "king",
  "queen",
  "prince",
  "princess",
  "leader",
  "citizen",
  "voter",
  "law",
  "constitution",
  "court",
  "justice",
  "crime",
  "police",
  "army",
  "war",
  "peace",
  "freedom",
  "equality",
  "justice",
  "rights",
  "responsibility",
  "duty",
  "ethics",
  "morality",
  "truth",
  "knowledge",
  "wisdom",
  "education",
  "learning",
  "school",
  "college",
  "university",
  "class",
  "lesson",
  "lecture",
  "exam",
  "test",
  "grade",
  "homework",
  "assignment",
  "project",
  "research",
  "study",
  "book",
  "library",
  "notebook",
  "pencil",
  "pen",
  "paper",
  "desk",
  "chair",
  "table",
  "computer",
  "laptop",
  "keyboard",
  "mouse",
  "screen",
  "monitor",
  "printer",
  "internet",
  "website",
  "email",
  "message",
  "chat",
  "social media",
  "friendship",
  "relationship",
  "love",
  "romance",
  "marriage",
  "divorce",
  "single",
  "couple",
  "family",
  "wedding",
  "celebration",
  "party",
  "gift",
  "holiday",
  "vacation",
  "travel",
  "adventure",
  "explore",
  "discover",
  "tourist",
  "guide",
  "sightseeing",
  "attraction",
  "beach",
  "mountain",
  "lake",
  "river",
  "forest",
  "park",
  "zoo",
  "museum",
  "gallery",
  "exhibition",
  "theater",
  "cinema",
  "concert",
  "festival",
  "art",
  "culture",
  "history",
  "tradition",
  "custom",
  "heritage",
  "language",
  "literature",
  "poetry",
  "music",
  "dance",
  "film",
  "theater",
  "sports",
  "football",
  "basketball",
  "tennis",
  "volleyball",
  "baseball",
  "soccer",
  "hockey",
  "golf",
  "swimming",
  "cycling",
  "running",
  "hiking",
  "yoga",
  "pilates",
  "gymnastics",
  "boxing",
  "karate",
  "taekwondo",
  "judo",
  "wrestling",
  "skiing",
  "snowboarding",
  "surfing",
  "skateboarding",
  "climbing",
  "fishing",
  "boating",
  "sailing",
  "diving",
  "snorkeling",
  "biking",
  "adventure",
  "fitness",
  "health",
  "wellness",
  "nutrition",
  "diet",
  "exercise",
  "meditation",
  "yoga",
  "mindfulness",
  "relaxation",
  "sleep",
  "rest",
  "beauty",
  "fashion",
  "style",
  "trend",
  "makeup",
  "hair",
  "skincare",
  "body",
  "perfume",
  "jewelry",
  "accessories",
  "shopping",
  "store",
  "market",
  "mall",
  "brand",
  "designer",
  "product",
  "price",
  "sale",
  "discount",
  "business",
  "company",
  "startup",
  "entrepreneur",
  "market",
  "customer",
  "product",
  "service",
  "sales",
  "marketing",
  "advertising",
  "branding",
  "promotion",
  "strategy",
  "finance",
  "investment",
  "money",
  "budget",
  "profit",
  "loss",
  "economy",
  "industry",
  "technology",
  "innovation",
  "digital",
  "internet",
  "website",
  "software",
  "hardware",
  "device",
  "app",
  "social media",
  "network",
  "data",
  "analytics",
  "cloud",
  "artificial intelligence",
  "machine learning",
  "robotics",
  "automation",
  "virtual reality",
  "augmented reality",
  "blockchain",
  "cryptocurrency",
  "bitcoin",
  "ethereum",
  "smart contract",
  "cybersecurity",
  "privacy",
  "encryption",
  "hacking",
  "gaming",
  "video game",
  "console",
  "pc",
  "mobile",
  "online",
  "multiplayer",
  "single-player",
  "role-playing",
  "shooter",
  "strategy",
  "simulation",
  "puzzle",
  "adventure",
  "arcade",
  "sports",
  "racing",
  "platformer",
  "action",
  "horror",
  "fantasy",
  "science fiction",
  "history",
  "comedy",
  "drama",
  "thriller",
  "mystery",
  "romance",
  "fiction",
  "non-fiction",
  "biography",
  "autobiography",
  "memoir",
  "poetry",
  "novel",
  "story",
  "literature",
  "bestseller",
  "classic",
  "award",
  "movie",
  "film",
  "documentary",
  "animation",
];

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

function getDefinition() {
  let inputWord = document.getElementById("word");
  let definition = document.getElementById("definition");
  let getDef = document.querySelector(".getDef");
  let featuresIcons = document.querySelector(".features-icons");
  let tooltips = document.querySelector(".tooltips");
  let title = document.querySelector(".title");
  features.style.display = "none";
  definition.style.color = "";
  if (inputWord.value === "") {
    let randomIndex = Math.floor(Math.random() * randomWords.length);
    let randomWord = randomWords[randomIndex];
    urlMeaning = `https://api.dictionaryapi.dev/api/v2/entries/en/dictionary`;
  } else {
    urlMeaning = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord.value}`;
  }
  getDef.innerHTML = `<i class="fa-solid fa-pause pause-class"></i>`;
  definition.innerHTML = "";
  title.innerHTML = "";
  fetch(urlMeaning)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const meaning = data[0].meanings[0].definitions[0].definition;
      const phonetic = data[0].phonetic;
      const word = data[0].word;
      if (phonetic === undefined) {
        title.innerHTML = `<h1 id="word-title">${word}</h1>
          <span id="span-phonetic"><i class="fa-solid fa-volume-high" onclick="playPhonetic()" id="play-icon"></i></span
          >`;
      } else {
        title.innerHTML = `<h1 id="word-title">${word}</h1>
          <span id="span-phonetic">${phonetic}<i class="fa-solid fa-volume-high" onclick="playPhonetic()" id="play-icon"></i></span
          >`;
      }

      for (let index = 0; index < meaning.length; index++) {
        setTimeout(() => {
          definition.innerHTML += meaning[index];
          if (index == meaning.length - 1) {
            getDef.innerHTML = `
              <i class="fa-solid fa-play" id="play" onclick="getDefinition()"></i>`;
            featuresIcons.innerHTML = `
              <i
              class="fa-solid fa-book"
              onclick="getExample()"
              id="example-icon"></i>
            <i class="fa-solid fa-not-equal" id="antonym-icon" onclick="getAntonyms()"></i>
            <i class="fa-solid fa-cubes" id="synonym-icon" onclick="getSynonyms()"></i>
            <a href="https://en.wiktionary.org/wiki/${word}" id="web-icon" target="_blank"><i class="fa-solid fa-globe"></i></a>`;
            tooltips.innerHTML = `
              <div class="tooltip-example tts">Show example</div>
              <div class="tooltip-antonym tts">Show antonyms</div>
              <div class="tooltip-synonym tts">Show synonyms</div>
              <div class="tooltip-web tts">Search web</div>`;
            let exampleIcon = document.querySelector("#example-icon");
            let antonymIcon = document.querySelector("#antonym-icon");
            let synonymIcon = document.querySelector("#synonym-icon");
            let webIcon = document.querySelector("#web-icon");
            let tooltipExample = document.querySelector(".tooltip-example");
            let tooltipAntonym = document.querySelector(".tooltip-antonym");
            let tooltipSynonym = document.querySelector(".tooltip-synonym");
            let tooltipWeb = document.querySelector(".tooltip-web");

            exampleIcon.addEventListener("mouseover", () => {
              tooltipExample.classList.add("hovered-e");
            });
            exampleIcon.addEventListener("mouseout", () => {
              tooltipExample.classList.remove("hovered-e");
            });
            antonymIcon.addEventListener("mouseover", () => {
              tooltipAntonym.classList.add("hovered-ne");
            });
            antonymIcon.addEventListener("mouseout", () => {
              tooltipAntonym.classList.remove("hovered-ne");
            });
            synonymIcon.addEventListener("mouseover", () => {
              tooltipSynonym.classList.add("hovered-sy");
            });
            synonymIcon.addEventListener("mouseout", () => {
              tooltipSynonym.classList.remove("hovered-sy");
            });
            webIcon.addEventListener("mouseover", () => {
              tooltipWeb.classList.add("hovered-sy");
            });
            webIcon.addEventListener("mouseout", () => {
              tooltipWeb.classList.remove("hovered-sy");
            });
          }
        }, 20 * index);
      }
      console.log(data);
    });
  // .catch(() => {
  //   getDef.innerHTML = `<i class="fa-solid fa-play" id="play" onclick="getDefinition()"></i>`;
  //   definition.textContent = "We couldn't find the word.";
  //   definition.style.color = "#ae2f2f";
  // });
  word = inputWord.value;
  featuresIcons.innerHTML = "";
  inputWord.value = "";
}

getDefinition();

function playPhonetic() {
  const audio = document.querySelector("#audio");
  fetch(urlMeaning)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const phoneticAudio = data[0].phonetics[0].audio;
      console.log(phoneticAudio);
      if (phoneticAudio === "") {
        features.style.display = "block";
        features.innerHTML = "<p>Phonetic audio unavailable.</p>";
        features.style.color = "#ae2f2f";
        features.style.border = "#ae2f2f";
      } else {
        audio.src = phoneticAudio;
        audio.play();
      }
    });
}

function getExample() {
  fetch(urlMeaning)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const example = data[0].meanings[0].definitions[0].example;
      const word = data[0].word;
      if (example == undefined) {
        features.style.display = "block";
        features.innerHTML =
          "<p>We couldn't find an example for this word.</p>";
        features.style.color = "#ae2f2f";
        features.style.border = "#ae2f2f";
      } else {
        features.style.display = "block";
        const exampleArr = example.split(" ");
        let reg = new RegExp(word, "gi");
        for (let key in exampleArr) {
          if (reg.test(exampleArr[key])) {
            exampleArr[key] = `<span>${exampleArr[key]}</span>`;
          }
        }
        features.innerHTML = `<p id="definition">${exampleArr.join(" ")}</p>`;
        features.style.border = "2px dashed #c97f00";
      }
      console.log(example);
    });
  // .catch(() => {
  //   features.textContent = "We couldn't find the word.";
  // });
}

function getAntonyms() {
  fetch(urlMeaning)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      const antonym = data[0].meanings[0].antonyms;
      console.log(antonym);
      if (antonym.length === 0) {
        features.style.display = "block";
        features.innerHTML = "<p>We couldn't find antonyms for this word.</p>";
        features.style.color = "#ae2f2f";
        features.style.border = "none";
      } else {
        antonym[0] = "• " + antonym[0];
        features.style.display = "block";
        features.innerHTML = `<p id="antonym-list">${antonym.join(
          "<br>• "
        )}</p>`;
        features.style.border = "2px dashed #c97f00";
      }
    });
}

function getSynonyms() {
  fetch(urlMeaning)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const synonym = data[0].meanings[0].synonyms;
      console.log(synonym);
      if (synonym.length === 0) {
        features.style.display = "block";
        features.innerHTML = "<p>We couldn't find synonyms for this word.</p>";
        features.style.color = "#ae2f2f";
        features.style.border = "#ae2f2f";
      } else {
        features.style.display = "block";
        synonym[0] = "• " + synonym[0];
        features.innerHTML = `<p id="synonym-list">${synonym.join(
          "<br>• "
        )}</p>`;
        features.style.border = "2px dashed #c97f00";
      }
    })
    .catch(() => {
      features.innerHTML = "<p>We couldn't find synonyms for this word.</p>";
      features.style.color = "#ae2f2f";
      features.style.border = "#ae2f2f";
    });
}
