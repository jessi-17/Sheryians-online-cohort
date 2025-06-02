const button = document.getElementById("search");

button.addEventListener("click", function () {
  const usercard = document.getElementById("usercard");
  const reposContainer = document.getElementById("repos");
  reposContainer.innerHTML = ""; // clear previous repos
  const username = document.getElementById("github-user").value.trim();
  if (username === "") {
    alert("Please enter a github username");
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("User not Found");
      }
      return response.json();
    })
    .then((data) => {
      usercard.innerHTML = `
            <div class="profile">
              <div class="image">
                <img src="${data.avatar_url}" alt="Profile" />
              </div>
              <div class="username">
                <h2><a href="${data.html_url}" target="_blank">${data.name || data.login}</a></h2>
                <h5>@${data.login}</h5>
                <p>Joined ${new Date(data.created_at).toDateString()}</p>
              </div>
            </div>
            <div class="user-intro">
              <p>${data.bio || "No bio available."}</p>
            </div>
            <div class="user-data">
              <div class="repos"><h2>Repos</h2><p>${data.public_repos}</p></div>
              <div class="followers"><h2>Followers</h2><p>${data.followers}</p></div>
              <div class="following"><h2>Following</h2><p>${data.following}</p></div>
            </div>
            <div class="user-socials">
              <div class="socials Address"><i class="fa-solid fa-location-dot"></i><a href="#">${data.location || "Not Available"}</a></div>
              <div class="socials Website"><i class="fa-solid fa-link"></i><a href="${data.blog}" target="_blank">${data.blog || "Not Available"}</a></div>
              <div class="socials Twitter"><i class="fa-brands fa-twitter"></i><a href="#">${data.twitter_username || "Not Available"}</a></div>
              <div class="socials Work active"><i class="fa-solid fa-building"></i><a href="#">${data.company || "Not Available"}</a></div>
            </div>
      `;

      const streakImg = document.createElement("img");
      streakImg.src = `https://github-readme-streak-stats.herokuapp.com/?user=${data.login}&theme=tokyonight`;
      streakImg.alt = "GitHub Streak";
      streakImg.style.marginTop = "20px";
      streakImg.style.width = "100%";
      console.log(streakImg);
      
      usercard.appendChild(streakImg);

      // Call the repo fetch function
      getRepos(username);
    })
    .catch((error) => {
      document.getElementById("usercard").innerHTML = `<p style="color:red;">${error.message}</p>`;
      document.getElementById("repos").innerHTML = "";
    });
});

function getRepos(username) {
  fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Repos not Found");
      }
      return response.json();
    })
    .then((repos) => {
      const reposContainer = document.getElementById("repos");

      if (repos.length === 0) {
        reposContainer.innerHTML = "<p>No public repositories found.</p>";
        return;
      }

      reposContainer.innerHTML = "<h2>Top Repositories:</h2>";

      repos.slice(0, 4).forEach((repo) => {
        const repoCard = document.createElement("div");
        repoCard.classList.add("repo-card");
        repoCard.innerHTML = `
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p>${repo.description || "No description provided."}</p>
          <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
        `;
        reposContainer.appendChild(repoCard);
      });
    })
    .catch((error) => {
      document.getElementById("repos").innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}

