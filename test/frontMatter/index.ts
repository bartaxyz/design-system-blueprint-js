import { expect } from 'chai';

import * as DSBP from '../../src';
import TestUtils from '../utils';

describe('DSBP Front Matter', () => {
    const utils = new TestUtils('/frontMatter');
    const files = ['withFrontMatter', 'withInvalidFrontMatter'];

    files.forEach(file => {

        it(`should parse a blueprint "${file}.dsbp"`, () => {
            expect(
                DSBP.toJSON(utils.getBlueprint(file))
            ).to.deep.equal(
                utils.getParsed(file)
            );
        });

        it(`should stringify a blueprint "${file}.json"`, () => {
            expect(
                DSBP.toString(utils.getParsed(file))
            ).to.deep.equal(
                utils.getBlueprint(file)
            );
        });

    });
});
