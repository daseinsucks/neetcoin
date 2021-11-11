const ntcSell = artifacts.require('ntcSell');

contract('ntcSell', accounts => {
    let token;
    const admin = accounts[0];
    const user = accounts[1];
    before(async () => {
        token = await ntcSell.deployed();
    });

    it('should send 20 tokens to user when 20 eth received, then send 20 eth to admin', async () => {
        let tokensToGet = web3.utils.toWei("20")
        const exchanging = await token.sellNtc( {from: user, value: tokensToGet});
        let userBalanceAfterExchange= await token.balanceOf(user);
        assert.equal(tokensToGet.toString(), userBalanceAfterExchange.toString(), 'exchange completed successfully');
        //T0D0: check whether eth was received by admin 
    });
});
