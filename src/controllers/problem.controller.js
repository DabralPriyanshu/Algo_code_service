const BadRequest = require("../errors/badrequest.error");
const NotImplemented = require("../errors/notImplemented.error");

function addProblem(req, res, next) {
  try {
    //nothing implemented
    // throw NotImplemented("addProblem");
    // throw new BadRequest("Problem name", { missing: ["Problem-Name"] });
  } catch (error) {
    next(error);
  }
}
function getProblem(req, res, next) {
  try {
    //nothing implemented
    throw new BadRequest("Problem name", { missing: ["Problem-Name"] });
    // throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}
module.exports = {
  addProblem,
  getProblem,
};
