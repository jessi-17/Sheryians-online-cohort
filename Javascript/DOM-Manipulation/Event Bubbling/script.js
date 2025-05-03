let arr = [
  {
    username: "Brownie",
    nature:"hyper active",
    job: "sleeping",
    image:
      "https://i.pinimg.com/736x/43/c1/2b/43c12b0f508835b766c0c3860cf3ece6.jpg",
  },
  {
    username: "Bruzo",
    nature:"clumsy",
    job: "evening walk",
    image:
      "https://i.pinimg.com/736x/2e/2e/9e/2e2e9e96af0ee4cbfbfcb42a758fb4a2.jpg",
  },
  {
    username: "Pippo",
    age:"calm",
    job: "breaking everything",
    image:
      "https://i.pinimg.com/736x/e1/aa/1c/e1aa1c73799e3918b507b3fa4a64242a.jpg",
  },
];

let sum = " ";
// let agg = "";
arr.forEach(function (x) {
  console.log(x.nature);
  sum =
    sum +
    `<div class="card">
    <img src=${x.image} alt="">
    <div class="disc">
    <h3>${x.username}</h3>
    <h2>${x.nature}</h2>
    <p>${x.job}</p>
    </div>
    </div>`;
});

var body = document.querySelector("body");
body.innerHTML = sum;

console.log(sum);
