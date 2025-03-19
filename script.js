// script.js  

document.addEventListener("DOMContentLoaded", function () {  
    const aboutTextElement = document.getElementById("about-text");  
    const changeAboutButton = document.getElementById("change-about-button");  
    const learnMoreButton = document.getElementById("learn-more-button");  
    const projectList = document.getElementById("project-list");  
    const addProjectButton = document.getElementById("add-project-button");  
    const removeProjectButton = document.getElementById("remove-project-button");  

    // Array of descriptions  
    const aboutMeDescriptions = [  
        "I am a passionate web developer with a strong understanding of HTML, CSS, and JavaScript. My journey began with an interest in technology and has evolved into a career where I create dynamic and user-friendly web applications. I love solving problems and continuously improving my skills.",  
        "As a web developer, I focus on building responsive websites that provide an excellent user experience. I enjoy working with new technologies and always strive to enhance my knowledge through practical projects.",  
        "I have experience in front-end development and enjoy translating design concepts into functional websites. I believe in writing clean, maintainable code and am excited about collaborating with others on new projects."  
    ];  

    let currentDescriptionIndex = 0;  

    // Change text content dynamically and Loop through the descriptions  
    changeAboutButton.addEventListener("click", () => {  
        aboutTextElement.textContent = aboutMeDescriptions[currentDescriptionIndex];  
        currentDescriptionIndex = (currentDescriptionIndex + 1) % aboutMeDescriptions.length;
    });  

    // Dialogue Box when "Learn More" is clicked  
    learnMoreButton.addEventListener("click", () => {  
        alert("I have worked on various projects including web applications, responsive designs, and interactive features. My goal is to keep learning and improving.");  
    });  

    // Add new project dynamically  
    addProjectButton.addEventListener("click", () => {  
        const newProject = document.createElement("p");  
        newProject.textContent = "New Project: AI-powered Agricultural app.";  
        projectList.appendChild(newProject);  
        
        // If it's the first project added, remove "No projects yet."  
        if (projectList.childElementCount === 1) {  
            projectList.innerHTML = '';
        }  
    });  

    // Remove the last project added  
    removeProjectButton.addEventListener("click", () => {  
        const projects = projectList.getElementsByTagName("p");  
        if (projects.length > 0) {  
            projectList.removeChild(projects[projects.length - 1]);  
        } else {  
            alert("No projects to remove.");  
        }  
    });  
});  
