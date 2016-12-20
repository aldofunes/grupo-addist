import React from 'react';
import {Config, SES} from 'aws-sdk';
import {renderEmail} from 'react-html-email';
import EmailTemplate from './EmailTemplate';
import styles from './ContactForm.scss';
import Input from './Input';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      nameValid: false,
      emailValid: false,
      messageValid: false,
      isSubmitting: false,
      success: false,
      errorMessage: ''
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeName(event) {
    const name = event.target.value;

    this.setState({
      name,
      nameValid: Boolean(name)
    });
  }

  onChangeEmail(event) {
    const email = event.target.value;

    this.setState({
      email,
      emailValid: Boolean(email)
    });
  }

  onChangeMessage(event) {
    const message = event.target.value;

    this.setState({
      message,
      messageValid: Boolean(message)
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const { name, email, message } = this.state;

    this.setState({
      isSubmitting: true
    });

    _gs('event', 'Web form submission');
    _gs('identify', {
      email,
      first_name: name,
    });

    const config = new Config({
      region: 'us-east-1'
    });

    const ses = new SES({
      region: 'us-east-1',
      accessKeyId: 'AKIAIZ4OUSCI2D4ZWKNQ',
      secretAccessKey: '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'
    });

    ses.sendEmail({
      Destination: {
        ToAddresses: [
          'hola@addist.mx'
        ]
      },
      Message: {
        Body: {
          Html: {
            Data: renderEmail(EmailTemplate({ name, email, message }))
          }
        },
        Subject: {
          Data: '[www.addist.mx] Formulario de contacto' /* required */
        }
      },
      Source: 'no_reply@addist.mx', /* required */
      Tags: [
        {
          Name: 'Customer', /* required */
          Value: 'ADDIST' /* required */
        }
      ]
    }, (error, data) => {
      if (error) {
        return this.setState({
          errorMessage: error.message
        });
      }

      if (data.MessageId) {
        this.setState({
          name: '',
          email: '',
          message: '',
          nameValid: false,
          emailValid: false,
          messageValid: false,
          isSubmitting: false,
          success: true,
          errorMessage: ''
        });
      }
    });
  }

  render() {
    const {
      name,
      email,
      message,
      nameValid,
      emailValid,
      messageValid,
      success,
      errorMessage
    } = this.state;

    const formValid = (nameValid && emailValid && messageValid);

    return (
      <form className={styles.form} onSubmit={this.onSubmit}>
        {errorMessage ? (
            <p style={{ color: 'red' }}>{errorMessage}</p>
          ) : ''}
        {success ? (
            <p style={{ color: 'green' }}>Gracias por contactarnos</p>
          ) : ''}
        <Input
          label="Nombre"
          type="text"
          value={name}
          onChange={this.onChangeName}
        />

        <Input
          label="Correo electrónico"
          type="email"
          value={email}
          onChange={this.onChangeEmail}
        />

        <Input
          label="Mensaje"
          type="textArea"
          value={message}
          onChange={this.onChangeMessage}
        />

        <button disabled={!formValid} className={styles.submitButton} type="submit">Submit</button>
      </form>
    )
  }
}

export default ContactForm;