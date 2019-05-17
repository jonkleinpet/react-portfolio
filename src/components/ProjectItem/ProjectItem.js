import React, { Component } from 'react';
import ProjectContext from '../../context/ProjectContext';

export default class ProjectItem extends Component {
  state = {
    inFocus: false,
    isLoading: null,
    screenWidth: null
  }

  static contextType = ProjectContext;

  enterFocus = () => {
    this.setState({ inFocus: true })
  }

  leaveFocus = () => {
    this.setState({ inFocus: false })
  }

  resize = () => {
    let currentWidth = window.innerWidth;
    if (currentWidth !== this.state.screenWidth) {
      this.setState({ screenWidth: currentWidth });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.resize());
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  projectList = (p) => {
    if (this.state.screenWidth < 700) {
      return (
        <>
        <h3>Made With</h3>
        <ul className='stack-list'>
          { p.madeWith.map((t, i) => (
            <li key={ i }>
              { t }
            </li>
          )) }
          </ul>
        </>
      )
    } else {
      return (
        <>
        <h3>Made With -{ " " }</h3>
        <ul className='stack-list'>
          {p.madeWith.map((t, i) => (
            <li key={i}>
              &nbsp;{t} {i === p.madeWith.length - 1 ? "" : "/"}
            </li>
          ))}
          </ul>
        </>
      );
    }
  }

  render() {
    const { projects } = this.context;
    return (
      <>
        <h1>Projects</h1>
        {projects.map((p, i) => (
          <section className='project-container' key={ i }>
            { <span className="project-link-text">Live Demo</span> }
            <span className="description">
              <h2>{p.title}</h2> - {p.description}
            </span>
            <a href={p.projectLink}>
              <img
                className="project-img"
                src={ p.projectImage }
                alt='project screen shot'
                onMouseEnter={ () => this.enterFocus() }
                onMouseLeave={ () => this.leaveFocus() }
                />
            </a>
            {this.projectList(p)}
            <div>View Code</div>
            <a
              className='code-link'
              href='https://github.com/thinkful-ei-armadillo/alex-jon-quiz'>
              <img
                className='code-icon'
                src={require("../../imgs/seo-web-code-icon.png")}
                alt='code icon'
              />
            </a>
          </section>
        ))}
      </>
    );
  }
}