const form = document.querySelector(".form");
let features = document.querySelector(".features-list");
let urlMeaning;
let isFT = true;
let inputWord = document.getElementById("word");
let definition = document.getElementById("definition");
let getDef = document.querySelector(".getDef");
let featuresIcons = document.querySelector(".features-icons");
let tooltips = document.querySelector(".tooltips");
let title = document.querySelector(".title");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

async function getDefinition() {
  definition.innerHTML = "";
  title.innerHTML = "";
  features.style.display = "none";
  definition.style.color = "";
  // title.innerHTML = ""
  // definition.innerHTML = ""
  // tooltips.innerHTML = ""
  // getDef.innerHTML = ""
  try {
    if (isFT) {
      urlMeaning = `https://api.dictionaryapi.dev/api/v2/entries/en/dictionary`;
      isFT = false;
    } else {
      urlMeaning = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord.value}`;
    }
    const response = await fetch(urlMeaning);
    const data = await response.json();
    getDef.innerHTML = `<i class="fa-solid fa-pause pause-class"></i>`;
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
                <div class="tooltip-example tts">Example</div>
                <div class="tooltip-antonym tts">Antonyms</div>
                <div class="tooltip-synonym tts">Synonyms</div>
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
      }, 15 * index);
    }
    console.log(data);
  } catch (error) {
    if (inputWord.value !== "") {
      getDef.innerHTML = `<i class="fa-solid fa-play" id="play" onclick="getDefinition()"></i>`;
      definition.textContent = `The word "${inputWord.value}" was not found`;
      definition.style.color = "#ae2f2f";
    } else {
      getDef.innerHTML = `<i class="fa-solid fa-play" id="play" onclick="getDefinition()"></i>`;
      definition.textContent = `Type a valid word`;
      definition.style.color = "#ae2f2f";
    }
  }
  featuresIcons.innerHTML = "";
  inputWord.value = "";
}

getDefinition();

async function playPhonetic() {
  try {
    const response = await fetch(urlMeaning);
    const data = await response.json();
    const audio = document.querySelector("#audio");
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
  } catch {
    features.style.display = "block";
    features.innerHTML = "<p>Phonetic audio unavailable.</p>";
    features.style.color = "#ae2f2f";
    features.style.border = "#ae2f2f";
  }
}

async function getExample() {
  const response = await fetch(urlMeaning);
  const data = await response.json();
  const example = data[0].meanings[0].definitions[0].example;
  const word = data[0].word;
  if (example == undefined) {
    features.style.display = "block";
    features.innerHTML = "<p>We couldn't find an example for this word.</p>";
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
}

async function getAntonyms() {
  const response = await fetch(urlMeaning);
  const data = await response.json();
  console.log(data);
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
    features.innerHTML = `<p id="antonym-list">${antonym.join("<br>• ")}</p>`;
    features.style.border = "2px dashed #c97f00";
  }
}

async function getSynonyms() {
  const response = await fetch(urlMeaning);
  const data = await response.json();
  console.log(data);
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
    features.innerHTML = `<p id="synonym-list">${synonym.join("<br>• ")}</p>`;
    features.style.border = "2px dashed #c97f00";
  }
}
