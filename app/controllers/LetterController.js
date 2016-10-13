const nodemailer = require('nodemailer');

class LetterController {
  static createAndSend(req, res) {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const letterOptions = {
      to: req.body.recipient,
      from: req.body.sender,
      text: req.body.letter,
      subject: 'hi there',
    };

    console.log("This is the transporter", transporter)

    transporter.sendMail(letterOptions, (err, info) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(info);
      }
    });
  }
}

module.exports = LetterController;
