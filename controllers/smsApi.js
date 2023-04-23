var unirest = require("unirest");

exports.smsAPI=(numbers,msg)=>{ 
var req = unirest("POST", "https://www.fast2sms.com/dev/bulkV2");

req.headers({
  "authorization": "feqMJ06RDgimslKNHrY3ut2v9EkhB1AUVb8S7IcapwxnQj4WXoiadpov75M0R9swItQKPqfOJBnbcLX4"
});
req.form({
  "sender_id": "TXTIND",
  "message": "This is a test message",
  "route": "v3",
  "numbers": "7779885160",
});
req.end(function (res) {
  if (res.error) throw new Error(res.error);
  console.log(res.body);
});



}