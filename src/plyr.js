(function(d,p){
  var a=new XMLHttpRequest(),
      b=d.body;
  a.open("GET",p,!0);
  a.send();
  a.onload=function(){
      var c=d.createElement("div");
      c.style.display="none";
      c.innerHTML=a.responseText;
      b.insertBefore(c,b.childNodes[0])
  }
})(document,"https://cdn.bootcss.com/plyr/3.3.7/plyr.svg");
plyr.setup({
    controls: ["play", "current-time", "duration", "mute", "volume", "captions", "fullscreen"],
    tooltips:{ controls: true, seek: false },
    i18n: {
    restart:            "重播",
    rewind:             "快退{seektime} 秒",
    play:               "播放",
    pause:              "暂停",
    forward:            "快进{seektime}秒",
    buffered:           "缓冲",
    currentTime:        "当前",
    duration:           "时长",
    volume:             "音量",
    toggleMute:         "静音",
    toggleCaptions:     "字幕",
    toggleFullscreen:   "全屏",
},
    showPosterOnEnd:true,
});
