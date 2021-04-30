const router = require('express').Router();
const User = require('../../models/User');

// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get('/:id', async (req, res) => {
  try{
    const userData = await User.findByPk(req.params.id);
    if(!userData){
      res.status(404).json({message: "No User With That ID!"});
      return
    }
    res.status(200).json(userData);

  } catch (err) {
      res.status(500).json(err);
    
  }
  
});

// UPDATE a user
router.put('/:id', async (req, res) => {
  try{
    const userData = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    if(!userData[0]){
      res.status(404).json({message:"No User With That ID"})
    }
    res.status(200).json(userData)
  } catch {
    res.status(500).json(err);
  }
  
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  try{
    const userData = await User.destroy({
    where: {
      id: req.params.id,
    },
  })
  if(!userData){
    res.status(404).json({message:"No User With That ID"});
  }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }

  
});

module.exports = router;
