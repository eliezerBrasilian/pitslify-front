import { Nicho } from "../enums/Nicho";
import { ProjectType } from "../enums/ProjectType";

export interface ProjectDto {
  id: number;
  type: ProjectType;
  title: string;
  description: string;
  githubLink: string;
  nicho: Nicho;
  testLink: string;
  images: string[];
}
