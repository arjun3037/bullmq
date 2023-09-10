const {Queue} = require('bullmq')

const nitoficationQueue = new Queue('email-queue');

async function init(){
    const res = await nitoficationQueue.add('email to Arjun' ,{
        email : 'arjun.dev',
        subject :'Welcome message',
        body :'Hey Arjun Welcome back'
    });

    console.log("Job has been added" , res.id);

}

init();
