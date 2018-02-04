var mongoose = require('mongoose');
var Dua = mongoose.model('Dua');

module.exports = {
    showAll: function (req, res) {
        Dua.find({}, function (err, duas) { //get for findall
            if (err) {
                console.log('something went wrong');
            } else {
                res.json(duas);
            }
        }).sort({name: 1})
    },
    showDua: function (req, res) {
        Dua.findOne({ name: req.params.name }, function (err, duas) { //get for findone
            if (err) {
                console.log('something went wrong');
            } else {
                console.log('successfully displaying dua!');
                res.json(duas);
            }
        })
    },
    // createDua: function (req, res) {
    //     console.log("POST DATA", req.body); //post for creating new task
    //     var newDua = new Dua();
    //     newDua.name = req.body.name;
    //     newDua.arabic = req.body.arabic;
    //     newDua.transliteration = req.body.transliteration;
    //     newDua.translation = req.body.translation;
    //     newDua.save(function (err, Dua) {
    //         if (err) {
    //             console.log('something went wrong');
    //         } else {
    //             console.log('successfully added dua!', newDua);
    //             res.redirect('/duas');
    //         }
    //     })
    // },

    // editDua: function (req, res) {
        // var update = {
        // newDua.name = req.body.name,
        // newDua.arabic = req.body.arabic,
        // newDua.transliteration = req.body.transliteration,
        // newDua.translation = req.body.translation
        // }
    //     Dua.findByIdAndUpdate(req.params.id, update, function (err, updatedDua){
    //             if (err) {
    //                 console.log('something went wrong');
    //             } else {
    //                 console.log('successfully edited dua!');
    //                 res.redirect('/duas');
    //             }
    //     })
    // },

    // deleteDua: function (req, res) {
    //     Dua.findByIdAndRemove({ _id: req.params.id }, function (err, dua) { //delete
    //         if (err) {
    //             console.log('something went wrong');
    //         } else {
    //             console.log('successfully deleted dua!');
    //             res.redirect('/tasks');
    //         }
    //     })
    // }
};
