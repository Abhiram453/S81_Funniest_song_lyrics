const express = require('express');
const router = express.Router();
const FunniestLyrics = require('../schema/userSchema');


router.get('/funniest-lyrics', async (req, res) => {
    try {
        const lyrics = await FunniestLyrics.find();
        res.json(lyrics);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/funniest-lyrics', async (req, res) => {
    const { song, artist, lyrics, addedBy } = req.body;
    const newLyrics = new FunniestLyrics({
        song,
        artist,
        lyrics,
        addedBy
    });

    try {
        const savedLyrics = await newLyrics.save();
        res.status(201).json(savedLyrics);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.get('/funniest-lyrics/:id', async (req, res) => {
    try {
        const lyrics = await FunniestLyrics.findById(req.params.id);
        if (!lyrics) return res.status(404).json({ message: 'Lyrics not found' });
        res.json(lyrics);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.put('/funniest-lyrics/:id',async(req,res)=>{
    const{song,artist,lyrics,addedBy}=req.body;
    try{
        const lyrics=await FunniestLyrics.findById(req.params.id);
        if(song) lyrics.song=song;
        if(artist) lyrics.artist=artist;
        if(lyrics) lyrics.lyrics=lyrics;
        if (addedBy) lyrics.addedBy=addedBy;
        await lyrics.save()
        res.json(lyrics)
    }catch(err){
        res.status(500).json({message:err.message})
    }

    
})
router.delete('/funniest-lyrics/:id',async(req,res)=>{
    try{
        const lyrics=await FunniestLyrics.findById(req.params.id);
        await lyrics.remove();
        res.json({message:'Lyrics deleted'})
       }catch(err){
        res.status(500).json({message:err.message})
     }
})

module.exports = router