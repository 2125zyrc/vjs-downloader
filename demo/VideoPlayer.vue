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
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that supports HTML5 video
      </p>
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
      default: 'https://vjs.zencdn.net/v/oceans.mp4'
    }
  },
  data() {
    return {
      player: null
    };
  },
  mounted() {
    // Initialize video.js player
    videojs.registerPlugin("vjsDownloader", vjsDownloader)
    this.player = videojs(this.$refs.videoPlayer, {
      plugins: {
        vjsDownloader: {
          videojs: videojs,
          downloadText: 'Download Video',
          downloadClass: 'vjs-download-button'
        }
      }
    });
  },
  beforeDestroy() {
    // Clean up player when component is destroyed
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>

<style scoped>
.video-container {
  max-width: 800px;
  margin: 20px auto;
}
</style> 