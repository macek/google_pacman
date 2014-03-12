Google Pacman
-------------

This is a copy of Google's playable Pacman game logo hosted for
Pacman's 30th Anniversary.

With the help of StackOverflow users, we were able to get a playable
version working 100%.

To play a live version: http://macek.github.com/google_pacman

Or download the source and run it offline.



Sound in Offline Mode
---------------------

A snippet from Adobe.com

> For example, a trusted local HTML file may permit an untrusted local SWF to script it by setting allowScriptAccess="always". However, an untrusted local HTML file may never permit an untrusted local SWF to script it, regardless of the value of allowScriptAccess.

To have flash trust your local SWF, you must add your google_pacman
folder to the allow list using your Flash Control Panel.

1. Adobe Flash Control Panel: 
   http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html

2. Click `Edit Locations`

3. Click `Add Location`

4. Browse to your `google_pacman` directory

5. Click `Confirm`

Read more about this issue here:
http://www.adobe.com/devnet/flash/articles/fplayer8_security_09.html



Thanks to:
----------
SteD for providing a nicely formatted version of pacman10-hp.2.js

Skizo for noticing that relative paths don't work as expected when
executed locally

Skizo for fixing issue: "Ghosts stay blue permanently on restart"

Mason Barry for cleaning up the homepage, adding a nice starting graphic,
and fixing the `Insert Coin` button

winwakr for showing us how to get sound working in offline mode.

KevinCathcart for recommending we setup a live version on the `gh-pages` branch

KevinCathcart and Barry Silverman for removing a good amount of unnecessary HTML/JavaScript

KevinCathcart and Barry Silverman for getting the famous intro song working
