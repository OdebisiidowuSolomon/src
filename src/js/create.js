const form = document.querySelector(".product-form");
const uri = "http://localhost:3000/posts";

const createInfo = async (e) => {
  e.preventDefault();

  const doc = {
    title: form.title.value,
    comments: form.comment.value,
    date: form.date.value,
    description: form.description.value,
  };

  await fetch(uri, {
    method: "POST",
    body: JSON.stringify(doc),
    headers: { "Content-Type": "application/json" },
  }).then(() => window.location.replace("../tables/index.html"));
};

form.addEventListener("submit", createInfo);
