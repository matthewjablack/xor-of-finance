module.exports = (deployer, network, accounts) => {
    const PermissionsLib = artifacts.require("PermissionsLib");
    const DummyContract = artifacts.require("DummyContract");
    const DebtRegistry = artifacts.require("DebtRegistry");
    const DebtToken = artifacts.require("DebtToken");
    const DebtKernel = artifacts.require("DebtKernel");
    const RepaymentRouter = artifacts.require("RepaymentRouter");
    const TokenTransferProxy = artifacts.require("TokenTransferProxy");
    var Ownable = artifacts.require("./zeppelin/ownership/Ownable.sol");
    var Killable = artifacts.require("./zeppelin/lifecycle/Killable.sol");
    var Authentication = artifacts.require("./Authentication.sol");
    var Markets = artifacts.require("./Markets.sol");

    deployer.deploy(Ownable);
    deployer.link(Ownable, Killable);
    deployer.deploy(Killable);
    deployer.link(Killable, Authentication);
    deployer.deploy(Authentication);
    deployer.deploy(Markets);
    deployer.deploy(PermissionsLib);
    deployer.link(PermissionsLib, DummyContract);
    deployer.deploy(DummyContract);
    deployer.link(PermissionsLib, DebtRegistry);
    return deployer.deploy(DebtRegistry).then(async () => {
        await deployer.deploy(DebtToken, DebtRegistry.address);
        await deployer.deploy(TokenTransferProxy);
        await deployer.deploy(RepaymentRouter, DebtRegistry.address, TokenTransferProxy.address);
        await deployer.deploy(DebtKernel, TokenTransferProxy.address);
    });
};
