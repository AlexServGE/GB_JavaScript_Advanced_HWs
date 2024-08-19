const prodNameInput = document.querySelector("#prod-name");
const prodReviewInput = document.querySelector("#prod-review-text");
const addBtn = document.querySelector(".add-button");

function createIdGenerator() {
  let idNumber = 0;
  return function () {
    idNumber += 1;
    return idNumber;
  };
}

const reviewId = createIdGenerator();
const reviewsIds = [];

function addReview(prodName, review) {
  const newId = reviewId();
  reviewsIds.push(newId);
  localStorage.setItem(
    `${newId}`,
    `product name: ${prodName}, review: ${review}`
  );
}

addBtn.addEventListener("click", () => {
  addReview(prodNameInput.value, prodReviewInput.value);
  prodNameInput.value = "";
  prodReviewInput.value = "";
});


