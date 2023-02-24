const Job = require("../models/Job");
const { BadRequestError, NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res
    .status(StatusCodes.OK)
    .json({
      message: "Here are the jobs",
      jobs,
      count: jobs.length,
      name: req.user.name,
    });
};

const getJob = async (req, res) => {
  res.send("get single job");
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ message: "Job is created", job });
};

const updateJob = async (req, res) => {
  res.send("update job");
};

const deleteJob = async (req, res) => {
  res.send("delete job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
