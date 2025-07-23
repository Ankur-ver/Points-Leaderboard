const express =require('express');
const router=express.Router();
const User=require('../models/Users');
const pointhistory=require('../models/pointshistory');

router.get('/users',async(req,res)=>{
 const users=await User.find();
 console.log(users);
 res.json(users);
})

router.post('/add-user',async(req,res)=>{
  console.log("hello add")
 const {name}=req.body;
 if(!name)return res.status(400).json({error:'Name is required'});

 const user=new User({name});
 await user.save();
 res.json(user);
})

router.post('/claim-points', async (req, res) => {
  const { userId } = req.body;
  if (!userId) return res.status(400).json({ error: 'User ID required' });

  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.totalPoints += points;
  await user.save();

  const history = new pointhistory({
    userId,
    userName: user.name,
    points
  });
  await history.save();

  const leaderboard = await User.find().sort({ totalPoints: -1 });

  res.json({ pointsAwarded: points, leaderboard });
});

module.exports = router;