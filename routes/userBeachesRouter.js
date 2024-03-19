const express = require("express");
const userBeachesRouter = express.Router();
const userBeaches = require("../models/userBeaches.js");

userBeachesRouter.get("/", (req, res, next) => {
  userBeaches.find((err, userBeaches) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(userBeaches);
  });
});

userBeachesRouter.get("/user", (req, res, next) => {
  userBeaches.find({ user: req.auth._id }, (err, userBeaches) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(userBeaches);
  });
});

userBeachesRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id;
  req.body.author = req.auth.username;
  const newUserBeach = new userBeaches(req.body);
  newUserBeach.save((err, savedUserBeach) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedUserBeach);
  });
});

userBeachesRouter.delete("/:userBeachId", (req, res, next) => {
  userBeaches.findOneAndDelete(
    { _id: req.params.userBeachId, user: req.auth._id },
    (err, deletedUserBeach) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res
        .status(200)
        .send(`Successfully deleted userBeach ${deletedUserBeach.strBeach}`);
    }
  );
});

userBeachesRouter.put("/:userBeachId", (req, res, next) => {
  userBeaches.findOneAndUpdate(
    { _id: req.params.userBeachId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedUserBeach) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedUserBeach);
    }
  );
});

module.exports = userBeachesRouter;
