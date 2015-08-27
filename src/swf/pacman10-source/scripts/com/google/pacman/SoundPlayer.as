package com.google.pacman
{
   import flash.display.Sprite;
   import flash.media.SoundChannel;
   import flash.utils.setInterval;
   import flash.utils.clearInterval;
   import flash.media.Sound;
   import flash.events.Event;
   import flash.system.Security;
   import flash.external.ExternalInterface;
   
   public class SoundPlayer extends Sprite
   {
      
      private static var tracks:Object = {};
      
      private static var ambientTwoClass:Class = SoundPlayer_ambientTwoClass;
      
      private static var startMusicDoubleClass:Class = SoundPlayer_startMusicDoubleClass;
      
      private static var eatingDotTwoClass:Class = SoundPlayer_eatingDotTwoClass;
      
      private static var deathDoubleClass:Class = SoundPlayer_deathDoubleClass;
      
      private static var startMusicClass:Class = SoundPlayer_startMusicClass;
      
      private static var eatingDotDoubleClass:Class = SoundPlayer_eatingDotDoubleClass;
      
      private static var eatingGhostClass:Class = SoundPlayer_eatingGhostClass;
      
      private static var ambientFrightClass:Class = SoundPlayer_ambientFrightClass;
      
      private static var deathClass:Class = SoundPlayer_deathClass;
      
      private static var extraLifeClass:Class = SoundPlayer_extraLifeClass;
      
      private static var cutSceneClass:Class = SoundPlayer_cutSceneClass;
      
      private static var ambientOneClass:Class = SoundPlayer_ambientOneClass;
      
      private static var ambientThreeClass:Class = SoundPlayer_ambientThreeClass;
      
      private static var eatingDotOneClass:Class = SoundPlayer_eatingDotOneClass;
      
      private static var ambientFourClass:Class = SoundPlayer_ambientFourClass;
      
      private static var fruitClass:Class = SoundPlayer_fruitClass;
      
      private static var ambientEyesClass:Class = SoundPlayer_ambientEyesClass;
      
      {
         ambientOneClass = SoundPlayer_ambientOneClass;
         ambientTwoClass = SoundPlayer_ambientTwoClass;
         ambientThreeClass = SoundPlayer_ambientThreeClass;
         ambientFourClass = SoundPlayer_ambientFourClass;
         ambientEyesClass = SoundPlayer_ambientEyesClass;
         ambientFrightClass = SoundPlayer_ambientFrightClass;
         cutSceneClass = SoundPlayer_cutSceneClass;
         deathDoubleClass = SoundPlayer_deathDoubleClass;
         deathClass = SoundPlayer_deathClass;
         eatingDotOneClass = SoundPlayer_eatingDotOneClass;
         eatingDotTwoClass = SoundPlayer_eatingDotTwoClass;
         eatingDotDoubleClass = SoundPlayer_eatingDotDoubleClass;
         eatingGhostClass = SoundPlayer_eatingGhostClass;
         extraLifeClass = SoundPlayer_extraLifeClass;
         fruitClass = SoundPlayer_fruitClass;
         startMusicDoubleClass = SoundPlayer_startMusicDoubleClass;
         startMusicClass = SoundPlayer_startMusicClass;
         tracks = {};
         tracks["ambient-1"] = new ambientOneClass();
         tracks["ambient-2"] = new ambientTwoClass();
         tracks["ambient-3"] = new ambientThreeClass();
         tracks["ambient-4"] = new ambientFourClass();
         tracks["ambient-eyes"] = new ambientEyesClass();
         tracks["ambient-fright"] = new ambientFrightClass();
         tracks["cutscene"] = new cutSceneClass();
         tracks["death-double"] = new deathDoubleClass();
         tracks["death"] = new deathClass();
         tracks["eating-dot-1"] = new eatingDotOneClass();
         tracks["eating-dot-2"] = new eatingDotTwoClass();
         tracks["eating-dot-double"] = new eatingDotDoubleClass();
         tracks["eating-ghost"] = new eatingGhostClass();
         tracks["extra-life"] = new extraLifeClass();
         tracks["fruit"] = new fruitClass();
         tracks["start-music-double"] = new startMusicDoubleClass();
         tracks["start-music"] = new startMusicClass();
      }
      
      private var ambientChannelName:String;
      
      private var ambientTrackIntervalId:uint;
      
      private var activeChannels:Object;
      
      private var ambientTrackName:String = "";
      
      public function SoundPlayer()
      {
         activeChannels = {};
         super();
         Security.allowDomain("*");
         if(ExternalInterface.available)
         {
            ExternalInterface.addCallback("playTrack",playTrack);
            ExternalInterface.addCallback("playAmbientTrack",playAmbientTrack);
            ExternalInterface.addCallback("stopChannel",stopSound);
            ExternalInterface.addCallback("stopAmbientTrack",stopAmbientTrack);
            ExternalInterface.call("parent.google.pacman.flashLoaded");
         }
      }
      
      private function soundCompleteHandler(param1:String) : void
      {
         var _loc2_:SoundChannel = activeChannels[param1];
         if(_loc2_ != null)
         {
            activeChannels[_loc2_] = null;
         }
      }
      
      private function playAmbientTrack(param1:String) : void
      {
         var _loc2_:* = NaN;
         if(param1 != ambientTrackName)
         {
            stopAmbientTrack();
            ambientTrackName = param1;
            ambientChannelName = "ambient-1";
            switch(ambientTrackName)
            {
               case "ambient-1":
                  _loc2_ = 381;
                  break;
               case "ambient-2":
                  _loc2_ = 327;
                  break;
               case "ambient-3":
                  _loc2_ = 298;
                  break;
               case "ambient-4":
                  _loc2_ = 270;
                  break;
               case "ambient-fright":
                  _loc2_ = 529;
                  break;
               case "ambient-eyes":
                  _loc2_ = 264;
                  break;
               case "cutscene":
                  _loc2_ = 5312;
                  break;
            }
            ambientTrackIntervalId = setInterval(repeatAmbientTrack,_loc2_ - 30);
            playTrack(ambientTrackName,ambientChannelName);
         }
      }
      
      private function stopSound(param1:String) : void
      {
         var _loc2_:SoundChannel = activeChannels[param1];
         if(_loc2_ != null)
         {
            _loc2_.stop();
            activeChannels[_loc2_] = null;
         }
      }
      
      private function repeatAmbientTrack() : void
      {
         if(ambientChannelName == "ambient-1")
         {
            ambientChannelName = "ambient-2";
         }
         else
         {
            ambientChannelName = "ambient-1";
         }
         playTrack(ambientTrackName,ambientChannelName);
      }
      
      private function stopAmbientTrack() : void
      {
         clearInterval(ambientTrackIntervalId);
         stopSound("ambient-1");
         stopSound("ambient-2");
         ambientTrackName = "";
      }
      
      private function playTrack(param1:String, param2:String) : void
      {
         var trackName:String = param1;
         var channelName:String = param2;
         var sound:Sound = tracks[trackName];
         if(sound == null)
         {
            return;
         }
         stopSound(channelName);
         var channel:SoundChannel = sound.play(0,0);
         if(channel == null)
         {
            return;
         }
         activeChannels[channelName] = channel;
         channel.addEventListener(Event.SOUND_COMPLETE,function(param1:Event):void
         {
            soundCompleteHandler(channelName);
         });
      }
   }
}
