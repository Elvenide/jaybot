import List from '@mui/material/List';

import { LeaderboardRankEntry, LeaderboardRankHeader } from './LeaderboardRankEntry';

const inferMonthlyMessages = (xp) => {
    return Math.floor((xp ?? 0) / 15);
}

export default function RankLeaderboard({ users, isMonthly }) {
    return (
        <List sx={{ width: "100%" }}>
            <LeaderboardRankHeader />
            {users.map((user, i) => 
                <LeaderboardRankEntry key={i} pid={user?.playerId} avatar={user?.playerAvatar} username={user?.playerUsername} xp={user?.xp} level={user?.level} messages={isMonthly ? inferMonthlyMessages(user?.xp) : user?.messages} index={i} isMonthly={isMonthly} />
            )}
        </List>
    );
}