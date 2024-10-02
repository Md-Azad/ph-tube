const getTime = (seconds) => {
  const days = Math.floor(seconds / (24 * 3600)); // Calculate days
  seconds %= 24 * 3600; // Remaining seconds after calculating days

  const hours = Math.floor(seconds / 3600); // Calculate hours
  seconds %= 3600; // Remaining seconds after calculating hours

  const minutes = Math.floor(seconds / 60); // Calculate minutes
  seconds %= 60; // Remaining seconds are the leftover seconds

  return `${days < 1 ? "" : days + "d"} ${hours}h ${minutes} ago`;
};

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

const categoryData = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayVideos(data.category))
    .catch((err) => console.log(err));
};

const displayVideos = (movies) => {
  const videosContainer = document.getElementById("videos");
  videosContainer.innerHTML = "";

  if (movies.length === 0) {
    videosContainer.classList.remove("grid");
    videosContainer.innerHTML = `
    <div class=" flex flex-col justify-center items-center py-4">
    <img src="assets/Icon.png"/>
    <h2 class="font-bold text-3xl">No Content Found</h2>
    </div>
    
    
    `;
  } else {
    videosContainer.classList.add("grid");
  }

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
         <figure class=" w-[300px] h-[200px] relative">
            <img class="w-full h-full object-cover"
            src=${movie?.thumbnail};
            alt="Shoes" />

            ${
              movie.others.posted_date?.length === 0
                ? ""
                : `<span class="absolute bg-black text-white bottom-2 right-2">
                  ${getTime(movie.others.posted_date)}
                </span>`
            }
            
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
    btnElement.onclick = () => categoryData(element.category_id);
    btnElement.innerText = element.category;
    categoriesContainer.append(btnElement);
  });
};

loadCategories();
loadVideos();
