const Neetcoin = artifacts.require('Neetcoin');

contract('Neetcoin', accounts => {
    let token;
    const admin = accounts[0];
    const user = accounts[1];
    before(async () => {
        token = await Neetcoin.deployed();
    });

    it('should mint 20 tokens to admin account', async () => {
        let adminBalance = await token.mint(admin, 20)
        let requiredBalance = web3.utils.toWei("20")
        assert.equal(adminBalance.toString, requiredBalance, "minting to admin completed successfully")
    });

    it('should not mint any tokens to user account', async () => {
        let userBalance = await token.mint(user, 20)
        assert.equal(userBalance, 0, "minting from user account failed")
    });

    it('should send 25 tokens from admin to user', async () => {
        let adminBalance = await token.mint(admin, 5)
        let userBalance = await token.send(admin, user, 25)
        assert.equal(adminBalance, 0, "tokens withdrawal from admin completed successfully")
        assert.equal(userBalance, 25, "transaction from admin recieved successfully")
    });
});
