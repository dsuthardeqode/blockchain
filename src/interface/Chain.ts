import { Block } from "../@types/Block";
import { Utils } from "./Utils";
import blake from "blakejs";

export class Chain {
  _blocks: Block[] = [];
  difficulty: number = 0;
  utils: Utils;

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

    const geneSisBlock: Block = {
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

  mine(block: Block) {
    // verify
  }
}
