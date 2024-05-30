const Url = require('../models/Url');

async function handleRedirectUrl(req, res){
    const shortId = req.params.shortId;
    const entry = await Url.findOneAndUpdate(
      { shortId },
      { $push: { visitedHistory: { timestamp: Date.now() } } },
      { new: true }
    );
  
    if (!entry) {
      return res.status(404).json({ message: 'Short URL not found' });
    }
    res.redirect(entry.redirectURL);
  }

  module.exports = {
    handleRedirectUrl,
  }