class Projects {
  projectName: String;
  descriptionProject: String;
  pathImage: React.ImgHTMLAttributes<HTMLImageElement>;
  constructor(
    projectName: String,
    descriptionProject: String,
    pathImage: React.ImgHTMLAttributes<HTMLImageElement>
  ) {
    this.projectName = projectName;
    this.descriptionProject = descriptionProject;
    this.pathImage = pathImage;
  }
}

export default Projects;
