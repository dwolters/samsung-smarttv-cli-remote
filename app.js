const Remote = require('new-samsung-remote'); program = require('commander');

program
  .version('0.0.1')
  .usage('OPTIONS ON/OFF')
  .option('--on [on]', 'on key')
  .option('--off [off]', 'off key')
  .option('-h, --host [host]', 'Host')
  .parse(process.argv); const config = {
        ip_address: program.host, // required: IP address of your Samsung Smart TV
        name: "New Samsung Remote"
};

const remote = Remote(config); 
const key = program.args[0] == 'ON' || program.args[0] == '100' ? program.on : program.off; 

remote.sendKey(key, function(err, res){
    if (err) {
        throw new Error(err);
    } else {
        console.log(res);
    }
});
