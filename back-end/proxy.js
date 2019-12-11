const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const router = express.Router();
const app = express();
const parseString = require('xml2js').parseString;
const model = require('./model');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

router.post('/zillow', async (req, res) => {
    try {
        request(
            {url: req.body.zpidUrl},
            (error, response, body) => {
                if(error || response.statusCode !== 200) {
                    return res.status(500).json({type: 'error', message: err.message});
                }
                parseString(body, async (err, result) => {
                    let x = result['SearchResults:searchresults'].response[0].results[0].result;
                    let today = new Date();
                    today = today.getFullYear() + '-' + today.getMonth();
                    let query = {accessDate: {$not: {today}}};
                    await model.deleteMany({query});

                    const post = new model({
                        zpid: x[0].zpid[0],
                        address: x[0].address[0].street[0],
                        city: x[0].address[0].city[0],
                        state: x[0].address[0].state[0],
                        zestimate: x[0].zestimate[0].amount[0]._,
                        yearBuilt: x[0].yearBuilt[0],
                        useCd: x[0].useCode[0],
                        sqft: x[0].lotSizeSqFt[0],
                        totalRooms: x[0].totalRooms[0],
                        bedrooms: x[0].bedrooms[0],
                        bathrooms: x[0].bathrooms[0],
                        accessDate: today
                    })
                    
                    const original = await model.findOne({zpid: `${x[0].zpid[0]}`});
                    if(!original){
                        post.save();
                    }
                    res.json(body);
                });
            }
        )
    }
    catch(err){
        res.json({message:err});
    }
})

module.exports = router;