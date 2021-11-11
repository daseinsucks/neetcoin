const Neetcoin = artifacts.require('Neetcoin');

contract('Neetcoin', accounts => {
    let token;
    let coin = '20';
    const admin = accounts[0];
    const user = accounts[1];
    const buyer = accounts[2];
    before(async () => {
        token = await Neetcoin.deployed();
    });

    it('should mint 20 tokens to admin', async () => {
        let tokensToMint = web3.utils.toWei(web3.utils.toBN(coin));
        const transaction = await token.mint(admin, tokensToMint);
        let adminTokenBalanceAfter = await token.balanceOf(admin);
        assert.equal(adminTokenBalanceAfter.toString(), tokensToMint.toString(), 'admins token balance after mint');
    });
  

    it('should not mint any tokens to user account', async () => {
        let tokensToMint = web3.utils.toWei(web3.utils.toBN(coin));
        try {
            await token.mint(user, tokensToMint, { from: user });
        } catch (e) {
            assert(e.message, 'error message must contain revert Ownable');
        }
    });


    it('should send 20 tokens from admin to user', async () => {
        let tokensToMint = web3.utils.toWei(web3.utils.toBN(coin));
        let tokensToSend = web3.utils.toWei(web3.utils.toBN(coin));
        let adminTokenBalanceBefore = await token.balanceOf(admin);
        const transaction = await token.mint(admin, tokensToMint);
        const transferToken = await token.send(admin, user, tokensToSend);
        let adminTokenBalanceAfter = await token.balanceOf(admin);
        let userTokenBalanceAfter = await token.balanceOf(user);
        assert.equal(adminTokenBalanceBefore.toString(), adminTokenBalanceAfter.toString(), 'withdrawal from admin account done successfully');
        assert.equal(userTokenBalanceAfter.toString(), tokensToSend.toString(), 'user recieved tokens successfully');
       
    });

    it('should send 20 tokens from admin when 20 eth received', async () => {
        let tokensToGet = web3.utils.toWei("20")
        const exchanging = await token.sell( {from: buyer, value: tokensToGet});
        let buyerBalanceAfterExchange= await token.balanceOf(buyer);
        assert.equal(tokensToGet.toString(), buyerBalanceAfterExchange.toString(), 'exchange completed successfully');
    });
});

