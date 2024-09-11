import { LicenseType } from '../app/enums/licensetype.enum';
import { EditorState } from '../app/store/reducers/editor.reducer';

export const testData: EditorState = {
  title: 'ReadMe Wizard',
  shortDescription:
    'Fed up with manually creating README files? Try our web app that simplifies the documentation process for GitHub projects. With our user-friendly platform, you can quickly generate detailed and visually appealing Markdown documentation in just seconds.',
  description: '',
  navigationLinks: false,
  sectionIcons: false,
  backToTop: true,
  installSteps: [
    'Install Node.js v12 or later',
    'Install a code editor (e.g., Visual Studio Code)',
    'Install the required dependencies:',
    '`npm install react react-dom axios`',
    'Install the development dependencies (if needed):',
    '`npm install --dev eslint prettier`',
  ],
  usageSteps: [
    'Open the project directory in your code editor',
    'Run `npm start` to start the development server',
  ],
  contentTable: false,
  github: {
    username: 'hazeliscoding',
    repo: 'readme-wizard',
    badges: true,
  },
  logoUrl: 'https://picsum.photos/id/0/200/300',
  mainImageUrl: 'https://picsum.photos/id/0/200/300',
  displayMarkdownResult: false,
  npm: {
    package: 'http-status-utility',
    url: 'https://www.npmjs.com/package/http-status-utility',
    badges: true,
  },
  images: [
    'https://picsum.photos/seed/picsum/200/200',
    'https://picsum.photos/seed/picsum/200/200',
    'https://picsum.photos/seed/picsum/200/200',
    'https://picsum.photos/seed/picsum/200/200',
  ],
  features: [
    {
      title: 'AI Generation',
      description: 'Use AI to autogenerate all the info for your project',
    },
    {
      title: 'Feature 2',
      description: 'Use AI to autogenerate all the info for your project',
    },
    {
      title: 'Feature 3',
      description: 'Use AI to autogenerate all the info for your project',
    },
  ],
  technologies: [
    {
      name: 'Ember.js',
      value: 'ember',
      description: 'A front-end web application framework',
      mainColor: '#E04E39',
    },
    {
      name: 'Vue.js',
      value: 'vue',
      description:
        'An open-source JavaScript library for building user interfaces',
      mainColor: '#41B883',
    },
    {
      name: 'Angular',
      value: 'angular',
      description: 'A front-end web application framework',
      mainColor: '#DD0031',
    },

    {
      name: 'Svelte',
      value: 'svelte',
      description: 'A high-performance reactive JavaScript UI library',
      mainColor: '#FF3E00',
    },
    {
      name: 'Backbone.js',
      value: 'backbone',
      description: 'A JavaScript library for building web applications',
      mainColor: '#0071B5',
    },
    {
      name: 'Meteor',
      value: 'meteor',
      description:
        'An open-source platform for building scalable real-time web applications',
      mainColor: '#DE4F4F',
    },
    {
      name: 'Astro',
      value: 'astro',
      description:
        'An opinionated framework for building web pages with React and TypeScript',
      mainColor: '#FF5D01',
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
    parameters: [
      {
        field: 'name',
        description: 'Project name',
        default: 'project',
      },
    ],
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
