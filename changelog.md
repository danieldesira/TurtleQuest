#0.0.0 Preview - 03/01/2024
* Initial version with turtle movable by keyboard or mouse wheel/touchpad gestures

#0.0.1 Preview - 04/01/2024 23:15 UTC+1
* Added experimental support for touchscreen swipes

#0.0.2 Preview - 05/01/2024 12:15 UTC+1
* Prevent default touch behavior

#0.0.3 Preview - 08/01/2024 17:00 UTC+1
* Respond to any pointing device on browsers with `PointerEvent` support (Edge/Chrome)

#0.0.4 Preview - 10/01/2024 23:00 UTC+1
* Background moves with turtle
* Set upper limits for turtle movement
* Shifted initial turtle position a little to the right

#0.0.5 Preview - 11/01/2024 23:15 UTC+1
* Resize canvas depending on window size
* Demo turtle observer `function`

#0.0.6 Preview - 14/01/2024 23:45 UTC+1
* Demo of switching from a level to the next
* Included dialog library used in Daniel's Connect4
* Installed and configured Tailwind
* Some general styling improvements

#0.0.7 Preview - 16/01/2024 23:40 UTC+1
* Code cleanup
* Tripled turtle speed
* Solved issue where level was sometimes automatically "completed" due to fetching background width prematurely
* Introduced onscreen controls

#0.0.8 Preview - 17/01/2024 17:05 UTC+1
* Detection of device orientation and asking users to play in landscape mode
* Increased size for onscreen controls

#0.0.9 Preview - 18/01/2024 17:45 UTC+1
* Removed orientation check
* Added web app manifest.json
* Optimized image rendering for backgrounds and turtle
* Onscreen controls are now much larger
* Code cleanup

#0.0.10 Preview - 19/01/2024 23:30 UTC+1
* Resolved regression not completing the last level and code cleanup making the flow more readable
* Attempt to disable zoom when tapping controls on mobile
* Attempt to lock orientation to landscape on mobile

#0.1.0 Preview - 28/01/2024 12:30 UTC+1
* Food and damage meters
* Shrimp and small fish as additional characters
* Code cleanup and ability to "eat"

#0.1.1 Preview - 28/01/2024 13:45 UTC+1
* Fix: Could not load small fish image on GH Pages environment
* Improved error and character image handling

#0.1.2 Preview - 29/01/2024 19:40 UTC+1
* Massive refactor
* Introduced breathing and oxygen level

#0.2.0 Preview - 16/02/2024 17:00 UTC+1
* Refactoring:
 - Using React components and hooks
 - Introduced `Game` singleton to share turtle and level data more easily
 - Using Redux for global state management
* Introduced plastic bag
* Introduced Neptune grass as a benthic character
* Minor UI improvements
* Randomised character movement and experimental prey movement
* Improved collision detection
* Introduced stomach capacity meter

#0.2.1 Preview - 20/02/2024 17:45 UTC+1
* Introduced point system
* Realigned header components
* Added Play Again button when game ends
* Vastly sped up stomach recovery
* Show direction to the next level

#0.2.2 Preview - 23/02/2024 19:10 UTC+1
* Bug fix: Turtle visible when changing direction outside screen boundaries
* Reintroduced **up** and **down** directions and updated collision detection for such directions

#0.3 Preview -