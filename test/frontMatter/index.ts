import { expect } from 'chai';

import * as DSBP from '../../src';
import TestUtils from '../utils';

describe('DSBP Front Matter', () => {
    const utils = new TestUtils('/frontMatter');
    const files = ['withFrontMatter', 'withInvalidFrontMatter'];

    files.forEach(file => {

        it(`should tokenize a blueprint "${file}.dsbp"`, () => {
            expect(
                DSBP.tokenize(utils.getBlueprint(file))
            ).to.deep.equal(
                utils.getTokenized(file)
            );
        });

        it(`should stringify a blueprint "${file}.json"`, () => {
            expect(
                DSBP.stringify(utils.getTokenized(file))
            ).to.deep.equal(
                utils.getBlueprint(file)
            );
        });

    });
});
