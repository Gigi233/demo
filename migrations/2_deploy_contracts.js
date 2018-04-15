var Adoption = artifacts.require("Adoption");
var ConvertLib = artifacts.require("./ConvertLib.sol");
var Dust = artifacts.require("./Dust.sol");
var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  deployer.deploy(Adoption);
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, Dust);
  deployer.deploy(Dust);
  deployer.deploy(Voting,['Rama','Nick','Jose'],{gas:6700000}); 
};