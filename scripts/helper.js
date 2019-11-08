class Helper {

 player.playPauseAndUpdate(){
   const totalTime = player.getDuration();
   $("#time-control .total-time").text(totalTime);
   player.playPause(song);
 }
}

const helper = new Helper();
