import express from "express";
import path from "node:path";
import { getTop100, getUser, getUserMonthly } from "./ranks.js";
import type { Response } from "express";
import { getCachedStats } from "./stats.js";

const app = express();

// Serve static files from the React app
app.use(express.static(path.resolve('/app/web/build')));

// Util function to enable restrictive CORS headers on a route
function cors(res: Response) {
    res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8501');
}

// API get top 100 ranks
app.get("/api/ranks/top", async (req, res) => {
    cors(res);
    res.type("json");

    const top = await getTop100();
    if (!top) {
        res.send({ error: "ErrorNoExist: Failed to find all-time rank data." });
        return;
    }

    res.send(JSON.stringify(top));
});

// API get top 100 monthly ranks
app.get("/api/ranks/top/monthly", async (req, res) => {
    cors(res);
    res.type("json");

    const top = await getTop100(true);
    if (!top) {
        res.send({ error: "ErrorNoExist: Failed to find monthly rank data." });
        return;
    }

    res.send(JSON.stringify(top));
});

// API get rank data of single user
app.get("/api/ranks/user/:id", async (req, res) => {
    cors(res);
    res.type("json");

    if (!req.params.id) {
        res.send({ error: "ErrorBadInput: Invalid user ID provided." });
        return;
    }

    const user = await getUser(req.params.id);
    if (!user?.playerId) {
        res.send({ error: "ErrorNoExist: Failed to find user rank data." });
        return;
    }
    res.send(JSON.stringify(user));
});

// API get rank data of single user monthly
app.get("/api/ranks/user/:id/monthly", async (req, res) => {
    cors(res);
    res.type("json");

    if (!req.params.id) {
        res.send({ error: "ErrorBadInput: Invalid user ID provided." });
        return;
    }

    const user = await getUserMonthly(req.params.id);
    if (!user?.playerId) {
        res.send({ error: "ErrorNoExist: Failed to find user rank data." });
        return;
    }
    res.send(JSON.stringify(user));
});

// Public API get cached MC/Discord stats
app.get("/api/public/stats", (req, res) => {
    res.type("json");
    res.send(JSON.stringify(getCachedStats()));
});

// React route handling
app.get('*', (req, res) => {
    res.sendFile(path.resolve('/app/web/build/index.html'));
});

// Setup express
app.listen(8500);