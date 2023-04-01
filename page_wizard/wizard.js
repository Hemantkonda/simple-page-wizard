// Get all the pages and buttons
const pages = document.querySelectorAll(".page");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");
const submitBtn = document.querySelectorAll("#submit");

// Hide all pages except the first one
for (let i = 1; i < pages.length; i++) {
  pages[i].style.display = "none";
}

// Set the current page to the first page
let currentPage = 0;

// Update the progress bar
function updateProgress() {
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = (currentPage + 1) / pages.length * 100 + "%";
}

// Go to the next page
function nextPage() {
  // Hide the current page
  pages[currentPage].style.display = "none";
  // Show the next page
  currentPage++;
  pages[currentPage].style.display = "block";
  // Update the progress bar
  updateProgress();
}

// Go to the previous page
function prevPage() {
  // Hide the current page
  pages[currentPage].style.display = "none";
  // Show the previous page
  currentPage--;
  pages[currentPage].style.display = "block";
  // Update the progress bar
  updateProgress();
}

// Event listeners for the next and previous buttons
for (let i = 0; i < nextBtns.length; i++) {
  nextBtns[i].addEventListener("click", nextPage);
}
for (let i = 0; i < prevBtns.length; i++) {
  prevBtns[i].addEventListener("click", prevPage);
}

// Event listener for the submit button
submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  // Get all the form data
  const formData = new FormData();
  for (let i = 0; i < pages.length; i++) {
    const inputs = pages[i].querySelectorAll("input, select");
    for (let j = 0; j < inputs.length; j++) {
      formData.append(inputs[j].name, inputs[j].value);
    }
  }
  // Do something with the form data, e.g. submit it to a server
  // console.log(formData);
});


