// //const api_url = "https://dev.to/api/articles";
// const api_url = "https://dev.to/api/articles?username=jacobfromm";

// export default async function getArticle() {
//   const response = await fetch(api_url);
//   const data = await response.json();

//   const title = data[0].title;
//   const link = data[0].url;
//   const profilePic = data[0].user.profile_image;
//   const tag = data[0].tag_list;
//   const name = data[0].user.username;

//   document.getElementById("article_title").textContent = title;
//   document.getElementById("devArticle").href = link;
//   document.getElementById("profile_image").src = profilePic;
//   document.getElementById("tags").textContent = tag.map(i => "#" + i);
//   document.getElementById("username").textContent = "@" + name;

//   //For mulitple articles that you want to display
//   function displayMultipleArticles() {
//     for (let i = 1; i < 4; i++) {
//       let element = document.createElement("div"); //container
//       element.className = "devArticle";

//       let articleLink = document.createElement("a"); //link
//       articleLink.id = "devArticle";
//       articleLink.target = "_blank";
//       articleLink.href = data[i].url;

//       let theTitle = document.createElement("h1"); //title
//       theTitle.id = "article_title";
//       theTitle.textContent = data[i].title;

//       let infoArt = document.createElement("div"); //info container
//       infoArt.className = "article-info";

//       let emptyDiv = document.createElement("div"); //pfp container

//       let theProfileImage = document.createElement("img"); //pfp
//       theProfileImage.style.width = "50px";
//       theProfileImage.id = "profile_image";
//       theProfileImage.src = data[i].user.profile_image;

//       let anotherEmptyDiv = document.createElement("div"); //tags container

//       let tagsInArt = document.createElement("p"); //tag
//       tagsInArt.id = "tags";
//       let realtags = data[i].tag_list;
//       tagsInArt.textContent = realtags.map(i => "#" + i);

//       let yourUsername = document.createElement("p"); //username
//       yourUsername.id = "username";
//       yourUsername.textContent = "@" + data[i].user.username;

//       element.appendChild(articleLink);
//       articleLink.appendChild(theTitle);
//       articleLink.appendChild(infoArt);
//       infoArt.appendChild(emptyDiv);
//       emptyDiv.appendChild(theProfileImage);
//       infoArt.appendChild(anotherEmptyDiv);
//       anotherEmptyDiv.appendChild(tagsInArt);
//       anotherEmptyDiv.appendChild(yourUsername);
//       document.getElementById("footer-section").appendChild(element);
//     }
//   }

//   displayMultipleArticles();
// }
// getArticle();
