const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/MohamedDahir100/Portfolio.git";
const token = ""; // Replace with your GitHub token
// const token = process.env.TOKEN

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
    user: {
      name: "Mohamed Dahir",
      email: "mohamed.dahir561@gmail.com",
    },

    token: token, // Provide your GitHub token here
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
