import "./main.css";

function vjsDownloader(options){
    //默认配置
    const defaultOptions = {
        beforeElement: "fullscreenToggle",
        controlText: "Download",
        // name: "downloadButton",
        downloadURL: null,
        customDownload: false,
        className: 'vjs-downloader'
    }

    const _options = { 
            ...defaultOptions,
            ...options,
    };

    const _videojs = _options?.videojs || window.videojs

    if (typeof _videojs === "undefined") {
        console.warn("vjsDownloader: video.js not detected");
        return;
    }


    const _player = this.player()

    _player.addClass(_options.className)

    _player.ready(() => {
        const Button = _videojs.getComponent("Button");
        let button = new Button(_player, {
            className: _options.className,
            controlText: _options.controlText,
            clickHandler: this.handleClick,
        });

        if(options?.beforeElement && _player.controlBar.getChild(_options.beforeElement)?.el()){
            _player.getChild("ControlBar").el().insertBefore(
                button.el(),
                _player.controlBar.getChild(_options.beforeElement).el()
            );
        }else{            
            _player.getChild("ControlBar").el().appendChild(
                button.el(),
            );
        }
    });

    this.handleClick = ()=>{
        if(!_options.customDownload){
            let url = _options.downloadURL || _player.currentSource().src;
            window.open(url, "Download");
        }
        _player.trigger("download");
    }

    _videojs.registerPlugin('vjs-downloader', vjsDownloader);

}

export default vjsDownloader;