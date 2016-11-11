import React from 'react';
import styles from './ContactForm.scss';
import Input from './Input';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      firstNameValid: false,
      lastNameValid: false,
      emailValid: false,
      messageValid: false,
      isSubmitting: false,
      success: false,
    };

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeFirstName(event) {
    const firstName = event.target.value;

    this.setState({
      firstName,
      firstNameValid: Boolean(firstName)
    });
  }

  onChangeLastName(event) {
    const lastName = event.target.value;

    this.setState({
      lastName,
      lastNameValid: Boolean(lastName)
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
    const { firstName, lastName, email, message } = this.state;

    this.setState({
      isSubmitting: true
    });

    _gs('event', 'Web form submission');
    _gs('identify', {
      email,
      first_name: firstName,
      last_name: lastName
    });

    const self = this;

    _agile.set_email(email);

    _agile.create_contact({
      first_name: firstName,
      last_name: lastName,
      email,
      tags: 'Website'
    }, {
      success(data) {
        _agile.add_note({
          subject: 'Web form submission',
          description: message
        }, {
          success(data) {
            self.setState({
              firstName: '',
              lastName: '',
              email: '',
              message: '',
            });
          },
          error({ error }) {
            console.log({ error });
          }
        });
      },
      error({ error }) {
        console.log({ error });
      }
    });
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      message,
      firstNameValid,
      lastNameValid,
      emailValid,
      messageValid
    } = this.state;

    const formValid = (firstNameValid && lastNameValid && emailValid && messageValid);

    return (
      <form className={styles.form} onSubmit={this.onSubmit}>

        <Input
          label="First Name"
          type="text"
          value={firstName}
          onChange={this.onChangeFirstName}
        />

        <Input
          label="Last Name"
          type="text"
          value={lastName}
          onChange={this.onChangeLastName}
        />

        <Input
          label="Email"
          type="email"
          value={email}
          onChange={this.onChangeEmail}
        />

        <Input
          label="Message"
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