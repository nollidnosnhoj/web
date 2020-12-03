import { GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import ProjectItem from "../components/Project";
import WorkExperienceItem from "../components/WorkExperience";
import { Education, Project, Skills, WorkExperience } from "../lib/types";
import styles from "../styles/Home.module.css";
import {
  loadEducation,
  loadProjects,
  loadSkills,
  loadWorkExperiences,
} from "../utils/dataLoader";

interface IndexPageProps {
  workExperiences: WorkExperience[];
  projects: Project[];
  skills: Skills;
  education: Education[];
}

const Index: React.FC<IndexPageProps> = ({
  workExperiences,
  projects,
  skills,
  education,
  ...props
}) => {
  const { languages, technologies } = skills;

  return (
    <React.Fragment>
      <Head>
        <title>Randall D. Johnson</title>
      </Head>
      <div>
        <div>
          <h2>Work Experiences</h2>
          {workExperiences.map((exp, idx) => (
            <WorkExperienceItem key={idx} model={exp} />
          ))}
        </div>
        <div>
          <h2>Projects</h2>
          {projects.map((exp, idx) => (
            <ProjectItem key={idx} model={exp} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps<IndexPageProps> = async (
  context
) => {
  const workExperiences = loadWorkExperiences();
  const education = loadEducation();
  const skills = loadSkills();
  const projects = loadProjects();

  return {
    props: {
      workExperiences,
      education,
      skills,
      projects,
    },
  };
};

export default Index;
