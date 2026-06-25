const moodModel = require("../models/mood.model");

async function saveMood(req, res) {
  try {
    const mood = await moodModel.create({
      userId: req.user.id,
      mood: req.body.mood,
      confidence: req.body.confidence
    });

    res.status(201).json(mood);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }

  console.log(req.body)
}

async function moodHistory(req,res){
  const mood = await moodModel.find({
    userId : req.user.id
  })
  .sort({createdAt : -1});

  console.log(mood)

  return res.status(200).json({
    message : "Mood History Found.",
    mood
  })
}

module.exports = {
  saveMood, moodHistory
};