# Very Slow Media Player (VSMP)

Inspired by an [e-ink project](https://medium.com/s/story/very-slow-movie-player-499f76c48b62?sk=deadb3073d5ef89fc425f61b1aabec5e) of the same name. Unfortunately no source code for appeared to be released, but the write up was almost sufficient to build exactly the same thing.

## Requirements
Originally created using node v10. Last tested with node v16. Assumes Linux (Ubuntu). Tested with FireFox.

## Setting up
Copy a movie file into `./media` then run the init script
```
node init.js ./media/movie-file.mp4
```

This will create artifacts in the `./config` directory that tracks the frame being shown and remembers the movie file name etc.

## Running
We need a few things
- The `example.sh` script running to generate frames. This can be replaced with cron.
- A web server hosting the files in `./public`
- A web browser viewing the website, preferably in full screen (kiosk) mode.

```
sh example.sh &
node webserver.js
```

The webserver port is 8080 - thus view it with `http://localhost:8080`

## Links

https://github.com/TomWhitwell/SlowMovie - Pi based + custom e-ink screen.

## Future
I'd like to create a canned RaspberryPi distribution for easy setup and use.
It current plays 1 frame per 30 seconds, configuration of this might be nice.

[MIT License](https://github.com/andrewlow/VSMP/blob/master/LICENSE)

_In memory of Jim des Rivières._
