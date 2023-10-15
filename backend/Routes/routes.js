const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
// Task Model
let Task = require("../models/Task");
// CREATE Task
router.route("/create-task").post(async (req, res, next) => {
  await Task.create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Task successfully created!",
        status: 200,
      });

      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
});
// READ Tasks
router.route("/").get(async (req, res, next) => {
  await Task.find()
    .then((result) => {
      res.json({
        data: result,
        message: "All tasks successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// Get Single Task
router.route("/:id").get(async (req, res, next) => {
  await Task.findById(req.params.id)
    .then((result) => {
      res.json({
        data: result,
        message: "Task successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// Update Task
router.route("/:id").put(async (req, res, next) => {
  await Task.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  })
    .then((result) => {
      console.log(result);
      res.json({
        data: result,
        message: "Task successfully updated.",
        status: 200,
      });
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
});
// Delete Task
router.route("/:id").delete(async (req, res, next) => {
  await Task.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: "Task successfully deleted.",
        status: 200,
      });
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
});
module.exports = router;
