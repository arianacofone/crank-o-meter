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
      text: req.body.letter,
      subject: req.body.subject,
      sender: req.body.sender,
    };

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
