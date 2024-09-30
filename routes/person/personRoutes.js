const express = require('express');
const router = express.Router();
const Person = require('../../models/Person');
// Post route to add a person
router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
})
// router.get('/name', async (req, res) => {
//     try {
//         const name = req.params.name;

//             const response = await Person.find({ name: name });
//             console.log('response fetched');
//             res.status(200).json(response);
        
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: err.message });
//     }
// })
router.get('/', async (req, res) => {
    try {
        console.log('---in person route-------')
        const params = req.query;
        console.log(params)
        if(params.password) delete params.password;
        const data = await Person.find(params);
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.messag });
    }
})

// router.get('/workType', async (req, res) => {
//     try {
//         const workType = req.params.workType;
//         if (workType == 'chef' || workType == 'manager') {
//             const response = await Person.find({ work: workType });
//             console.log('response fetched');
//             res.status(200).json(response);
//         }
//         else {
//             res.status(404).json({ error: "please provide correct work type" })
//         }
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: err.message });
//     }
// })


router.put('/:id', async (req, res) => {
    try {
        console.log('-----inside person update request ---------',req.body)
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, //return the updated document
            runValidators: true, //Run Mongoose validation
        })

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('data updated');
        res.status(200).json(response);
    } catch (err) {
        console.log('err');
        res.status(500).json({ error: err.message });
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        console.log('updated request');
        if (!response) {
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data delete');
        res.status(200).json({message: 'delete successfully'});
    }catch(err){
        console.log('err');
        res.status(500).json({ error: err.message }); 
    }
})
module.exports = router;