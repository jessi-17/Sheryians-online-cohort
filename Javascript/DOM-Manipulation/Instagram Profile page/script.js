let arr = [
  {
    img_link1:
      "https://i.pinimg.com/736x/b9/73/74/b97374bfdcf71dd819ad2d53293da861.jpg",
  },
  {
    img_link1:
      "https://i.pinimg.com/736x/b9/73/74/b97374bfdcf71dd819ad2d53293da861.jpg",
  },
  {
    img_link1:
      "https://i.pinimg.com/736x/b9/73/74/b97374bfdcf71dd819ad2d53293da861.jpg",
  },
  {
    img_link1:
      "https://i.pinimg.com/736x/b9/73/74/b97374bfdcf71dd819ad2d53293da861.jpg",
  },
  {
    img_link1:
      "https://i.pinimg.com/736x/b9/73/74/b97374bfdcf71dd819ad2d53293da861.jpg",
  },
  {
    img_link1:
      "https://i.pinimg.com/736x/b9/73/74/b97374bfdcf71dd819ad2d53293da861.jpg",
  },
  {
    img_link1:
      "https://i.pinimg.com/736x/b9/73/74/b97374bfdcf71dd819ad2d53293da861.jpg",
  },
  {
    img_link1:
      "https://i.pinimg.com/736x/b9/73/74/b97374bfdcf71dd819ad2d53293da861.jpg",
  },
  {
    img_link1:
      "https://i.pinimg.com/736x/b9/73/74/b97374bfdcf71dd819ad2d53293da861.jpg",
  }
];

const  post_container =document.getElementById('post-container');
arr.forEach(function (x) {
    const post = document.createElement('div');
    post.className = "post";
    
    const img = document.createElement('img');
    img.src =`${x.img_link1}`;
    post.appendChild(img);
    post_container.appendChild(post);
});

const arr1 = [
    { img1: "https://i.pinimg.com/736x/e1/aa/1c/e1aa1c73799e3918b507b3fa4a64242a.jpg" },
    { img1: "https://i.pinimg.com/736x/e1/aa/1c/e1aa1c73799e3918b507b3fa4a64242a.jpg" },
    { img1: "https://i.pinimg.com/736x/e1/aa/1c/e1aa1c73799e3918b507b3fa4a64242a.jpg" },
    { img1: "https://i.pinimg.com/736x/e1/aa/1c/e1aa1c73799e3918b507b3fa4a64242a.jpg" },
    { img1: "https://i.pinimg.com/736x/e1/aa/1c/e1aa1c73799e3918b507b3fa4a64242a.jpg" },
    { img1: "https://i.pinimg.com/736x/e1/aa/1c/e1aa1c73799e3918b507b3fa4a64242a.jpg" },
  ];

  const container = document.getElementById("highlights");
  
  arr1.forEach((x) => {
      const wrapper = document.createElement("div");
      wrapper.className = "wrapper";
      
      const circle = document.createElement("div");
      circle.className = "circle";
      
      const img = document.createElement("img");
      img.src = x.img1;
      
      circle.appendChild(img);
      wrapper.appendChild(circle);
      container.appendChild(wrapper);
    });
    
    post_container.style.display="none";
    container.style.display = "none";
    
const followers = document.getElementById('followers');
const follow = document.getElementById('follow');
const nopostyet = document.getElementById('nopostyet');
const loading = document.getElementById('loading');
let isFollowing = false;

follow.addEventListener('click', function () {
    let currentFollowers = parseInt(followers.innerText);
    if (!isFollowing) {
        isFollowing = true;
        follow.innerHTML = "Unfollow";
        nopostyet.setAttribute("class", "change");
        loading.innerHTML = "loading......";
        loading.style.display = "block";
        
        setTimeout(() => {
            loading.style.display = "none";
            post_container.style.display = "flex";
            container.style.display = "flex";
            followers.innerHTML = currentFollowers + 1; 
        }, 2000);
    } else {
        isFollowing = false;
        follow.innerHTML = "Follow";
        post_container.style.display = "none";
        container.style.display = "none";
        nopostyet.style.display = "flex";
        loading.style.display = "none";
        followers.innerHTML = currentFollowers - 1; 
    }
});
