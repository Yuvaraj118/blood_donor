const Donor = require('../model/Donor');

exports.getAllDonors = async (req, res) => {
    try {
        const donors = await Donor.find();
        res.json(donors);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

exports.getSingleDonor = async (req, res) => {
    try {
        const donor = await Donor.findOne({ donorId: req.params.id });
        if (!donor) {
            return res.status(404).json({ msg: 'Donor Not Found' });
        }
        res.json(donor);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}


exports.addNewDonor = async(req, res) =>{
    try{
        const donor = await Donor.findOne({donorId: req.body.donorId})
        if(!donor){
            const addedDonor = await Donor.create(req.body)
            res.json(addedDonor)
        }
        else{
            res.json({msg: 'Donor already exixts'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}


exports.updateDonor = async (req, res) =>{
    try{
        const donor = req.body
        const fetchedDonor = await Donor.findOne({donorId: donor.donorId})
        if(fetchedDonor){
            await Donor.updateOne(donor)
            res.json(await Donor.findOne({donorId: donor.donorId}))
        }
        else{
            res.json({msg: 'Donor doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}


exports.deleteDonor = async (req, res)=>{
    try{
        const donor = await Donor.findOne({donorId: req.params.id})
        if(donor){
            await Donor.deleteOne({donorId:donor.donorId})
            res.json(donor)
        }
        else{
            res.json({msg: 'donor doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}

