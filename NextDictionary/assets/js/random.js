// let title = document.querySelector(".title");
// let definition = document.getElementById("definition");
// let featuresIcons = document.querySelector(".features-icons");


// let randomIndex = Math.floor(Math.random() * randomWords.length);
// let randomWord = randomWords[randomIndex];

// let url;

// function random() {
//   url = `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`;
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const definition = data[0].meanings[0].definitions[0].definition;
//       const example = data[0].meanings[0].definitions[0].example;
//       const phonetic = data[0].phonetic;
//       word = data[0].word;
//       title.innerHTML = `<h1 class="word-title random-title">${word}</h1>
//         <span id="span-phonetic">${phonetic}<i class="fa-solid fa-volume-high" onclick="playPhoneticRandom()" id="play-icon"></i></span
//         >`;
//       definition.innerHTML = definition;
//     });
// }

// random();

// function playPhoneticRandom() {
//   const audio = document.querySelector("#audio");
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const phoneticAudio = data[0].phonetics[0].audio;
//       console.log(phoneticAudio);
//       if (phoneticAudio === "") {
//         features.style.display = "block";
//         features.innerHTML = "<p>Phonetic audio unavailable.</p>";
//         features.style.color = "#ae2f2f";
//         features.style.border = "#ae2f2f";
//       } else {
//         audio.src = phoneticAudio;
//         audio.play();
//       }
//     });
// }

