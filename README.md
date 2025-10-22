# Jaybot v5.1
An open-source Discord bot for the Zombie Horde Minecraft server, built with a TypeScript-Discord.js-ExpressJS backend, React frontend, and MongoDB database.

Now powered by Elvenide's [Brynjolf suite](https://www.npmjs.com/package/@brynjolf/commands) - a set of efficient, powerful, and adaptive systems for command creation, command handling, and event handling! Combined with TypeScript, this suite makes Discord bot creation easier and more powerful than ever before.

## Features

### Rank System
An advanced rank system that rewards users with XP when they send messages. Uses a cooldown system to ensure spamming is not rewarded. When users collect enough XP, they level up. A dynamic rank leaderboard webpage made with React allows users to see their standing in their Discord server, and compete with their fellow members for the top 3 spots on the leaderboard. XP is independently tracked monthly and all-time, allowing new members of a Discord server to still be able to compete with longtime veterans in the monthly rank leaderboards.

> **Rank Cards** (`/rank`)\
> ![RANK_CARD](docs/demo-rank-command.png)

> **Monthly Rank Cards** (`/rankmonthly`)\
> ![MONTHLY_RANK_CARD](docs/demo-rank-monthly-command.png)

> **Rank Leaderboards** (`/levels`)\
> ![RANK_LEADERBOARDS](docs/demo-rank-lb.png)

A live example of the Rank Leaderboards page can be found [here](https://zh.elvenide.com/ranks).

### Minecraft Stat Channels
A Discord category channel can be configured to contain two dynamic "stat" channels that show how many players are on the Minecraft server and whether the server is online, respectively. These stat channels automatically update every 6 minutes, allowing users to get mostly accurate information while avoiding Discord's rate limits.

> **Stat Channels** (setup with `/statadmin`)\
> ![STAT_CHANNELS](docs/demo-channel-stats.png)

### Reaction Roles
An automated system that allows users to react to a Discord message to give themselves a Discord role, with no permissions necessary for normal users and a fairly simple setup process for admins.

> **Reaction Roles** (setup with `/reactionroles`)\
> ![REACTION_ROLES](docs/demo-reaction-roles.png)

### Suggestion Votes
An automated system that adds yes/no voting reactions to messages sent in suggestion channels that start with the term `Suggestion:`. This is a simpler alternative to Discord's native polls feature. Discord's polls require manually setting up yes/no options, while the Suggestion Votes system does it automatically. Discord's polls also expire after a maximum of 2 weeks, whereas the Suggestion Votes system allows users to vote indefinitely.

> **Suggestion Votes** (only in channels named "suggestions")
> ![SUGGESTIONS](docs/demo-suggestions.png)

### Rule Roles
An automated system that adds a specific role to a user when they accept the Discord rules popup (you must configure this in Server Settings >> Safety Setup >> DM and Spam Protection >> Members must accept rules). This can be used to easily hide content from members that refuse to agree to your rules, or to only show content to those who do accept the rules.

## Getting It Yourself

### Prerequisites

- Docker
  - Download and install Docker to easily and securely run the bot with just one command
- Node.js
  - Download and install Node.js
- MongoDB
  - Create a MongoDB database, and write down the connection URL
  - Create user credentials for your database, and write down the username and password
- Discord Bot User
  - Create a Discord bot user, and write down the bot token and application ID
- Discord Server
  - Invite the bot to your server or a test server
- Minecraft Server (optional)
  - If using this bot for a Minecraft server, write down the server's IP address
  - Go to `src/systems/stats.ts` and replace all references to `Zombiehorde.net` with your server's IP address
    - *This will be configurable in .env in the future, but for now is hard-coded -- sorry!*

### Running

1. Clone this repository
2. Rename `sample.env` to `.env`
3. Fill out the `.env` file with your info from the prerequisites (such as bot token and MongoDB credentials)
4. Run `docker-compose -p jaybot up` to start the bot
  - Add a `-d` flag at the end to run the bot in the background without seeing the logs

### Rebuilding

- If you make changes to the code:
  - Rebuild the bot when starting it by running `docker-compose -p jaybot up --build`

### Stopping

To stop the bot, run `docker-compose -p jaybot down`.

## Changelogs:

### v5.1
- Fixed monthly ranks not resetting
- Replaced hard-coded references to server-specific emojis with general emojis
- Prevented Discord's system messages from acting as suggestion messages
- Removed rank-clearing command to prevent abuse
- Made running on Docker much simpler
- Added documentation for running the bot yourself
- Added these changelogs

### v1.0-5.0
- Added support for Minecraft server stats
- Added support for rule roles
- Added support for suggestion votes
- Added support for reaction roles
- Added support for rank cards
- Added support for monthly rank cards
- Added support for rank leaderboards
- Added support for stat channels
- Added support for rule roles
- Added support for suggestion votes
- Added support for reaction roles
- Added support for rank cards
- Added support for monthly rank cards
- Added support for rank leaderboards
- Added support for stat channels