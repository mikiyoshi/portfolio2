import { useState, useEffect } from 'react';
import { Col, Row, Alert } from 'react-bootstrap';
import axios from 'axios';

export const Newsletter = ({ status, message, onValidated }) => {
  const [newsletterName, setNewsletterName] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState();

  const changeName = (e) => setNewsletterName(e.target.value);
  const changeEmail = (e) => setNewsletterEmail(e.target.value);

  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail('');
  };

  // https://github.com/axios/axios
  const onSubmit = (e) => {
    e.preventDefault();
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios
      .post(
        // 'https://formsubmit.co/ajax/mikiyoshi.kokura@gmail.com',
        {
          _subject: 'MK Profile contact form',
          name: newsletterName,
          email: newsletterEmail,
        },
        setSuccess(true),
        setNewsletterName(''),
        setNewsletterEmail('')
      )
      .then((response) => console.log('response: ', response))
      .catch((error) => console.log('error: ', error));
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          {success ? (
            <section>
              <h1>Thank you for your contact!</h1>
              <p>Your message was successful</p>
            </section>
          ) : (
            <form
            // action="https://formsubmit.co/mikiyoshi.kokura@gmail.com"
            // method="POST"
            >
              <input
                type="text"
                name="name"
                value={newsletterName}
                onChange={changeName}
                placeholder="your name"
                required
              />
              <input
                type="email"
                name="email"
                value={newsletterEmail}
                onChange={changeEmail}
                placeholder="test@email.com"
                required
              />
              <button onClick={onSubmit} type="submit">
                Send
              </button>
            </form>
          )}
        </Row>
      </div>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br></br> & Never miss latest updates
            </h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
