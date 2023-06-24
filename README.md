# XVBot-djs
## [Hopefully] A **multi-purpose discord bot** [made using discordjs], __heavy W.I.P__ as of now.  
### As of now, hosting your own instance  will work, as I've just bugfixed and tested it as of the 25th of June. (Also, ideally, use a formatter and/or a linter just to help make the code cleaner & easier to manage.)

---  

### [Progress/Plans for now]:
#### Completed [as of 25/06/23]:
- Basic Moderation commands.
- Few utility commands added
#### Planned features [as of 19/06/23]:
- (More) Utility commands
- Music commands [hopefully in working state]
- Misc/fun commands.  

---  

### Hosting your own instance:
1. ```
   git clone https://github.com/Minelordsuniverse/XVBot-djs.git
   ```  
2. Copy whatever is in step #1, and paste it in a terminal. And open the dir via any code/txt editor. Now, in the parent dir, create a file called `config.json` and put in the bot token and `clientId` (and to test it within your own testing server, `guildId` too), where you replace `YOURUSERTOKEN` with the bot token <a href="https://www.writebots.com/discord-bot-token/">(here's how to get your bot token and OAuth2).</a> Or you can also use dotenv, but you will have to make the code changes in `index.js` to redirect to the env file.  
3. ***[FOR LOCALLY HOSTING, __best just for testing purpose. Do make sure to bugfix if any errors.__]*** In VSC terminal (or any code editor term), type `node deploy-commands.js` and run it. If it works, then it will mention in terminal, and your bot will *[assuming you didn't screw up anywhere]*, come online.  
4. ***[Recommended, __if you want to keep your bot running 24/7__]*** If you want to keep it up and running, you can do it via <a href="https://replit.com/talk/ask/Hosting-a-Discord-bot-on-Repl/18608">repl.it and uptimerobot.com (guide linked)</a>. *{or any other way that you know for hosting services/monitors.}*  
---
