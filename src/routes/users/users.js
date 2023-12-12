const Users = require('../../models/user')
const Vehicle = require('../../models/vehicles')

exports.findUsers = async (req, res) => {
  try {
    if(!req.body.email || !req.body.password) {
      return res.status(400).json({ success: false, error: "Email and Password is required" })
    }
    let user = await Users.findOne({
      email: req.body.email,
      password: req.body.password
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
  if(!model || !price || !phno) {
    return res.status(400).json({ success: false, error: "Please fill out the mandatory fields" })
  }
  try {
    let vehicle = await Vehicle.create({
      model: model,
      price: price,
      phno: phno
    })

    return res.status(200).json({ success: true, data: vehicle })

  }
  catch (err) {
    return res.status(500).json({ success: false, error: err })
  }
}