const container = document.querySelector("tbody");
const searchForm = document.querySelector(".search-form");

async function renderInfos(term) {
  let uri = `http://localhost:3000/posts?`;

  if (term) {
    uri += `&q=${term}`;
  }

  const posts = await fetch(uri)
    .then((res) => res.json())
    .then((res) => res);

  console.log(posts);

  let template = "";
  posts.forEach((post) => {
    template += `
                <tr style='cursor:pointer'>
                        <td>${post.title}</td>
                        <td>${post.comments}</td>
                        <td>
                          ${post.date}
                        </td>
                        <td>${post.description.slice(0, 20).trim()}....</td>
                        <td>
                          <a href="../forms/update.html?id=${
                            post.id
                          }" class="btn btn-inverse-secondary">Edit</a>
                        </td>
                        <td><a class="delete btn btn-inverse-info btn-fw" href="../details/details.html?id=${
                          post.id
                        }">Details</a></td>
                </tr>
        `;
  });
  container.innerHTML = template;
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderInfos(searchForm.term.value.trim());
});

window.addEventListener("DOMContentLoaded", () => renderInfos());
