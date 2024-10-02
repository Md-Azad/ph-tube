// fetch, load, and show categories on html

// create loadCategories funciton

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((err) => console.log(err));
};

const demo = {
  category_id: "1001",
  video_id: "aaah",
  thumbnail: "https://i.ibb.co/hY496Db/coloer-of-the-wind.jpg",
  title: "Colors of the Wind",
  authors: [
    {
      profile_picture: "https://i.ibb.co/6r4cx4P/ethen-clack.png",
      profile_name: "Ethan Clark",
      verified: true,
    },
  ],
  others: {
    views: "233K",
    posted_date: "16090",
  },
  description:
    "Ethan Clark's 'Colors of the Wind' is a vibrant musical exploration that captivates listeners with its rich, expressive melodies and uplifting rhythm. With 233K views, this song is a celebration of nature's beauty and human connection, offering a soothing and enriching experience for fans of heartfelt, nature-inspired music.",
};

const displayVideos = (movies) => {
  const videosContainer = document.getElementById("videos");

  movies.forEach((movie) => {
    console.log(movie.thumbnail);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
         <figure class=" w-[300px] h-[200px] relative">
            <img class="w-full h-full object-cover"
            src=${movie?.thumbnail};
            alt="Shoes" />
            <span class="absolute bg-black text-white bottom-2 right-2">${
              movie.others.posted_date
            } </span>
        </figure>
        <div class="px-0 py-4 flex items-center gap-2">
            <div>
                <img class="w-10 h-10 rounded-full object-cover" src=${
                  movie.authors[0].profile_picture
                }>
            </div>
           
            <div>
                <h2 class="font-bold">${movie.title}</h2>
                <div class="flex items-center gap-2">
                    <h2>${movie.authors[0].profile_name}</h2>
                    ${
                      movie.authors[0].verified === true
                        ? '<img class="w-4" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png"/>'
                        : ""
                    }

                    
                </div>
                <p>${movie.others.views} views</p>
            </div>
        </div>
        
        
        `;

    videosContainer.appendChild(card);
  });
};

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories");

  categories.forEach((element) => {
    const btnElement = document.createElement("button");
    btnElement.classList = "btn";
    btnElement.innerText = element.category;
    categoriesContainer.append(btnElement);
  });
  //   console.log(data);
};

loadCategories();
loadVideos();
