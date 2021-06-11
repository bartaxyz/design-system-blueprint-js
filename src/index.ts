
const frontMatter = {
    name: 'frontMatter',
    startsWith: /\-{3}/,
    endsWith: '\n'
}

const headline1 = {
    name: 'headline1',
    startsWith: /^\n+#\s/,
    endsWith: '\n',
};

const headline2 = {
    ...headline1,
    startsWith: /^\n+#{2}\s/,
};

const headline3 = {
    ...headline1,
    startsWith: /^\n+#{2}\s/,
};

const languageDefinitions = [
    headline1,
    headline2
];



export const toJSON = (input: string): Array<any> => {
    return [];
};

export const toString = (input: Array<any>): string => {
    return '';
};
