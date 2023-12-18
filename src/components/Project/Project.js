import React, { useState } from "react";
import { Element } from "react-scroll";
import Card from "./Card";
import "./Project.css";
import markdownImg from "../../asset/markdownImg.png";
import brewImg from "../../asset/brewImg.png";
import goImg from "../../asset/goImg.png";
import cookimg1 from '../../asset/cookimg1.jpg'
import ecommerce from '../../asset/ecom.png'
//import todo from '../../asset/todo.png'
import blog from '../../asset/blog.png'

function Project() {
    const [value, setValue] = useState("all");
    let data = [
      {
        key: ["react", "express", "all", "restApi", "mern","node"],
        img: markdownImg,
        title: "react markdown app",
        githubFrontEnd:
          "	https://github.com/Nandhinimuthupandi/REACT_MARKDOWN_VIEWER-frontend",
        githubBackEnd:
          "	https://github.com/Nandhinimuthupandi/REACT_MARKDOWN_VIEWER-backend",
        sourceCode: "https://dapper-caramel-261189.netlify.app",
        shortNote:
        "I built a markdown application which can markdown the given document.",
        longNote: [
          "The frontend is built using **React** with **Bootstrap** for styling. The backend is build with **Node.js** , **Express.js** and used **MongoDB** as database.",
           "I have add **login/logout** feature. ",
          "In my application I have my **home page**, **registration** and **login pages**. On successful login the user can **create their own markdowns on create Markdown page** where it will show the preview as well",
          "On clicking **save** button the **markdown document** will be created.",
          "It will be stored in the **markdown list page** where the user can **edit** and **delete** their markdowns as well. There is a **chart page** to show the chart"
  
        ],
        skills: [
          {
            name: "React",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            name: "Node",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          },
          {
            name: "Express",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          },
          {
            name: "Mongo DB",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
          },
  
          {
            name: "Bootstrap",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          },
          {
            name: "Chart JS",
            link: "https://www.chartjs.org/img/chartjs-logo.svg",
          },
          {
            name: "JWT",
            link: "/static/media/jwt.aceee2f7e220f487a8c6.png",
          },
          
        ],
      },
      {
        key: ["javascript", "all", "mockApi"],
        img: brewImg,
        title: "Open Brewery Directory",
        githubFrontEnd: "https://github.com/Nandhinimuthupandi/webcode_1",
        githubBackEnd: "",
        sourceCode: "https://beamish-daifuku-f99871.netlify.app/",
        shortNote:
        "This is a mock API website, it is used to check different breweries and their details.",
        longNote: [ 
          "This is my first **JavaScript DOM rendering** project. And main feature of the website is the **search option** and **HTML** elements are **rendered only JavaScript DOM**.",
          "The application is made using **HTML** and styled using **CSS** and this website uses **JavaScript** for **dynamic loading**.",
          "I have  used **Open Brewery API ** in **Open Brewery Directory** and this website is used to **check breweries** for **all details**.",
          "This  **website is responsive** for **all screen size**.",
        ],
        skills: [
          {
            name: "HTML5",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            color: "#945915",
          },
          {
            name: "CSS3",
            
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            color: "#0C3A80",
          },
          {
            name: "Javascript",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            color: "#858626",
          },
          {
            name: "Bootstrap",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          }
        ],
      },
      {
        key: ["mockApi", "html", "css", "all", "javascript"],
        img: goImg,
        title: "Go Travel Website",
        githubFrontEnd: "https://github.com/Nandhinimuthupandi/go-travel-project",
        githubBackEnd: "",
        sourceCode: "https://creative-pika-0c628f.netlify.app",
        shortNote:
          "This is the first website that I created . I have made my website more enhanced by applying different stylings.",
        longNote: [
          "This is **my first project**.",
          "The application is made using **HTML** and styled using **CSS**and**BOOTSTRAP** .",
          "This website uses **JavaScript** for **dynamic loading**.",
          "I have used **Bootstrap carousel** in **GO Travel site**.",
          
         
        ],
        skills: [
          {
            name: "HTML5",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            color: "#945915",
          },
          {
            name: "CSS3",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            color: "#0C3A80",
          },
          {
            name: "Javascript",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            color: "#858626",
          },
          {
            name: "Bootstrap",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          },
        ],
      },


      {
        key: ["react", "express", "all", "restApi", "mern","node"],
        img: cookimg1,
        title: "recipe book app",
        githubFrontEnd:
          "https://github.com/Nandhinimuthupandi/Recipe_Book-frontend",
        githubBackEnd:
          "https://github.com/Nandhinimuthupandi/Recipe_Book-backend",
        sourceCode: "https://myrecipebookapp.netlify.app",
        shortNote:
        "I built a recipe book app where you can find recipes.",
        longNote: [
          "The frontend is built using **React** with **Bootstrap** for styling. The backend is build with **Node.js** , **Express.js** and used **MongoDB** as database.",
           "I have add **login/logout** feature. ",
          "In my application I have my **home page**, **registration** and **login pages**. On successful login the user can **create their own recipes on create recipe page** ",
          "On clicking **save** button the **recipe** will be created.",
          "It will be stored in the **Home page** where the user can **save** their favorite recipes as well.",
          "The saved recipes will be shown in **user's profile** as well"
  
        ],
        skills: [
          {
            name: "React",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            name: "Node",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          },
          {
            name: "Express",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          },
          {
            name: "Mongo DB",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
          },
  
          {
            name: "Bootstrap",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          },
          
          {
            name: "JWT",
            link: "/static/media/jwt.aceee2f7e220f487a8c6.png",
          },
          
        ],
      },

      {
        key: ["react", "express", "all", "restApi", "mern","node"],
        img: ecommerce,
        title: "VJ Shopping App",
        githubFrontEnd:
          "https://github.com/Nandhinimuthupandi/ecommerce-frontend",
        githubBackEnd:
          "https://github.com/Nandhinimuthupandi/ecommerce-backend",
        sourceCode: "https://vjshoppingapp.netlify.app/",
        shortNote:
        "I built an ecommerce application where users can find lot of items and buy it.",
        longNote: [
          "The frontend is built using **React** with **Bootstrap**and **ant design** for styling. The backend is build with **Node.js** , **Express.js** and used **MongoDB** as database.",
           "I have add **login/logout** feature. ",
          "In my application I have my **home page**, **registration** and **login pages**. On successful login the user can ** view all products and can add it to cart to make payments** ",
          "Only admins can **create,update and delete** a product or category.",
          "A **search filter** and **filters based on price and category** is implemented."
  
        ],
        skills: [
          {
            name: "React",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            name: "Node",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          },
          {
            name: "Express",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          },
          {
            name: "Mongo DB",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
          },
  
          {
            name: "Bootstrap",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          },
          
          {
            name: "JWT",
            link: "/static/media/jwt.aceee2f7e220f487a8c6.png",
          },
          
        ],
      },

      {
        key: ["react", "express", "all", "restApi", "mern","node"],
        img: blog,
        title: "Blog App",
        githubFrontEnd:
          "https://github.com/Nandhinimuthupandi/blog-app-frontend",
        githubBackEnd:
          "https://github.com/Nandhinimuthupandi/blog-app-backend",
        sourceCode: "https://lets-write-blog.netlify.app/",
        shortNote:
        "I built an blog application where users can create their own blogs and can keep a check on it.",
        longNote: [
          "The frontend is built using **React** with **Bootstrap**and **tailwind css** for styling. The backend is build with **Node.js** , **Express.js** and used **MongoDB** as database.",
           "I have add **login/logout** feature. ",
          "In my application I have my **home page**, **registration** and **login pages**. On successful login the user can **view all blogs and can also create their own blogs** ",
          "There is also a **delete** option to delete the unwanted blogs"
          
  
        ],
        skills: [
          {
            name: "React",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            name: "Node",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          },
          {
            name: "Express",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          },
          {
            name: "Mongo DB",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
          },
  
          {
            name: "Bootstrap",
            link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          },
          
          {
            name: "JWT",
            link: "/static/media/jwt.aceee2f7e220f487a8c6.png",
          },
          
        ],
      },

    ];
  
    let datas = data.filter((item) => item.key.some((items) => items === value));
    return (
      <Element name="Project">
        <div className=" project">
          <h1>
            My Recent <span className="project-highlight">Works</span>
          </h1>
          <div className="row project-container">
            {datas.length > 0 &&
              datas.map((item, index) => {
                return <Card data={item} key={index} />;
              })}
          </div>
        </div>
      </Element>
    );
  }
  
  export default Project;