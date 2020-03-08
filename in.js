const IS_CHROME = !!window.chrome || navigator.vendor === 'Google Inc.';

function log(message) {
	console.log(message);
}

if( ! IS_CHROME) {
	BigInt = require('big-integer');
	log('Loaded BigInt dependency ✅');
}

ArkCrypto = require('@arkecosystem/crypto');
log('Loaded Ark Crypto dependency ✅');

ArkCrypto.Managers.configManager.setConfig({
	network: require('@arkecosystem/crypto/dist/networks/devnet/network.json'),
	genesisBlock: require('@arkecosystem/crypto/dist/networks/devnet/genesisBlock.json'),
	milestones: require('@arkecosystem/crypto/dist/networks/devnet/milestones.json'),
	exceptions: require('@arkecosystem/crypto/dist/networks/devnet/exceptions.json'),
});
ArkCrypto.Managers.configManager.setHeight(4006000);
log('Updated ConfigManager to match Ark Devnet config ✅');

TransactionBuilder = ArkCrypto.Transactions.BuilderFactory.transfer().instance();
log('Initiated TransactionBuilder ✅');
log('Creating transfer tx...');

const tx = TransactionBuilder.amount('1')
	.version(2)
	.recipientId('D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax')
	.nonce('0')
	.vendorField('Sent from the browser!')
	.sign('bla bla bla');
const struct = tx.getStruct();

struct.amount = struct.amount.toString();
struct.nonce = struct.nonce.toString();
struct.fee = struct.fee.toString();

log('Transaction created ✅');
log(struct);
log(ArkCrypto.Utils.BigNumber.make(10).plus(10).toString());