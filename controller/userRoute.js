const mongoose = require('mongoose');
const FunniestLyrics = require('./schema/funniestLyrics');
require('dotenv').config();

const sampleData = [
    {
        "song": "Where is the Panchakattu",
        "artist": "M. M. Keeravani",
        "lyrics": "Where is the panchakattu... This is the panchakattu...",
        "addedBy": "FolkFan",
        "dateAdded": "2025-02-20T12:00:00Z"
    },
    {
        "song": "Ringa Ringa",
        "artist": "Devi Sri Prasad",
        "lyrics": "Ringa ringa roses... pockets full of masala doses...",
        "addedBy": "DSPFan",
        "dateAdded": "2025-02-19T15:30:00Z"
    },
    {
        "song": "Cinema Choopista Maava",
        "artist": "Anup Rubens",
        "lyrics": "Cinema choopista maava... anthega anthega...",
        "addedBy": "MovieLover",
        "dateAdded": "2025-02-18T09:45:00Z"
    },
    {
        "song": "Gudilo Badilo Madilo Vodilo",
        "artist": "Anirudh Ravichander",
        "lyrics": "Gudilo badilo madilo vodilo... love lo padipoya nenu...",
        "addedBy": "MelodyLover",
        "dateAdded": "2025-02-17T18:20:00Z"
    },
    {
        "song": "Bale Bale Magadivoy",
        "artist": "Gopi Sundar",
        "lyrics": "Aa aa ee ee oo oo... Naaku artham kavatledu...",
        "addedBy": "ComedyKing",
        "dateAdded": "2025-02-16T10:10:00Z"
    },
    {
        "song": "Jinthatha Jitha Jitha",
        "artist": "Devi Sri Prasad",
        "lyrics": "Jinthatha jitha jitha... yentha chesina mathram cheppevaadu ledu...",
        "addedBy": "DSPFan",
        "dateAdded": "2025-02-15T14:50:00Z"
    },
    {
        "song": "It's My Life",
        "artist": "S. Thaman",
        "lyrics": "It's my life... na istam ga untadi...",
        "addedBy": "RebelStar",
        "dateAdded": "2025-02-14T11:30:00Z"
    },
    {
        "song": "Ammayi Kitiki Pakkana",
        "artist": "M. M. Keeravani",
        "lyrics": "Ammayi kitiki pakkana... nenu venuka venaka...",
        "addedBy": "90sKid",
        "dateAdded": "2025-02-13T16:25:00Z"
    },
    {
        "song": "Blockbuster",
        "artist": "Mickey J Meyer",
        "lyrics": "Blockbuster blockbuster... nuvve superstar...",
        "addedBy": "MovieBuff",
        "dateAdded": "2025-02-12T09:10:00Z"
    },
    {
        "song": "Pakado Pakado",
        "artist": "Devi Sri Prasad",
        "lyrics": "Pakado pakado... neetho vundhe bhayankaram...",
        "addedBy": "MassFan",
        "dateAdded": "2025-02-11T13:40:00Z"
    }
];

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        await FunniestLyrics.insertMany(sampleData);
        console.log('Sample data inserted successfully');
    })
    .catch(err => console.log('Error: ', err));