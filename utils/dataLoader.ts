import workExperiences from '../data/resume/work_experiences.json'
import skills from '../data/resume/skills.json'
import education from '../data/resume/education.json'
import projects from '../data/resume/projects.json'
import { Education, Project, Skills, WorkExperience } from '../lib/types';

export const loadWorkExperiences = () => <WorkExperience[]>workExperiences
export const loadSkills = () => <Skills>skills;
export const loadEducation = () => <Education[]>education;
export const loadProjects = () => <Project[]>projects;
