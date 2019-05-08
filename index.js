#!/usr/bin/env node

const program = require('commander');
const pack = require('./package.json');
const fs = require('fs');
const md2html = require('md-html-tool');
const { red, green, cyan } = require('colors');

(async () => {
    try {
        program
            .version(pack.version, '-v, --version')
            .option('-s, --setting [settingfilepath]', 'setting file path')
            .parse(process.argv);

        if (!program.setting) {
            throw new Error(`need specific setting file using '-s'`);
        }
        if (!fs.existsSync(process.cwd(), program.setting)) {
            throw new Error(`${program.setting} not exist`);
        }

        console.log(`\n${green('setting file')} - ${cyan(program.setting)}`);


        await md2html.convert(program.setting);
    }
    catch (err) {
        console.error(`${red('Error')} ${err.message}`);
    }
    finally {
        process.exit(0);
    }
})();


