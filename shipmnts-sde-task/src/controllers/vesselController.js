const vessel = require('../models/vessel');

const createVessel = async (req, res) => {
    try {
        const { name, vessel_number, capacity } = req.body;

        if (!name || !vessel_number || !capacity) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newVessel = new vessel({
            name,
            vessel_number,
            capacity,
        });

        const savedVessel = await newVessel.save();
        res.status(201).json(savedVessel);

    }
    catch (error) {
        console.error('Error creating vessel:', error);
        res.status(500).json({ message: 'Internal server error' });

    }
};

const getByIdVessel = async (req, res) => {

    try {
        const veselId = req.params.id;
        const vesselData = await vessel.findById(veselId);
        if (!vesselData) {
            return res.status(404).json({ message: 'Vessel not found' });
        }
        res.json(vesselData);
    }
    catch (error) {
        console.error('Error fetching vessel:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const getAllVessel = async (req, res) => {

    try {
        const vessels = await vessel.find();
        res.json(vessels);


    }
    catch (error) {
        console.error('Error fetching vessels:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const DeleteVessel = async (req, res) => {
    try {

        const vesselId = req.params.id;
        const deletedVessel = await vessel.findByIdAndDelete(vesselId);

        res.status(200).json({ message: 'Vessel deleted successfully', vessel: deletedVessel });

    }

    catch (error) {
        console.error('Error deleting vessel:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = { createVessel, getByIdVessel, getAllVessel, DeleteVessel };

