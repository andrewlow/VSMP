//
// This module initializes persistent storage and starts a very slow movie
//

const probe = require("ffmpeg-probe");
const storage = require("node-persist");

async function getInfo(file) {
  const info = await probe(file);

  const numFramesTotal = parseInt(info.streams[0].nb_frames);
  const r_frame_rate = parseInt(info.streams[0].r_frame_rate);

  // console.log(info);
  // console.log(numFramesTotal);
  // console.log(r_frame_rate);
  console.log("Movie file: " + file);
  console.log("Total frames: " + numFramesTotal);

  await storage.init({
    dir: "./config"
  });
  await storage.setItem("totalFrames", numFramesTotal);
  await storage.setItem("movieFile", file);
  await storage.setItem("currentFrame", 0);
  await storage.setItem("frameRate", r_frame_rate);
}

const args = process.argv.slice(2);
if (args.length != 1) {
  console.log("Must provide movie file as argument");
} else {
  getInfo(args[0]);
}
