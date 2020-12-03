export type WorkExperience = {
    company: string,
    startedDate: string,
    endedDate: string,
    position: string,
    roles: string[]
}

export type Education = {
    name: string,
    location: string,
    degree: string,
    graduation_date: string
}

export type Project = {
    name: string,
    github: string,
    demo: string,
    isWorkInProgress: boolean,
    description: string,
    tech_stack: string[]
}

export type Skills = {
    languages: string[],
    technologies: string[]
}