//
// This module extracts the next frame from the movie into ./public/frame.png
//

const storage = require("node-persist");
const ffmpeg = require("fluent-ffmpeg");

var totalFrames;
var currentFrame;
var movieFile;
var frameRate;

async function main() {
  await storage.init({
    dir: "./config"
  });
  totalFrames = await storage.getItem("totalFrames");
  currentFrame = await storage.getItem("currentFrame");
  frameRate = await storage.getItem("frameRate");
  movieFile = await storage.getItem("movieFile");

  console.log(movieFile);
  // console.log(frameRate);

  const cmd = ffmpeg(movieFile);

  // 1000 * (current /fps) = will result in the number of milliseconds

  // want to special case the 1st frame (0) to avoid div by zero
  var milliseconds = 0;
  if (currentFrame != 0) {
    milliseconds = 1000 * (currentFrame / frameRate);
  }

  // timestamp is in [[hh:]mm:]ss[.xxx]) -- we have fps and total frames.

  var date = new Date(milliseconds);
  var timeStamp =
    date.getUTCHours() +
    ":" +
    ("0" + date.getUTCMinutes()).slice(-2) +
    ":" +
    ("0" + date.getUTCSeconds()).slice(-2) +
    "." +
    ("00" + date.getUTCMilliseconds()).slice(-3);

  console.log(timeStamp + "  " + currentFrame + "/" + totalFrames);

  cmd.screenshots({
    timestamps: [timeStamp],
    filename: "frame.png",
    folder: "./public/"
  });

  // Move to the next frame
  currentFrame++;
  // check to see if currentFrame > totalFrame and fix it
  if (currentFrame > totalFrames) {
    currentFrame = 0;
  }
  await storage.setItem("currentFrame", currentFrame);
}
main();
