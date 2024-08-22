// Task 1: Change the color when you click the button

// let tags = document.querySelectorAll('.color');
// let button = document.querySelector('#button');

// function randomColor() {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// button.onclick = function() {
//     for(let div of tags) {
//         div.style.backgroundColor = randomColor();
//     }
// }



// Task 2: Random image display

// const images = [
//     "https://example.com/image1.jpg",
//     "https://example.com/image2.jpg",
//     "https://example.com/image3.jpg"
// ]

// function getRandomImage() {
//     let randomIndex = Math.floor(Math.random() * images.length);
//     return images[randomIndex];
// }

// let imageElement = document.getElementById('#randomImage');
// let button = document.getElementById('#changeButton');

// button.addEventListener("click", () => {
//     imageElement.src = getRandomImage();
// })



// Task 3: A random sound effect is played when the user clicks the button

// const sounds = [
//     "https://example.com/sound1.mp3",
//     "https://example.com/sound2.mp3",
//     "https://example.com/sound3.mp3"
// ]

// function getRandomSound() {
//     let randomIndex = Math.floor(Math.random() * sounds.length);
//     return sounds[randomIndex];
// }

// let button = document.getElementById("soundButton");

// button.addEventListener("click", () => {
//     let audio = new Audio(getRandomSound());
//     audio.play();
// })



// Task 4: Random number between 1-100

// document.getElementById("number").innerHTML = Math.floor(Math.random() * 100) + 1;
// let button = document.getElementById("generateButton");

// button.addEventListener("click", () => {
//     let randomNumber = Math.floor(Math.random() * 100) + 1;
//     document.getElementById("number").innerHTML = randomNumber;
// })



// Task 5: Time

// function time() {
//     var now = new Date();
//     var dateTime = now.toLocaleeString();

//     document.getElementById("time").innerHTML = dateTime;
// }