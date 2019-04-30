# Very Slow Media Player (VSMP)

Inspired by an [e-ink project](https://medium.com/s/story/very-slow-movie-player-499f76c48b62?sk=deadb3073d5ef89fc425f61b1aabec5e) of the same name. Unfortunately no source code for appeared to be released, but the write up was almost sufficient to build exactly the same thing.

## Requirements
Creating using node v10. Assumes Linux (Ubuntu). Tested with Chrome.

## Setting up
Copy a movie file into `./media` then run the init script
```
node init.js ./media/movie-file.mp4
```

## Running
We need a few things
- The `example.sh` script running to generate frames. This can be replaced with cron.
- A web server hosting the files in `./public`
- A web browser viewing the website, preferably in full screen (kiosk) mode.

```
sh example.sh &
node webserver.js
```

## Future
I'd like to create a canned RaspberryPi distribution for easy setup and use.
It current plays 1 frame per 30 seconds, configuration of this might be nice.

[MIT License](https://github.com/andrewlow/VSMP/blob/master/LICENSE)

_In memory of Jim des Rivières._
