const id = new URLSearchParams(window.location.search).get("id");

const form = document.querySelector(".product-form");
const title = document.querySelector("#title");
const comment = document.querySelector("#comment");
const date = document.querySelector("#date");
const description = document.querySelector("#description");

const updatePost = async (e) => {
  e.preventDefault();
  const res = await fetch(`http://localhost:3000/posts/${id}`)
    .then((res) => res.json())
    .then((res) => res);

  console.log(res);

  const {
    title: restitle,
    comments: rescomments,
    date: resdate,
    description: resdescription,
  } = res;

  title.value = restitle;
  comment.value = rescomments;
  date.value = resdate;
  description.value = resdescription;

  // console.log(rescomments, resdate, resdescription);
};

console.log(form);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: form.title.value,
      comments: form.comment.value,
      date: form.date.value,
      description: form.description.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log("form.title", form.title.value);
  window.location.replace("../tables/index.html");
});

window.addEventListener("DOMContentLoaded", updatePost);
