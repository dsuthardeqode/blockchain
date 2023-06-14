import { Chain } from "./interface/Chain";
import { Utils } from "./interface/Utils";

function main() {
  const newChain = new Chain();
  const utils = new Utils();

  const latest = newChain.getLatestBlock();

  console.log(utils.binaryToJson(latest.data));
}

main();
