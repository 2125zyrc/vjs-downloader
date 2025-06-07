# vjs-downloader

A download button plugin for Video.js that adds a download button to the video player's control bar.

## Features

- Adds a download button to Video.js player's control bar
- Customizable download button position
- Support for custom download URLs
- Custom download handler support
- Responsive design with flexible icon sizing

## Installation

```bash
npm install vjs-downloader
```

## Usage

### Basic Usage

```javascript
// Import the plugin
import vjsDownloader from 'vjs-downloader';
import 'vjs-downloader/dist/vjs-downloader.min.css';

// Register the plugin
videojs.registerPlugin('vjsDownloader', vjsDownloader);

// Initialize video.js player with the plugin
const player = videojs('my-video', {
  plugins: {
    vjsDownloader: {
      // Optional configuration
      controlText: 'Download Video',
      className: 'vjs-downloader'
    }
  }
});
```

### HTML Example

```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://vjs.zencdn.net/8.10.0/video-js.css" rel="stylesheet" />
  <link href="path/to/vjs-downloader.min.css" rel="stylesheet" />
</head>
<body>
  <video
    id="my-video"
    class="video-js vjs-default-skin"
    controls
    preload="auto"
    width="800"
    height="450"
  >
    <source src="path/to/video.mp4" type="video/mp4" />
  </video>

  <script src="https://vjs.zencdn.net/8.10.0/video.min.js"></script>
  <script src="path/to/vjs-downloader.umd.js"></script>
  <script>
    videojs.registerPlugin("vjsDownloader", vjsDownloader);
    
    var player = videojs('my-video', {
      plugins: {
        vjsDownloader: {
          controlText: 'Download Video',
          className: 'vjs-downloader'
        }
      }
    });
  </script>
</body>
</html>
```

### Vue Example

```vue
<template>
  <div class="video-container">
    <video
      ref="videoPlayer"
      class="video-js vjs-default-skin"
      controls
      preload="auto"
      width="800"
      height="450"
    >
      <source :src="videoSrc" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css';
import '../dist/vjs-downloader.min.css';
import videojs from 'video.js';

export default {
  name: 'VideoPlayer',
  props: {
    videoSrc: {
      type: String,
      default: 'https://example.com/video.mp4'
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, {
      plugins: {
        download: {
          controlText: 'Download Video',
          className: 'vjs-downloader'
        }
      }
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>
```

## Configuration Options

The plugin accepts the following configuration options:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `beforeElement` | String | "fullscreenToggle" | The name of the control bar element before which the download button should be inserted |
| `controlText` | String | "Download" | The text to display for the download button |
| `downloadURL` | String | null | Custom URL for downloading. If not provided, uses the current video source URL |
| `customDownload` | Boolean | false | If true, triggers a custom download event instead of opening the URL |
| `className` | String | 'vjs-downloader' | CSS class name for the download button |

## Events

The plugin triggers the following events:

- `download`: Triggered when the download button is clicked

## Browser Support

- Chrome
- Firefox
- Safari
- Edge
- IE11 (with polyfills)

## License

ISC 