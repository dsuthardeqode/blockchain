'use strict';

var blake = require('blakejs');

class Utils {
    jsonToBinary(jsonObj) {
        const jsonString = JSON.stringify(jsonObj);
        const encoder = new TextEncoder();
        const binaryData = encoder.encode(jsonString);
        return binaryData;
    }
    // Convert binary data to JSON object
    binaryToJson(binaryData) {
        const decoder = new TextDecoder();
        const jsonString = decoder.decode(binaryData);
        const jsonObj = JSON.parse(jsonString);
        return jsonObj;
    }
}

class Chain {
    _blocks = [];
    difficulty = 0;
    utils;
    constructor() {
        this.utils = new Utils();
        this.#_addGenesisBlock();
    }
    #_addGenesisBlock() {
        const geneSisTemp = {
            prevHash: "",
            timestamp: Date.now(),
            data: this.utils.jsonToBinary({ data: "Hello world" }),
        };
        const hash = blake.blake2bHex(JSON.stringify(geneSisTemp));
        const geneSisBlock = {
            hash: hash,
            ...geneSisTemp,
        };
        this._blocks.push(geneSisBlock);
        this.difficulty += 1;
    }
    getBlocks() {
        return this._blocks;
    }
    getLatestBlock() {
        return this._blocks[this._blocks.length - 1];
    }
    mine(block) {
        // verify
    }
}

function main() {
    const newChain = new Chain();
    const utils = new Utils();
    const latest = newChain.getLatestBlock();
    console.log(utils.binaryToJson(latest.data));
}
main();
