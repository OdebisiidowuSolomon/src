const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".info");
const deleteBtn = document.querySelector(".delete");
const updateBtn = document.querySelector(".edit");

const renderDetails = async () => {
  const post = await fetch(`http://localhost:3000/posts/${id}`)
    .then((res) => res.json())
    .then((res) => res);

  const template = `
                  <h3 class="text-muted">${post.title}</h3>
                  <hr>
                  <ul class="list-star">
                    <li>
                      Created On 2019-05-22
                    </li>
                  </ul>
                  <span class="text-dark">
                    <small>
                      ${post.comments} Comments
                    </small>
                  </span>
                  <br>
                  <h5 class="text-muted">Description</h5>
                  <h6 class="card-description text-dark lead">${post.description}</h6>
                  

    `;
  container.innerHTML = template;

  console.log(post);
};
deleteBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const post = await fetch(`http://localhost:3000/posts/${id}`)
    .then((res) => res.json())
    .then((res) => res);

  let res = confirm(
    `${post.title} Will Be Deleted!, this Action is Irreversible!`
  );

  console.log(res);

  if (res == Boolean(1)) {
    return await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    }).then(window.location.replace("../tables/index.html"));
  }
});

updateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.replace(`../forms/update.html?id=${id}`);
});

window.addEventListener("DOMContentLoaded", () => renderDetails());
