const update = {
	$push: {
		ratedItems: {
			vendorItem: req.body.itemID,
			rating: req.body.rating
		}
	}
};

const options = { new: true, upsert: true };

User.findByIdAndUpdate(req.user.id, update, options, function (err, user) {
	// ...
});
