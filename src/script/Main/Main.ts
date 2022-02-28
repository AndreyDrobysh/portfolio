import BaseComponent from '../components/BaseComponent/BaseComponent';
import ImgComponent from '../components/ImgComponent/ImgComponent';
import LinkComponent from '../components/LinkComponent/LinkComponent';
import Container from '../container/Container';
import './main.css';

const MY_COMMENTS = [
  {
    comment: "I'm a beginner Front End Developer.",
  },
  {
    comment: 'I want to become a good developer, take part in the development of large projects.',
  },
  {
    comment: 'Now I live in Minsk. I enjoy play football and rode a motorcycle.',
  },
];

const SKILLS = [
  {
    skill: 'HTML',
  },
  {
    skill: 'TypeScript',
  },
  {
    skill: 'Git',
  },
  {
    skill: 'CSS',
  },
  {
    skill: 'JavaScript',
  },

];

const PROJECTS_INFO = [
  {
    nameProject: 'Wildlife page',
    aboutProject: 'Made with BEM and CSS Flexbox layout',
    skills: 'HTML, CSS',
    position: 'left',
    backImg: './backProjects/wildlife.png',
    link: 'https://rolling-scopes-school.github.io/andreydrobysh-JSFE2021Q1/wildlife/',
  },
  {
    nameProject: 'Page with game Virtual Piano',
    aboutProject: 'Game Piano. add all JS files',
    skills: 'JS',
    position: 'right',
    backImg: './backProjects/piano.png',
    link: 'https://rolling-scopes-school.github.io/andreydrobysh-JSFE2021Q1/virtual-piano/',
  },
  {
    nameProject: 'Website for a museum',
    aboutProject: 'A website for a museum with a custom video player and an image slider',
    skills: 'HTML, CSS, JS',
    position: 'left',
    backImg: './backProjects/museum.png',
    link: 'https://rolling-scopes-school.github.io/andreydrobysh-JSFE2021Q3/museum/#video',
  },
];

const FACTS = [
  {
    fact: 'completed katas on Codewars',
    num: '112',
  },
  {
    fact: 'commits',
    num: '256',
  },
  {
    fact: 'year',
    num: '21',
  },
  {
    fact: 'Languahes',
    num: '3',
  },
];

const LANGUAGES = [
  {
    lang: 'English',
    levelLang: 'Elementary',
  },
  {
    lang: 'Russian',
    levelLang: 'Native',
  },
  {
    lang: 'Belarusian',
    levelLang: 'Native',
  },
];

const EDUCATION = [
  {
    year: '2021 - now',
    status: 'In progress',
    degree: 'JavaScript/Front-End',
    company: 'Rolling Scopes School',
    linkCompany: 'https://rs.school/',
  },
  {
    year: '2021',
    status: 'Certificate',
    linkStatus: 'https://app.rs.school/certificate/skc72edk',
    degree: 'JavaScript/Front-End PRE-SCHOOL',
    company: 'Rolling Scopes School',
    linkCompany: 'https://rs.school/',
  },
  {
    year: '2018 - 2020',
    status: 'Not finished',
    degree: 'Engineer',
    company: 'Belarusian National Technical University',
    linkCompany: 'https://bntu.by/',
  },
];

export default class Main extends BaseComponent {
  container: Container;

  avatarWrapWrap: BaseComponent<HTMLDivElement>;

  avatarWrap: BaseComponent<HTMLDivElement>;

  avatarPhoto: ImgComponent;

  hello: BaseComponent<HTMLParagraphElement>;

  myName: BaseComponent<HTMLSpanElement>;

  mySkillsSection: BaseComponent<HTMLDivElement>;

  infoAboutMe?: BaseComponent<HTMLParagraphElement>;

  commentsWrap: BaseComponent<HTMLDivElement>;

  comments?: BaseComponent<HTMLSpanElement>;

  skillsHeader: BaseComponent<HTMLParagraphElement>;

  skillsAllWrap: BaseComponent<HTMLDivElement>;

  prevSkill?: BaseComponent<HTMLParagraphElement>;

  skills?: BaseComponent<HTMLParagraphElement>;

  afterSkill?: BaseComponent<HTMLParagraphElement>;

  projectsHeader: BaseComponent<HTMLParagraphElement>;

  allProjectsWrap: BaseComponent<HTMLDivElement>;

  project?: BaseComponent<HTMLDivElement>;

  backProject?: ImgComponent;

  infoAboutProjectWrap?: BaseComponent<HTMLDivElement>;

  usedSkills?: BaseComponent<HTMLParagraphElement>;

  nameProject?: BaseComponent<HTMLParagraphElement>;

  aboutProject?: BaseComponent<HTMLParagraphElement>;

  linkProject?: LinkComponent;

  btnLinkProject?: BaseComponent<HTMLDivElement>;

  factsSection: BaseComponent<HTMLDivElement>;

  factsHeader: BaseComponent<HTMLParagraphElement>;

  allFactsWrap: BaseComponent<HTMLDivElement>;

  numFacts?: BaseComponent<HTMLParagraphElement>;

  facts?: BaseComponent<HTMLParagraphElement>;

  factsWrap?: BaseComponent<HTMLDivElement>;

  pointFact?: BaseComponent<HTMLDivElement>;

  langHeader: BaseComponent<HTMLParagraphElement>;

  allLangWrap?: BaseComponent<HTMLDivElement>;

  langWrap?: BaseComponent<HTMLParagraphElement>;

  lang?: BaseComponent<HTMLParagraphElement>;

  levelLang?: BaseComponent<HTMLParagraphElement>;

  educationHeader?: BaseComponent<HTMLParagraphElement>;

  allEducationWrap?: BaseComponent<HTMLDivElement>;

  educationWrap?: BaseComponent<HTMLParagraphElement>;

  educationYear?: BaseComponent<HTMLParagraphElement>;

  educationStatus?: BaseComponent<HTMLParagraphElement>;

  educationStatusLink?: LinkComponent;

  educationDegree?: BaseComponent<HTMLParagraphElement>;

  educationCompany?: LinkComponent;

  codeHeader: BaseComponent<HTMLParagraphElement>;

  code: ImgComponent;

  constructor() {
    super('div', ['main']);

    const container = new Container();
    this.addChild(container);
    this.container = container;

    const avatarWrapWrap = new BaseComponent<HTMLDivElement>('div', ['avatar-wrap-wrap']);
    container.addChild(avatarWrapWrap);
    this.avatarWrapWrap = avatarWrapWrap;

    const avatarWrap = new BaseComponent<HTMLDivElement>('div', ['avatar-wrap']);
    avatarWrapWrap.addChild(avatarWrap);
    this.avatarWrap = avatarWrap;

    const avatarPhoto = new ImgComponent(['avatar_img'], './myFace.jpg');
    avatarWrap.addChild(avatarPhoto);
    this.avatarPhoto = avatarPhoto;

    const hello = new BaseComponent<HTMLParagraphElement>('p', ['i-am'], "Hi, I'm");
    container.addChild(hello);
    this.hello = hello;

    const myName = new BaseComponent<HTMLSpanElement>('span', ['name'], 'Andrew');
    hello.addChild(myName);
    this.myName = myName;

    const commentsWrap = new BaseComponent<HTMLDivElement>('div', ['comments-wrap']);
    container.addChild(commentsWrap);
    this.commentsWrap = commentsWrap;

    MY_COMMENTS.forEach((item) => {
      const comments = new BaseComponent<HTMLSpanElement>('span', ['comments'], `${item.comment}\n`);
      commentsWrap.addChild(comments);
      this.comments = comments;
    });

    // Skills
    const mySkillsSection = new BaseComponent<HTMLDivElement>('div', ['my-skills-section', 'section']);
    container.addChild(mySkillsSection);
    mySkillsSection.element.id = 'skills_id';
    this.mySkillsSection = mySkillsSection;

    const skillsHeader = new BaseComponent<HTMLParagraphElement>('p', ['section-header'], 'Hard skills');
    mySkillsSection.addChild(skillsHeader);
    this.skillsHeader = skillsHeader;

    const skillsAllWrap = new BaseComponent<HTMLDivElement>('div', ['skills-all-wrap']);
    mySkillsSection.addChild(skillsAllWrap);
    this.skillsAllWrap = skillsAllWrap;

    SKILLS.forEach((item) => {
      const skills = new BaseComponent<HTMLParagraphElement>('p', ['skill'], `${item.skill}`);
      skillsAllWrap.addChild(skills);
      this.skills = skills;
    });

    // Projects
    const projectsHeader = new BaseComponent<HTMLParagraphElement>('p', ['section-header', 'project-head'], 'My projects');
    container.addChild(projectsHeader);
    projectsHeader.element.id = 'projects_id';
    this.projectsHeader = projectsHeader;

    const allProjectsWrap = new BaseComponent<HTMLDivElement>('div', ['all-projects-wrap']);
    container.addChild(allProjectsWrap);
    this.allProjectsWrap = allProjectsWrap;

    PROJECTS_INFO.forEach((item) => {
      const project = new BaseComponent<HTMLDivElement>('div', ['project-wrap']);
      allProjectsWrap.addChild(project);
      this.project = project;

      const backProject = new ImgComponent(['back-project_img'], `${item.backImg}`, 'picture project');
      project.addChild(backProject);
      this.backProject = backProject;

      const infoAboutProjectWrap = new BaseComponent<HTMLDivElement>('div', ['info-about-projects-wrap']);
      project.addChild(infoAboutProjectWrap);
      this.infoAboutProjectWrap = infoAboutProjectWrap;

      const usedSkills = new BaseComponent<HTMLParagraphElement>('p', ['used-skills'], `${item.skills}`);
      infoAboutProjectWrap.addChild(usedSkills);
      this.usedSkills = usedSkills;

      const nameProject = new BaseComponent<HTMLParagraphElement>('p', ['name-project'], `${item.nameProject}`);
      infoAboutProjectWrap.addChild(nameProject);
      this.nameProject = nameProject;

      const aboutProject = new BaseComponent<HTMLParagraphElement>('p', ['about-project'], `${item.aboutProject}`);
      infoAboutProjectWrap.addChild(aboutProject);
      this.aboutProject = aboutProject;

      const linkProject = new LinkComponent(['link-project'], `${item.link}`);
      infoAboutProjectWrap.addChild(linkProject);
      this.linkProject = linkProject;

      const btnLinkProject = new BaseComponent<HTMLDivElement>('div', ['btn-link-project'], 'See project');
      linkProject.addChild(btnLinkProject);
      this.btnLinkProject = btnLinkProject;

      if (item.position === 'left') {
        project.element.classList.add('left-project');
        infoAboutProjectWrap.element.classList.add('left-project-info');
      } else {
        project.element.classList.add('right-project');
        infoAboutProjectWrap.element.classList.add('right-project-info');
        linkProject.element.style.margin = '0';
      }
    });

    // Facts
    const factsSection = new BaseComponent<HTMLDivElement>('div', ['facts-section', 'section']);
    container.addChild(factsSection);
    this.factsSection = factsSection;

    const factsHeader = new BaseComponent<HTMLParagraphElement>('p', ['section-header', 'facts-header'], 'Random Facts');
    factsSection.addChild(factsHeader);
    this.factsHeader = factsHeader;

    const allFactsWrap = new BaseComponent<HTMLDivElement>('div', ['all-facts-wrap']);
    factsSection.addChild(allFactsWrap);
    this.allFactsWrap = allFactsWrap;

    FACTS.forEach((item) => {
      const factsWrap = new BaseComponent<HTMLDivElement>('div', ['facts-wrap']);
      allFactsWrap.addChild(factsWrap);
      this.factsWrap = factsWrap;

      const pointFact = new BaseComponent<HTMLDivElement>('div', ['facts-point']);
      factsWrap.addChild(pointFact);
      this.pointFact = pointFact;

      const numFacts = new BaseComponent<HTMLParagraphElement>('p', ['num-fact'], `${item.num}`);
      factsWrap.addChild(numFacts);
      this.numFacts = numFacts;

      const facts = new BaseComponent<HTMLParagraphElement>('p', ['facts'], `${item.fact}`);
      factsWrap.addChild(facts);
      this.facts = facts;
    });

    // Languages
    const langHeader = new BaseComponent<HTMLParagraphElement>('p', ['section-header', 'lang-head'], 'Languages');
    container.addChild(langHeader);
    langHeader.element.id = 'languages_id';
    this.langHeader = langHeader;

    const allLangWrap = new BaseComponent<HTMLDivElement>('div', ['all-lang-wrap']);
    container.addChild(allLangWrap);
    this.allLangWrap = allLangWrap;

    LANGUAGES.forEach((item) => {
      const langWrap = new BaseComponent<HTMLDivElement>('div', ['lang-wrap']);
      allLangWrap.addChild(langWrap);
      this.langWrap = langWrap;

      const pointFact = new BaseComponent<HTMLDivElement>('div', ['facts-point']);
      langWrap.addChild(pointFact);
      this.pointFact = pointFact;

      const lang = new BaseComponent<HTMLParagraphElement>('p', ['num-lang'], `${item.lang}`);
      langWrap.addChild(lang);
      this.lang = lang;

      const levelLang = new BaseComponent<HTMLParagraphElement>('p', ['level-lang'], `${item.levelLang}`);
      langWrap.addChild(levelLang);
      this.levelLang = levelLang;
    });

    // Education & courses
    const educationHeader = new BaseComponent<HTMLParagraphElement>('p', ['section-header', 'education-head'], 'Education and courses');
    container.addChild(educationHeader);
    educationHeader.element.id = 'education_id';
    this.educationHeader = educationHeader;

    const allEducationWrap = new BaseComponent<HTMLDivElement>('div', ['all-education-wrap']);
    container.addChild(allEducationWrap);
    this.allEducationWrap = allEducationWrap;

    EDUCATION.forEach((item) => {
      const educationWrap = new BaseComponent<HTMLDivElement>('div', ['education-wrap']);
      allEducationWrap.addChild(educationWrap);
      this.educationWrap = educationWrap;

      const educationYear = new BaseComponent<HTMLParagraphElement>('p', ['education-year'], `${item.year}`);
      educationWrap.addChild(educationYear);
      this.educationYear = educationYear;

      if (!item.linkStatus) {
        const educationStatus = new BaseComponent<HTMLParagraphElement>('p', ['education-status'], `${item.status}`);
        educationWrap.addChild(educationStatus);
        this.educationStatus = educationStatus;
      } else {
        const educationStatusLink = new LinkComponent(['education-status'], `${item.linkStatus}`, `${item.status}`);
        educationWrap.addChild(educationStatusLink);
        this.educationStatusLink = educationStatusLink;
      }

      const educationDegree = new BaseComponent<HTMLParagraphElement>('p', ['education-degree'], `${item.degree}`);
      educationWrap.addChild(educationDegree);
      this.educationDegree = educationDegree;

      const educationCompany = new LinkComponent(['education-company'], `${item.linkCompany}`, `${item.company}`);
      educationWrap.addChild(educationCompany);
      this.educationCompany = educationCompany;
    });

    // Code
    const codeHeader = new BaseComponent<HTMLParagraphElement>('p', ['section-header', 'code-head'], 'Code Examples');
    container.addChild(codeHeader);
    codeHeader.element.id = 'code_id';
    this.codeHeader = codeHeader;

    const code = new ImgComponent(['code_img'], './code.png', 'code');
    container.addChild(code);
    this.code = code;
  }
}
