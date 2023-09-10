const {Worker} = require('bullmq');

const sendEmail = (ms) => new Promise((res, rej) => setTimeout(() => res() , ms*1000));

const worker =  new Worker('email-queue' , async (job) => {

    console.log('I got a message' , job.id);
    console.log('recieved email from ' , job.data.email);
    sendEmail(5);
    console.log(email.send);

});

