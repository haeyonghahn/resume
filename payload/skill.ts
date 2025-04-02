import { ISkill } from '../component/skill/ISkill';

const languages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'Java',
      level: undefined,
    },
    {
      title: 'JavaScript',
      level: undefined,
    },
    {
      title: 'HTML/CSS',
      level: undefined,
    },
  ],
};

const frameworkAndLibraryDevelopment: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'Spring',
      level: undefined,
    },
    {
      title: 'React.js',
      level: undefined,
    },
  ],
};

const infrastructureAndDatabases: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'AWS',
      level: undefined,
    },
    {
      title: 'Nginx',
      level: undefined,
    },
    {
      title: 'Redis',
      level: undefined,
    },
    {
      title: 'MongoDB',
      level: undefined,
    },
    {
      title: 'Docker',
      level: undefined,
    },
    {
      title: 'Oracle',
      level: undefined,
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Automation',
  items: [
    {
      title: 'Terraform',
      level: undefined,
    },
    {
      title: 'Github Actions',
      level: undefined,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [languages, frameworkAndLibraryDevelopment, infrastructureAndDatabases, automation],
  tooltip: '',
};

export default skill;
