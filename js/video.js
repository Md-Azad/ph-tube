// fetch, load, and show categories on html

// create loadCategories funciton

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
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
