(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{304:function(n,e){n.exports={title:"1.5.8 Release",description:"Menu collapsing and Kebos fixes",author:"Adam",__content:'<p>The ground items plugin now has an option to combine identical ground item menu\nentries.</p>\n<p><img src="/img/blog/1.5.8-Release/menucollapse.png" alt="menucollapse"/></p>\n<p>The timers plugin has been updated with all of the new farming patches in the\nnew farming guild. Additionally, the slayer plugin has been fixed to recognize\nslayer tasks assigned with locations from Konar.</p>\n<p><img src="/img/blog/1.5.8-Release/farming.png" alt="farming"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Add clue scroll north of Mount Karuulm</li>\n<li>Fix tile indicators to always show above tile markers</li>\n<li>Add farming guild hot cold location to clue plugin</li>\n<li>Fix prayer levels needed to next combat level calculation in combat level\nplugin</li>\n<li>Add farming guild farming patches world map tooltips</li>\n<li>Add Alchemical Hydra respawn timer</li>\n<li>Add Aerial Fishing to fishing plugin</li>\n<li>Fix agility shortcut requirements on the world map for the slayer tower\nshortcuts</li>\n<li>Add Kebos Lowlands teleports and shortcuts to world map</li>\n<li>Add task icons to slayer plugin for Kebos slayer monsters</li>\n<li>Add <code>hydra</code> abbreviation for <code>!kc</code> command</li>\n<li>Fix dropped item notifications to respect the <code>only show loot</code> option</li>\n<li>Add Wyrm, Drake, and Hydra bones to skill calculator plugin</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 26 contributors this release!</p>\n<pre><code>Adam (10):\n      http api: add runelite user agent to requests\n      http service: disable logback packaging data\n      loot tracker service: correct kill expiry query to use idx_time propertly\n      account service: default last_used to current time\n      http service: fix servlet not starting\n      Add menu entry collapsing to ground items plugin\n      Revert &quot;Merge pull request #7089 from TheStonedTurtle/OverlayRightClickMenu&quot;\n      http service: replace JedisPool with own pool implementation\n      chat commands: make !qp async\n      http service: remove unused import\n\nBrady (3):\n      Add new farming patch trees to Menu Entry Swapper (pay) (#7286)\n      Add clue scroll north of Mount Karruulm (#7285)\n      Change tile indicator priority to be above ground markers (#7323)\n\nCharlie Waters (3):\n      Slayer plugin: minor config rearranging\n      Slayer plugin: change regex groups to named groups\n      Slayer plugin: Add task location tracking\n\nDannysPVM (1):\n      Only log the IOException message on failure to submit CML update.\n\nDustin Kieler (1):\n      Update Tree Gnome Village h/c description and add Farming Guild h/c location (#7301)\n\nH\xe5kon Rosseland Paulsen (1):\n      Accept frozen and volcanic whip as emote clue requirement (#7318)\n\nJake Wilson (1):\n      timetracking: add default time in minutes to config (#7227)\n\nJordan Atwood (3):\n      combatlevel: Clean up plugin code\n      combatlevel: Fix prayer level needed to next combat\n      Fix world map surface selector widget ID\n\nJourney (1):\n      Add Farming Guild farming patch world map tooltips (#7268)\n\nKamiel (1):\n      Fix hot/cold clue location description typo\n\nKeith-Cancel (2):\n      Add &quot;fog&quot; and &quot;draw distance&quot; tags to GPU plugin (#7306)\n      Add Alchemical Hydra Respawn timer (#7313)\n\nMagic fTail (2):\n      Add Aerial Fishing to fishing plugin\n      Add item mappings for items introduced in Kebos update\n\nMax Weber (4):\n      cache: Generate NullItemID\n      ThinProgressBar: Manually paint\n      PatchImplementationTest: Don&#39;t immediately fail upon finding an error\n      farming: Support Kebos Lowlands update\n\nMonster Sync (1):\n      Remove misspelled &#39;piscarilius&#39; from achievement diary plugin.\n\nMonsterxSync (1):\n      Add missing requirement to kourend &amp; kebos diary plugin.\n\nRich (1):\n      Correct the agility shortcuts at slayer tower (lvl 61 and 71) (#7293)\n\nSebastiaanVanspauwen (3):\n      Worldmap: Add Kebos Lowlands teleports and shortcuts (#7291)\n      Worldmap: Fix CIR fairy ring location (#7308)\n      Slayer plugin: Add slayer icons for kebos slayer monsters (#7330)\n\nSteffen Hauge (1):\n      Add Alchemical Hydra to kc abbreviations\n\nTheStonedTurtle (2):\n      Move getImageSpritePixels to ImageUtil\n      Add right click functionality to overlays\n\nTim Granata (2):\n      Add Ring of Visibility emote clue requirement\n      Correct chinchompa h/c clue typo\n\nTomas Slusny (6):\n      Respect &quot;Only show loot&quot; option for item notifications\n      Remove tags from loot tracker box title\n      Add support for unarmed a speed, and inverse a speed display\n      Update item variations to latest OSRS cache\n      Add ClientTick event\n      Use client real dimensions for canvasTopRight\n\nTrevor Guidry (1):\n      Make Pyramid Plunder widget layoutable\n\nWilliam (1):\n      Add Mount Karuulm agility shortcuts to agility plugin (#7302)\n\nermalsh (1):\n      idle notifier: add Piscarilius crane repair\n\nsteffenhauge (1):\n      Add support for &quot;quick-open&quot; at Hydra to MenuEntrySwapper (#7311)\n\nwonnetz (1):\n      Add Wyrm Bones, Drake Bones, and Hydra Bones to SkillCalc plugin (#7274)\n</code></pre>'}}}]);
//# sourceMappingURL=72.9d8f193a.chunk.js.map