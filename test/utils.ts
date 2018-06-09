import * as fs from 'fs';

export default class TestUtils {
    readFileOptions = {
        encoding: 'utf8',
    };
    testRoot: string;

    constructor(testLocation: string) {
        this.testRoot = `${process.cwd()}/test${testLocation}`;
    }

    getBlueprint(fileName: string): string {
        return fs.readFileSync(
            `${this.testRoot}/blueprints/${fileName}.dsbp`,
            this.readFileOptions,
        );
    }

    getTokenized(fileName: string): any {
        const tokenizedFileContents = fs.readFileSync(
            `${this.testRoot}/tokenized/${fileName}.json`,
            this.readFileOptions,
        );
        return JSON.parse(tokenizedFileContents);
    }
}

