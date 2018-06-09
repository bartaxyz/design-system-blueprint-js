import { expect } from 'chai';

import * as DSBP from '../../src';
import TestUtils from '../utils';

describe('DSBP Empty Blueprint', () => {
    const utils = new TestUtils('/empty');
    const files = ['empty'];

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
                DSBP.tokenize(utils.getBlueprint(file))
            ).to.deep.equal(
                utils.getTokenized(file)
            );
        });

    });
});
