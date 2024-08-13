export function About() {}

export const dataState = () => {
  const [data, setData] = useState(defaultData);
  return { data, setData };
};

const defaultJob = [
  {
    id: 0,
    position: "Awesome Job",
    company: "Best Company",
    start: "2020-01",
    finish: "2024-01",
    about: "Job Description",
    box: false,
  },
];
export const jobState = () => {
  const [job, setJob] = useState(defaultJob);
  return {
    job,
    setJob,
  };
};

const defaultEducation = [
  {
    id: 0,
    institution: "Institution Name",
    course: "Name of course",
    start: "2020-01",
    finish: "2024-01",
    about: "course Description",
    box: false,
  },
];
export const educationState = () => {
  const [education, setEducation] = useState(defaultEducation);
  return { education, setEducation };
};

export const miscArray = [
  {
    skills: "React",
    certificates: "Drivers License",
  },
];
