(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{308:function(n,e){n.exports={title:"1.5.12 Release",description:"Wiki plugin and poison plugin",author:"Adam",__content:'<p>A wiki plugin was added which allows quickly looking up items, npcs, quests, and\nmore on the <a href="https://oldschool.runescape.wiki/">OldSchool RuneScape Wiki</a>. It\nalso has a built in search feature which lets you quickly search for articles\nusing the in game chatbox.</p>\n<p><img src="/img/blog/1.5.12-Release/wiki-lookup.gif" alt="wiki-lookup"/></p>\n<p><img src="/img/blog/1.5.12-Release/wiki-quest.gif" alt="wiki-quest"/></p>\n<p><img src="/img/blog/1.5.12-Release/wiki-search.gif" alt="wiki-search"/></p>\n<p>A poison plugin was added which shows time until next damage, cure, and next\npoison damage in an overlay on the hitpoints orb. It can also optionally add an\ninfobox.</p>\n<p><img src="/img/blog/1.5.12-Release/poison.png" alt="poison"/><br/><img src="/img/blog/1.5.12-Release/poison-infobox.png" alt="poison-infobox"/>\n<img src="/img/blog/1.5.12-Release/venom-infobox.png" alt="venom-infobox"/></p>\n<p>The player indicator plugin now has an option on where to draw the players name\non screen.</p>\n<p><img src="/img/blog/1.5.12-Release/player-indicator-config.png" alt="player-indicator-config"/>\n<img src="/img/blog/1.5.12-Release/player-indicator.gif" alt="player-indicatorg"/></p>\n<p>An option to hide the auto retaliate button has been added to the attack styles\nplugin.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix loottracker losing loot on logout from RuneLite</li>\n<li>Fix world hopper not functioning correctly if the plugin is restarted</li>\n<li>Fix xp tracker progress bars to be more visible</li>\n<li>Fix &quot;A Basic Anti Pot&quot; anagram clue answer for removal of Veos&#39;s boat</li>\n<li>Add Hydra slayer helmet to the slayer plugin</li>\n<li>Add Kebos swamp cryptic clue</li>\n<li>Update skilling calculator for Hydra, Drake and Wyrm bones XP change</li>\n<li>Add Rada&#39;s Blessings to Prayer plugin</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 19 contributors this release!</p>\n<pre><code>Adam (9):\n      api: add MessageNode and timestamp to ChatMessage event\n      api: remove SetMessage event\n      client: update SetMessage usages to ChatMessage\n      plugin manager test: check plugins don&#39;t error when registering with eventbus\n      http api: rename OSB ge classes with OSB prefix\n      client: add poison plugin to track poison damage\n      scene uploader: swap seColor/nwColor which had their mappings swapped\n      loottracker service: correct kills foreign key\n      Add GE history tracker\n\nAndrew Fulton (1):\n      client: flash only during LOGGED_IN game state (#7782)\n\nHenry Zhang (2):\n      Migrate onSetMessage to onChatMessage\n      Make sure WorldHopperPlugin&#39;s executor is active on startup\n\nHydrox6 (1):\n      Delay party instruction message if user is not logged in (#7696)\n\nJakob Ankarhem (1):\n      Remove dulling from progress bar positions (#7781)\n\nJordan Atwood (4):\n      perspective: Allow empty text for getCanvasTextLocation\n      actor: Mark getCanvasTextLocation as Nullable\n      player indicators: Add name position configuration\n      item stats: Represent boost data as ints\n\nKalle (2):\n      Fix anagram clue &quot;A Basic Anti Pot&quot; (answer changed to 6) (#7764)\n      World Map: Fix Ape Atoll tree type\n\nLucas (2):\n      Add kebos swamp cryptic clue\n      Add hydra slayer helms to slayer plugin\n\nMatthew Abel (1):\n      Hide auto retaliate from combat options (#7713)\n\nMax Weber (3):\n      runelite-client: centralize sprite overrides\n      ChatboxTextInput: Don&#39;t set built in update\n      Add Wiki plugin\n\nNoah Pittinger (1):\n      Add EqualsAndHashCode to Lombok data/value that do not extend Object\n\nNokkasiili (1):\n      Fix isVisable and isMinimapVisable spelling (Visable -&gt; Visible) (#7766)\n\nRyan Bohannon (1):\n      Add agility shortcut entry for Taverly Dungeon upper level\n\nSpedwards (1):\n      Update Wyrm bone xp in skill calc based on passed polls (#7614)\n\nTomas Slusny (11):\n      Unhide barrows widgets on plugin shutdown\n      Unhide NMZ widgets on plugin shutdown\n      Unhide raids widgets on plugin shutdown\n      Do not draw yellow dot for local player in barrows plugin\n      Use correct player dot color in barrows plugin\n      Push sidebar non-tab buttons to bottom\n      Clear Cerberus ghost on LOADING game state\n      Use CLANCHAT_INFO for party messages\n      Fix unmapped target property &quot;time&quot; warning\n      Use ItemVariations when using Reset option for shift-click\n      Add offset to loot tracker API\n\nWillThomas (1):\n      Reorder skill calc json values based on prayer XP (#7751)\n\nbjornenalfa (1):\n      Add Rada&#39;s Blessings to Prayer plugin\n\nrejectedpromise (1):\n      Add new lines at .rs2asm &lt;EOF&gt; to resolve build warnings (#7812)\n\nsyngfaa (1):\n      Fix SOUL_JOURNEY typo in Kourend Library plugin (#7733)\n</code></pre>'}}}]);
//# sourceMappingURL=76.6083c19d.chunk.js.map