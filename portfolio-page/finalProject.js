// Porter Hatch
// Feb 11 2023

const projectList = document.querySelector('#project-list');

function setPicture(photoId, imgSrc) {
    profilePic = document.querySelector(photoId);
    profilePic.setAttribute("src", imgSrc);
    profilePic.width = "300";
    profilePic.height = "375";
};

setPicture("#photo", "IMG_0908.JPG")

function setProject(project, projectElementId) {
    const projectElement = document.querySelector(projectElementId);
    projectElement.textContent = project.name;
    if (project.link !== "") {
        projectElement.href = project.link;
    } 
    else {
        projectElement.style.color = "grey";
    }
};

// Project 1
const project1 = {
    name: "Trivia Game",
    link:  "https://github.com/PortableHatchet/Trivia-Game"
};
setProject(project1, "#project1");
// Project 2
const project2 = {
    name: "CSE 210 Projects",
    link: "https://github.com/PortableHatchet/CSE210-Projects"
};

setProject(project2, "#project2");

//Project 3
const project3 = {
    name: "Portfolio JS Practice",
    link: ""
};
setProject(project3, "#project3");

// Project 4
const project4 = {
    name: "Project 4",
    link: ""
};
setProject(project4, "#project4");

// Project 5
const project5 = {
    name: "Project 5",
    link: ""
};
setProject(project5, "#project5");