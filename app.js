// Your Javascript goes in this file.
// It is attached to index.html via the <script> tag at the end of body.

// create dog card component
function dogCard(imageUrl, titleText) {
  const card = document.createElement("div");
  card.classList.add("dog-card");

  const image = document.createElement("img");
  image.classList.add("dog-image");
  image.src = imageUrl;
  card.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = titleText;
  card.appendChild(title);

  card.addEventListener("click", event => {
    event.currentTarget.classList.toggle("selected");
  });

  return card;
}

// const dog1 = dogCard(
//   "https://images.dog.ceo/breeds/husky/20180924_193829.jpg",
//   "Breed: Husky"
// );
// const dog2 = dogCard(
//   "https://images.dog.ceo/breeds/husky/n02110185_1066.jpg",
//   "Breed: Husky"
// );
// const dog3 = dogCard(
//   "https://images.dog.ceo/breeds/husky/n02110185_2736.jpg",
//   "Breed: Husky"
// );

const container = document.querySelector(".dogs");
// container.appendChild(dog1);
// container.appendChild(dog2);
// container.appendChild(dog3);

const getButton = document.querySelector("#getdogs");

// AJAX request
getButton.addEventListener("click", () => {
  axios
    .get("https://dog.ceo/api/breed/husky/images/random/12")
    .then(response => {
      // network request finished
      response.data.message.forEach(item => {
        const DogCard = dogCard(item, "Breed: Husky");
        container.appendChild(DogCard);
      });
    })
    .catch(error => {
      console.log("Network request was unsuccessful");
      console.log(error);
    });
});
