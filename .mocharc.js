'use strict';

const additionalArguments = process.argv.slice(2).filter(arg => !arg.startsWith('--'));
const defaultSpecPatterns = ['./src/**/*.test.ts'];
const specPatterns = additionalArguments.length > 0 ? additionalArguments : defaultSpecPatterns;

module.exports = {
    spec: specPatterns,
    require: ['ts-node/register/transpile-only'],
    extension: ['ts', 'js'],
    ui: 'tdd',
    reporter: 'dot',
    enableSourceMaps: true,
    exit: true
};

