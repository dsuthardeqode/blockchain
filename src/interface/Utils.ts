export class Utils {
  jsonToBinary(jsonObj: Object) {
    const jsonString = JSON.stringify(jsonObj);
    const encoder = new TextEncoder();
    const binaryData = encoder.encode(jsonString);
    return binaryData;
  }

  // Convert binary data to JSON object
  binaryToJson(binaryData: BufferSource) {
    const decoder = new TextDecoder();
    const jsonString = decoder.decode(binaryData);
    const jsonObj = JSON.parse(jsonString);
    return jsonObj;
  }
}
