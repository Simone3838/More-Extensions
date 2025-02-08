const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');

class Scratch3StringsExtension {

    constructor (runtime) {
        // put any setup for your extension here
    }

    /**
     * Returns the metadata about your extension.
     */
    getInfo () {
        return {
            // unique ID for your extension
            id: 'stringsExtension',

            // name that will be displayed in the Scratch UI
            name: 'Strings',

            // colours to use for your extension blocks
            color1: '#000099',
            color2: '#660066',

            // icons to display
            blockIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',
            menuIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',

            // your Scratch blocks
            blocks: [
                {
                    opcode: 'concatenateStrings',
                    blockType: BlockType.REPORTER,
                    text: 'concatenate [STRING1] and [STRING2]',
                    terminal: false,
                    filter: [TargetType.SPRITE, TargetType.STAGE],
                    arguments: {
                        STRING1: {
                            defaultValue: 'hello',
                            type: ArgumentType.STRING
                        },
                        STRING2: {
                            defaultValue: 'world',
                            type: ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: 'lengthOfString',
                    blockType: BlockType.REPORTER,
                    text: 'length of [STRING]',
                    terminal: false,
                    filter: [TargetType.SPRITE, TargetType.STAGE],
                    arguments: {
                        STRING: {
                            defaultValue: 'hello',
                            type: ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: 'characterAtPosition',
                    blockType: BlockType.REPORTER,
                    text: 'character at [POSITION] of [STRING]',
                    terminal: false,
                    filter: [TargetType.SPRITE, TargetType.STAGE],
                    arguments: {
                        STRING: {
                            defaultValue: 'hello',
                            type: ArgumentType.STRING
                        },
                        POSITION: {
                            defaultValue: 1,
                            type: ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: 'substring',
                    blockType: BlockType.REPORTER,
                    text: 'substring of [STRING] from [START] to [END]',
                    terminal: false,
                    filter: [TargetType.SPRITE, TargetType.STAGE],
                    arguments: {
                        STRING: {
                            defaultValue: 'hello world',
                            type: ArgumentType.STRING
                        },
                        START: {
                            defaultValue: 1,
                            type: ArgumentType.NUMBER
                        },
                        END: {
                            defaultValue: 5,
                            type: ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: 'convertToUpperCase',
                    blockType: BlockType.REPORTER,
                    text: 'convert [STRING] to uppercase',
                    terminal: false,
                    filter: [TargetType.SPRITE, TargetType.STAGE],
                    arguments: {
                        STRING: {
                            defaultValue: 'hello',
                            type: ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: 'convertToLowerCase',
                    blockType: BlockType.REPORTER,
                    text: 'convert [STRING] to lowercase',
                    terminal: false,
                    filter: [TargetType.SPRITE, TargetType.STAGE],
                    arguments: {
                        STRING: {
                            defaultValue: 'HELLO',
                            type: ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: 'containsSubstring',
                    blockType: BlockType.BOOLEAN,
                    text: '[STRING] contains [SUBSTRING]',
                    terminal: false,
                    filter: [TargetType.SPRITE, TargetType.STAGE],
                    arguments: {
                        STRING: {
                            defaultValue: 'hello world',
                            type: ArgumentType.STRING
                        },
                        SUBSTRING: {
                            defaultValue: 'world',
                            type: ArgumentType.STRING
                        }
                    }
                }
            ]
        };
    }

    concatenateStrings ({ STRING1, STRING2 }) {
        return STRING1 + ' ' + STRING2;
    }

    lengthOfString ({ STRING }) {
        return STRING.length;
    }

    characterAtPosition ({ STRING, POSITION }) {
        return STRING.charAt(POSITION - 1);
    }

    substring ({ STRING, START, END }) {
        return STRING.substring(START - 1, END);
    }

    convertToUpperCase ({ STRING }) {
        return STRING.toUpperCase();
    }

    convertToLowerCase ({ STRING }) {
        return STRING.toLowerCase();
    }

    containsSubstring ({ STRING, SUBSTRING }) {
        return STRING.includes(SUBSTRING);
    }
}

module.exports = Scratch3StringsExtension;
