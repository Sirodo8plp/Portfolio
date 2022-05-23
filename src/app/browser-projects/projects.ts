export interface IProject {
  name: string;
  description: string;
  githubLink: string;
  tags: Array<string>;
}

export const Projects: Array<IProject> = [
  {
    name: `My Bachelor's Thesis`,
    description: `Non Fungible Tokens (NFTs) are slowly taking over the internet, as more and more people are investing to them. However,
    their usage is not limited to financial purposes. With my application, users can upload their images, convert them to NFTs and 
    create postcards with them. They can share their postcards among their friends while showing their images' authenticity at the
     same time!`,
    githubLink: 'https://github.com/Sirodo8plp/Bachelor_Dissertation_2021_2022',
    tags: [
      'NextJs',
      'Graphql',
      'Scss',
      'Web3',
      'Ethereum',
      'TypeORM',
      'NFTs',
      'Redis',
      'PostgreSQL',
      'Gulp',
      'Metamask',
    ],
  },
  {
    name: 'Erasmus React Application',
    description: `A React application that was developed for an assignment
    during my Erasmus Studies in the University of Murcia. Users can sign in, search for a place,
    search for points of interest near that place and review them.`,
    githubLink: 'https://github.com/Sirodo8plp/Points_Of_Interest',
    tags: ['JWT', 'React', 'Bootstrap', 'Prisma', 'Pagination', 'Debounce'],
  },
  {
    name: 'Find a Freelancer',
    description: `A fullstack application where users can search for freelancers, contact them and
    create contracts for their desired projects. A project's completion depends on both sides of the
     contract as everyone must agree that the project is completed and meets the client's expectations. 
     Users can rate the developer that completed their projects so that other interested clients can filter their 
     results when they are searching for a developer.`,
    githubLink:
      'https://github.com/Sirodo8plp/Softwares-Technology-Semester-Exercise',
    tags: ['MongoDB', 'Node.js', 'Express', 'MVC'],
  },
];
