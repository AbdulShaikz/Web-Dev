const { nanoid } = require("nanoid")
const Url = require('../models/Url');

async function handleGenerateNewShortUrl(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'error', message: "Url is required!"})
    const shortId = nanoid(8);
    await Url.create({
        shortId : shortId,
        redirectURL: body.url,
        visitedHistory: [],
    })

    return res.json({id: shortId, message: 'Redirected!'})
}

async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const result = await Url.findOne({shortId});
    return res.json({totalClicks: result.visitedHistory.length, analytics: result.visitedHistory});
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics
}