export interface Block {
  hash: string;
  prevHash: string;
  timestamp: number;
  data: Uint8Array | Uint16Array | Uint32Array;
}
