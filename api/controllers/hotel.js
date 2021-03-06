import Hotel from "../models/Hotel.js"

export const createHotel = async(req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateHotel = async(req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new: true}
        )
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteHotel = async(req, res, next) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(
            req.params.id,
        )
        res.status(200).json(`Hotel successfully deleted`)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getDetailHotel = async(req, res, next) => {
    try {
        const hotel = await Hotel.findById(
            req.params.id,
        )
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getHotels = async(req, res, next) => {
    const { min, max, ...others } = req.query;
    
    try {
        // const hotels = await Hotel.find(req.query).limit(req.query.limit);
        const hotels = await Hotel.find({
            ...others,
            cheapestPrice: { $gt: min | 1, $lt: max || 99999},
        }).limit(req.query.limit);
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
}

export const countByCity = async(req, res, next) => {
    const cities = req.query.cities.split(',');
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city: city})
        }))
        res.status(200).json(list);
    } catch (error) {
        next(error);
    }
}

export const countByType = async(req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({type: 'hotel'});
        const apartmentCount = await Hotel.countDocuments({type: 'apartment'});
        const villaCount = await Hotel.countDocuments({type: 'villa'});
        const cottagesCount = await Hotel.countDocuments({type: 'cottages'});

        res.status(200).json([
            {type: 'hotel', count: hotelCount},
            {type: 'apartment', count: apartmentCount},
            {type: 'villa', count: villaCount},
            {type: 'cottages', count: cottagesCount},
        ]);
    } catch (error) {
        next(error);
    }
}