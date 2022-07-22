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
