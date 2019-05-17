import React, { Component, createContext } from 'react';

const ProjectContext = createContext({
  projects: [],
});

export default ProjectContext;

export class ProjectProvider extends Component {
  
  makeProjects = () => {
    return [
      {
        title: "Quiz App",
        description: "A chance to test your Sci-Fi television knowledge, with bonus trivia",
        projectLink: "https://thinkful-ei-armadillo.github.io/alex-jon-quiz/",
        projectImage: require("../imgs/quiz-app-screenshot.jpg"),
        madeWith: ["JS", "CSS", "React"],
        codeLink: "https://github.com/thinkful-ei-armadillo/alex-jon-quiz"
      },
      {
        title: "Laurie's blog",
        description: "A Blog website setup with Laurie as the blog owner who can make posts and users who can leave comments",
        projectLink: "https://lauries-blog-app.now.sh/",
        projectImage: require("../imgs/Landing-Page.png"),
        madeWith: ["JS", "CSS", "React", "Node.js", "Express", "Postgres"],
        codeLink: "https://github.com/jonkleinpet/Capstone1-client"
      },
      {
        title: "Spaced Repetition",
        description: "Learn 10 words in french easy!",
        projectLink: "https://spaced-repetition-app.now.sh/",
        projectImage: require("../imgs/portfolio-pic.PNG"),
        madeWith: ["JS", "CSS", "React", "Node.js", "Express", "Postgres"],
        codeLink: "https://github.com/thinkful-ei-armadillo/spaced-repetition-client-jonathan-payman"
      },
      {
        title: "QQueued",
        description: "A queue/ticket system and chatroom for students to get mentor help with issues",
        projectLink: "https://qqueued.now.sh/",
        projectImage: require("../imgs/portfolio-pic2.PNG"),
        madeWith: ["JS", "CSS", "React", "Node.js", "Express", "Postgres", "socket.io", "slack API"],
        codeLink: "https://github.com/thinkful-ei-armadillo/QQueued-client"
      }
    ];
  }

  render() {
    const projects = this.makeProjects();
    const value = {projects};
    return (
      <ProjectContext.Provider value={value}>
        {this.props.children}
      </ProjectContext.Provider>
    )
  }
}