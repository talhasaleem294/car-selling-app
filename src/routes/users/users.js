const Users = require('../../models/user')
const Vehicle = require('../../models/vehicles')

exports.findUsers = async (req, res) => {
  try {
    let user = await Users.findOne({
      email: req.body.email
    })
    if (!!user && user.email) {
      return res.status(200).json({ success: true, data: "user authenticated" })
    }
    else if (!user) {
      return res.status(200).json({ success: false, error: "user not found" })
    }
  }
  catch (err) {
    return res.status(500).json({ success: false, error: err })
  }
}

exports.addVehicle = async (req, res) => {
  const { model, price, phno } = req.body
  try {
    let vehicle = await Vehicle.create({
      model: model,
      price: price,
      phno: phno
    })

    console.log("Vehicles: ", vehicle)
    return res.status(200).json({ success: true, data: vehicle })

  }
  catch (err) {
    return res.status(500).json({ success: false, error: err })
  }
}