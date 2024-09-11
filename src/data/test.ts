import { LicenseType } from '../app/enums/licensetype.enum';
import { EditorState } from '../app/store/reducers/editor.reducer';

export const testData: EditorState = {
  title: 'ReadMe Wizard',
  shortDescription: ' Streamline the process of creating a README file for your projects',
  description:
    'Fed up with manually creating README files? Try our web app that simplifies the documentation process for GitHub projects. With our user-friendly platform, you can quickly generate detailed and visually appealing Markdown documentation in just seconds.',
  navigationLinks: true,
  sectionIcons: true,
  backToTop: true,
  installSteps: [
    'Install Node.js v16 or later',
    'Install the required dependencies:',
    '`npm install`',
  ],
  usageSteps: [
    'Open the project directory in your code editor',
    'Run `npm run start` to start the development server',
  ],
  contentTable: true,
  github: {
    username: 'hazeliscoding',
    repo: 'readme-wizard',
    badges: true,
  },
  logoUrl: '../assets/images/icon.png',
  mainImageUrl: '../assets/images/demo.png',
  displayMarkdownResult: false,
  npm: {
    package: 'http-status-utility',
    url: 'https://www.npmjs.com/package/http-status-utility',
    badges: true,
  },
  images: [
    '../assets/images/s_1.png',
    '../assets/images/s_2.png',
    '../assets/images/s_3.png',
    '../assets/images/s_4.png',
  ],
  features: [
    {
      title: 'Template ready',
      description:
        'Provide a clear and concise description of your project, highlight the main features, goals, and benefits of your project',
    },
    {
      title: 'Ease fo use',
      description:
        'Easily generate a well-structured README file for your GitHub project',
    },
    {
      title: 'Preview',
      description:
        'Preview the generated README (light/dark theme) file before committing it to your repository',
    },
  ],
  technologies: [
    {
      name: 'Angular',
      value: 'angular',
      description: 'A front-end web application framework',
      mainColor: '#DD0031',
    },
    {
      name: 'NgRx',
      value: 'ngrx',
      description: 'Angular state management based on Redux',
      mainColor: '#B7116E',
    },
    {
      name: 'Tailwind CSS',
      value: 'tailwindcss',
      description: 'Utility-first CSS framework',
      mainColor: '#38B2AC',
    },
    {
      name: 'TypeScript',
      value: 'typescript',
      description: 'A strict syntactical superset of JavaScript',
      mainColor: '#3178C6',
    },
  ],
  installation: {
    projectName: '',
    packageManager: '',
    dependencies: [],
    devDependencies: [],
    installationSteps: [],
    includeSetup: false,
    setupSteps: [],
    includeUsage: false,
    usageSteps: [],
  },
  configuration: {
    description: 'Default values to configure',
    parameters: [],
  },
  acknowledgments: [
    {
      title: 'ngx-markdown',
      url: 'https://www.npmjs.com/package/ngx-markdown',
      description:
        'Angular markdown component/directive/pipe/service to parse static, dynamic or remote content to HTML with syntax highlight and more',
    },
    {
      title: 'Flowbite',
      url: 'https://flowbite.com/',
      description:
        'Build websites even faster with components on top of Tailwind CSS',
    },
    {
      title: 'PrismJs',
      url: 'https://prismjs.com/',
      description:
        'Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind. It’s used in millions of websites, including some of those you visit daily.',
    },
  ],
  contribution: { add: true, contributionGuidelinesLink: undefined },
  contributors: [
    {
      name: 'Hazel Granados',
      username: 'hazeliscoding',
    },
  ],
  author: {
    name: 'Hazel Granados',
    email: 'hazel.granados@protonmail.com',
    url: 'hazeliscoding.dev ',
    github: 'hazeliscoding',
    likedIn: 'hazelgranados',
  },
  license: { type: LicenseType.MIT, customText: undefined },
  watermark: true,
  generateMarkdown: false,
  generatedMarkdown: '',
};
