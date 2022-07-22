import sharp from "sharp";
import { Readable, Writable } from "stream";

export const pipeResizedImage = (
  readable: Readable | Buffer,
  width: number,
  height: number,
  writable: Writable,
  ) =>
  new Promise<void>((resolve, reject) => {
    if (readable instanceof Buffer) {
      readable = Readable.from(readable);
    }
    const pipeline = sharp();
    pipeline.resize(width, height).jpeg().pipe(writable);
    readable.pipe(pipeline);
    readable.on("end", resolve);
    readable.on("error", reject);
  });

// const rsToBuffer = (rs: ReadStream) =>
//   new Promise<Buffer>((resolve, reject) => {
//     const buffers: Buffer[] = [];
//     rs.on("data", chunk => {
//       if (typeof chunk === "string") {
//         reject("The chunk was a string");
//       } else {
//         buffers.push(chunk);
//       }
//     });
//     rs.on("end", () => resolve(Buffer.concat(buffers)));
//     rs.on("error", err => reject(`error converting stream - ${err}`));
//   });
