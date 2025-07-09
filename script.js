document.addEventListener("DOMContentLoaded", () => {
  const boxItems = document.querySelectorAll(".box-item");
  const showCategoriesUl = document.querySelector(".show-categories");
  const countCategorySpan = document.querySelector(".count-category");

  const NO_CATEGORY_MESSAGE = "هیچ دسته بندی انتخاب نشده";

  const updateCategoriesAndCount = () => {
    let selectedCategories = [];
    boxItems.forEach((item) => {
      if (item.classList.contains("active")) {
        const categorySpan = item.querySelector(".span-wrapper span");
        if (categorySpan) {
          selectedCategories.push(categorySpan.textContent);
        }
      }
    });

    showCategoriesUl.innerHTML = "";

    if (selectedCategories.length > 0) {
      selectedCategories.forEach((category) => {
        const li = document.createElement("li");
        li.textContent = category;
        showCategoriesUl.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.textContent = NO_CATEGORY_MESSAGE;
      showCategoriesUl.appendChild(li);
    }

    countCategorySpan.textContent = selectedCategories.length;
  };

  boxItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");

      updateCategoriesAndCount();
    });
  });

  updateCategoriesAndCount();
});
