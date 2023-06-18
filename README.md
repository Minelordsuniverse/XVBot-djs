# XVBot-djs
## [Hopefully] A **multi-purpose discord bot** [made using discordjs], __heavy W.I.P__ as of now.  
### As it is still heavily a W.I.P, I have not included the invite link. Hosting your own instance as of now using the base code may or may not work without some debugging/modifying. 

---  

### [Progress/Plans for now]:
#### Completed [as of 19/06/23]:
- Basic Moderation commands.
#### Planned features [as of 19/06/23]:
- Utility commands
- Music commands [hopefully in working state]
- Misc/fun commands.  

--  

### Hosting your own instance:
1. Clone the repository    [`git clone https://github.com/Minelordsuniverse/XVBot-djs.git either in terminal or git bash.`]
2. Within the repo, create a file called `config.json` and type in: `{
	"token": "YOURUSERTOKEN"
}`, where you replace `YOURUSERTOKEN` with the bot token (`https://www.writebots.com/discord-bot-token/`) or you can also use dotenv, but you will have to make the code changes in `index.js` to redirect to the env file.
3. ***[FOR LOCALLY HOSTING, __best just for testing purpose__]*** In VSC terminal (or any code editor term), type `node index.js` and run it. If it works, then "W rizz, no code error" should *[IDEALLY]* appear in terminal, and your bot will *[IDEALLY]* be online. 
4. ***[Recommended. __if you want to keep your bot running 24/7__]*** If you want to keep it up and running, I would recommend doing the third step with repl.it and uptimerobot.com (`https://replit.com/talk/ask/Hosting-a-Discord-bot-on-Repl/18608`). *{or any other way that you know for hosting services/monitors}*

(Code is free to use and [re]distribute.)
