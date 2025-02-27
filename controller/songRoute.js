const express = require('express');
const router = express.Router();
const FunniestLyrics = require('../schema/songSchema');


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
        const lyricsDoc=await FunniestLyrics.findById(req.params.id);
        if(song) lyricsDoc.song=song;
        if(artist) lyricsDoc.artist=artist;
        if(lyrics) lyricsDoc.lyrics=lyrics;
        if (addedBy) lyricsDoc.addedBy=addedBy;
        await lyricsDoc.save()
        res.json(lyricsDoc)
    }catch(err){
        res.status(500).json({message:err.message})
    }

    
})
router.delete('/funniest-lyrics/:id',async(req,res)=>{
    try{
        const lyrics = await FunniestLyrics.findByIdAndDelete(req.params.id);
        if (!lyrics) return res.status(404).json({ message: 'Lyrics not found' });
        res.json({message:'Lyrics deleted'})
       }catch(err){
        res.status(500).json({message:err.message})
     }
})

module.exports = router