const QRCode = require("qrcode");
const upi = require("upi-link");

main();
async function main() {
  let uri = upi
    .Static("xxxxx@ybl", "Xyz Abc")
    .setMerchant("ALPHABET")
    .setTxRef("INV001")
    .getLink();
  let res = await QRCode.toDataURL(uri);
  console.log(res);
}
