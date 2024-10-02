// fetch, load, and show categories on html

// create loadCategories funciton

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};

const displayCategories = (data) => {
  console.log(data);
};

loadCategories();
