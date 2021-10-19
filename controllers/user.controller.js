const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
}
module.exports.userInfo = (req, res) => {
    console.log(req.params);
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknow : ' + req.params.id)

    UserModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('ID unknown : ' + err);
    }).select('-password');
};

module.exports.updateUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknow : ' + req.params.id)
    try {
        await UserModel.findOneAndUpdate(
            {_id: req.params.id },
            {
                $set: {
                    bio: req.body.bio
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (!err) return res.send(docs);
                if (err) return res.status(500).send({ message: err });
            }
        )
    } catch (error) {
        return res.status(500).json({ message: error });

    }
};

module.exports.deleteUser = async(req, res) => {
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknow : ' + req.params.id)

    try {
        await UserModel.remove({ _id: req.params.id }).exec();
        return res.status(200).json({ message: "Sucessfuly deleted"})
        
    }catch (error) {
        return res.status(500).json({ message: error });

    }
};

module.exports.follow = async(req, res) => {
    if (!ObjectID.isValid(req.params.id) || !ObjectID.isValid(req.body.idToFollow))
    return res.status(400).send('ID unknow : ' + req.params.id)
    try {
        //add to th follower list
        await UserModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { following: req.body.idToFollow}},
            { new: true, upsert: true},
            (err, docs) => {
                if(!err) res.status(201).json(docs);
                else return res.status(400).jsos(err);
            }
        );
        //add to following List
        await UserModel.findByIdAndUpdate(
            req.body.idToFollow,
            { $addToSet: {followers: req.params.id}},
            { new: true, upsert: true},
            (err) => {
                if(err) return res.status(400).json(err);
            }
        )
        
    } catch (err) {
        return res.status(500).json({ message: err });
   
        
    }

};

module.exports.unfollow = async(req, res) => {
    if (!ObjectID.isValid(req.params.id)|| !ObjectID.isValid(req.body.idToUnfollow))
    return res.status(400).send('ID unknow : ' + req.params.id)
try {
    await UserModel.findByIdAndUpdate(
        req.params.id,
        { $pull: { following: req.body.idToUnfollow } },
        { new: true, upsert: true},
        (err, docs) => {
            if(!err) res.status(201).json(docs);
            else return res.status(400).jsos(err);
        }
    );
    //add to following List
    await UserModel.findByIdAndUpdate(
        req.body.idToUnfollow,
        { $pull:  { followers: req.params.id } },
        { new: true, upsert: true },
        (err) => {
             return res.status(400).jsos(err);
        }
    )
    
} catch (err) {
    return res.status(500).json({ message: err });

}
};

 