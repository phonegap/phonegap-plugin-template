
var templateLib = require('..');
var shell = require('shelljs');


describe("exports create function", function() {
    // make sure we export what we say we do
    it("contains a create function", function() {
        expect(templateLib.create).toBeDefined();
        expect(typeof templateLib.create).toBe('function');
    });
});

describe("Create ::", function() {

    afterEach(function() {
        shell.rm('-rf','tests/MyTestPlugin');
    });

    it("can create a plugin", function() {

        templateLib.create('tests/MyTestPlugin','MyTestPlugin','test-my-plugin','Apache-2');
        var package = require('../tests/MyTestPlugin/package.json');

        expect(package).toBeDefined();
        expect(package.name).toBe('MyTestPlugin'.toLowerCase());
        expect(package.cordova.id).toBe('test-my-plugin');
        expect(package.license).toBe('Apache-2');

        // TODO: check package.name, package.cordova.id, package.license, version, ...
    });

    it("should not change cwd", function() {
        var cwd = process.cwd();
        templateLib.create('tests/MyTestPlugin','MyTestPlugin','test-my-plugin','Apache-2');
        expect(cwd).toBe(process.cwd());
    });

});

