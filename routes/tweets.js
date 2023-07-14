var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require("../models/tweets");

router.post('/newTweet', (req,res) => {

    if(req.body.tweet === ""){
        res.json({ result: false, error: 'Le champs de sasie est vide' });
        return;
        }

   const newTweet = new Tweet({
            tweet: req.body.tweet,
            hashtag: req.body.hashtag
          });
        
          newTweet.save().then(data => {
              res.json({ result: true, tweet: data});
          })
        });

        
        router.delete('/:id', (req, res) => {
            Tweet.findOne({_id : req.params.id}).then(
                data  => {
                    if(data){
                       Tweet.deleteOne({_id :req.params.id}).then();
                       Tweet.find({}).then(data2 =>
                        res.json({result: true, tweet : data2}))
                       }else{
                        res.json({ result: false, error: "Tweet not found" });
                      }
                    });
                });
          
    
        
          // User already exists in database
          
    
    
    



module.exports = router;