import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MarkdownService {
  constructor() {}

  generateParametersTable(
    properties: {
      fieldName: string; // Name of the field/parameter
      description: string; // Description of the parameter
      defaultValue?: string; // Optional default value for the parameter
    }[]
  ): string {
    // Defines the table header
    const tableHeader =
      '| Field Name | Description | Default Value |\n| --- | --- | --- |';
    let tableBody = '';

    // Iterates over each property to create a row in the table
    for (const prop of properties) {
      const row = `| ${prop.fieldName} | ${prop.description} | ${
        prop.defaultValue || ''
      } |`;
      tableBody += `${row}\n`;
    }

    // Returns the full markdown table (header + body)
    return `${tableHeader}\n${tableBody}`;
  }

  generateNpmBadges(
    npmPackageName: string, // Name of the npm package
    options?: {
      npmVersion?: {
        logoColor?: string; // Color of the logo in the badge
        color?: string; // Color of the badge
      };
      npmDownloads?: {
        color?: string; // Color of the download count badge
      };
      bundleSize?: {
        color?: string; // Color of the bundle size badge
      };
    }
  ): string {
    // Generates an npm version badge with optional color and logo color
    const npmVersionBadge = `<a aria-label="NPM Version" href="https://www.npmjs.com/package/${npmPackageName}">
            <img alt="" src="https://img.shields.io/npm/v/${npmPackageName}.svg?label=NPM&logo=npm&style=for-the-badge&color=${
      options?.npmVersion?.color || '0470FF'
    }&logoColor=${options?.npmVersion?.logoColor || 'white'}">
          </a>`;

    // Generates a download count badge
    const npmDownloadsBadge = `<a aria-label="NPM Download Count" href="https://www.npmjs.com/package/${npmPackageName}">
            <img alt="" src="https://img.shields.io/npm/dt/${npmPackageName}?label=Downloads&style=for-the-badge&color=${
      options?.npmDownloads?.color || '67ACF3'
    }">
          </a>`;

    // Generates a bundle size badge
    const bundleSizeBadge = `<a aria-label="palm-api Size" href="https://www.npmjs.com/package/${npmPackageName}">
            <img alt="" src="https://img.shields.io/bundlephobia/minzip/${npmPackageName}?style=for-the-badge&color=${
      options?.bundleSize?.color || 'F9DBBC'
    }">
          </a>`;

    // Returns all badges in a centered paragraph
    const badges = `<p align="center">
            ${npmVersionBadge}
            ${npmDownloadsBadge}
            ${bundleSizeBadge}
          </p>`;

    return badges;
  }

  generateTableOfContentsFromMarkdown(markdownText: string): string {
    const headingRegex = /^(#{1,6})\s*(.*?)$/gm; // Regex to match headings from H1 to H6
    const slugify = (text: string) =>
      text
        .toLowerCase()
        .replace(/\s+/g, '-') // Replaces spaces with hyphens for URL-friendly slugs
        .replace(/[^a-z0-9-]/g, ''); // Removes any non-alphanumeric characters

    const headings: { text: string; level: number }[] = []; // Stores heading text and level
    let match: RegExpExecArray | null;

    // Iterates through the markdown text and captures all headings
    while ((match = headingRegex.exec(markdownText))) {
      const level = match[1].length; // Determines heading level by the number of '#' symbols
      const text = match[2].trim(); // Extracts heading text
      headings.push({ text, level });
    }

    let tableOfContents = '<details>\n<summary>Table of Contents</summary>\n\n'; // Initializes the TOC container

    // Adds each heading to the table of contents with proper indentation
    headings.forEach((heading) => {
      const slug = slugify(heading.text); // Creates a URL slug for the heading
      const indent = '  '.repeat(heading.level - 1); // Indents based on heading level
      tableOfContents += `${indent}- [${heading.text}](#${slug})\n`; // Adds each heading as a link
    });

    tableOfContents += '</details>';

    return tableOfContents;
  }

  generateGitHubBadges(
    repo: string, // Repository name
    owner: string, // Repository owner
    badgeStyle:
      | 'flat'
      | 'flat-square'
      | 'plastic'
      | 'for-the-badge' = 'for-the-badge' // Badge style
  ): string {
    // URLs for GitHub repository resources (contributors, forks, stars, issues)
    const contributorsUrl = `https://github.com/${owner}/${repo}/graphs/contributors`;
    const forksUrl = `https://github.com/${owner}/${repo}/network/members`;
    const starsUrl = `https://github.com/${owner}/${repo}/stargazers`;
    const issuesUrl = `https://github.com/${owner}/${repo}/issues`;

    // Shield.io badge URLs
    const contributorsBadgeUrl = `https://img.shields.io/github/contributors/${owner}/${repo}.svg?style=${badgeStyle}`;
    const forksBadgeUrl = `https://img.shields.io/github/forks/${owner}/${repo}.svg?style=${badgeStyle}`;
    const starsBadgeUrl = `https://img.shields.io/github/stars/${owner}/${repo}.svg?style=${badgeStyle}`;
    const issuesBadgeUrl = `https://img.shields.io/github/issues/${owner}/${repo}.svg?style=${badgeStyle}`;

    // Returns a string containing all GitHub badges
    const badges = `[![Contributors][contributors-shield]][contributors-url]
        [![Forks][forks-shield]][forks-url]
        [![Stargazers][stars-shield]][stars-url]
        [![Issues][issues-shield]][issues-url]
        
        [contributors-shield]: ${contributorsBadgeUrl}
        [contributors-url]: ${contributorsUrl}
        [forks-shield]: ${forksBadgeUrl}
        [forks-url]: ${forksUrl}
        [stars-shield]: ${starsBadgeUrl}
        [stars-url]: ${starsUrl}
        [issues-shield]: ${issuesBadgeUrl}
        [issues-url]: ${issuesUrl}`;

    return badges;
  }

  generateBadge(
    label: string, // Text label for the badge
    url: string, // URL the badge links to
    color: string, // Badge color
    logo?: string, // Optional logo for the badge
    logoColor?: string, // Optional logo color
    badgeStyle:
      | 'flat'
      | 'flat-square'
      | 'plastic'
      | 'for-the-badge' = 'for-the-badge' // Badge style
  ): string {
    // Generates the URL for the badge image
    const badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(
      label
    )}-${color}?style=${badgeStyle}${logo ? `&logo=${logo}` : ''}${
      logoColor ? `&logoColor=${logoColor}` : ''
    }`;

    // Returns markdown code for the badge
    return `[![${label}][${label}-badge]][${label}-url]

        [${label}-badge]: ${badgeUrl}
        [${label}-url]: ${url}`;
  }

  generateHeading(heading: { text: string; level: number }): string {
    // Adds the appropriate number of '#' symbols based on the heading level
    let markdownContent = '';
    markdownContent += '#'.repeat(heading.level) + ' ' + heading.text + '\n\n';
    return markdownContent;
  }

  generateDescription(descriptions: string[]): string {
    let markdownContent = '';
    descriptions.forEach((description) => {
      markdownContent += description + '\n\n'; // Adds each description as a new paragraph
    });
    return markdownContent;
  }

  generateImages(images: { url: string; alt: string }[]): string {
    let markdownContent = '';
    images.forEach((image) => {
      markdownContent += `![${image.alt}](${image.url})\n\n`; // Adds markdown image syntax for each image
    });
    return markdownContent;
  }

  generateCodeBlock(codeBlocks: { language: string; code: string }[]): string {
    let markdownContent = '';
    codeBlocks.forEach((codeBlock) => {
      markdownContent +=
        '```' + codeBlock.language + '\n' + codeBlock.code + '\n```\n\n'; // Adds code block with specified language
    });
    return markdownContent;
  }
}
