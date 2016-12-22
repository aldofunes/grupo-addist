import React, { Component } from 'react';
import AWS from 'aws-sdk';
import uuid from 'uuid';
import { renderEmail } from 'react-html-email';
import EmailTemplate from './EmailTemplate';
import styles from './ApplicationForm.scss';
import Input from '../../../../components/Input';

class ApplicationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        value: '',
        state: null,
      },
      email: {
        value: '',
        state: null,
      },
      phone: {
        value: '',
        state: null,
      },
      birthDate: {
        value: '',
        state: null,
      },
      nationality: {
        value: '',
        state: null,
      },
      city: {
        value: '',
        state: null,
      },
      postCode: {
        value: '',
        state: null,
      },
      curriculum: {
        fileName: '',
        url: '',
        state: null,
      },
      message: {
        value: '',
        state: null,
      },
      success: false,
      error: ''
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onBirthDateChange = this.onBirthDateChange.bind(this);
    this.onNationalityChange = this.onNationalityChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.onPostCodeChange = this.onPostCodeChange.bind(this);
    this.onCurriculumChange = this.onCurriculumChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNameChange(event) {
    const value = event.target.value;
    const state = value ? 'success' : 'error';

    this.setState({ name: { value, state } });
  }

  onEmailChange(event) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const value = event.target.value;
    const state = regEx.test(value) ? 'success' : 'error';

    this.setState({ email: { value, state } });
  }

  onPhoneChange(event) {
    const value = event.target.value;
    const state = value ? 'success' : 'error';

    this.setState({ phone: { value, state } });
  }

  onBirthDateChange(event) {
    const value = event.target.value;
    const state = value ? 'success' : 'error';

    this.setState({ birthDate: { value, state } });
  }

  onNationalityChange(event) {
    const value = event.target.value;
    const state = value ? 'success' : 'error';

    this.setState({ nationality: { value, state } });
  }

  onCityChange(event) {
    const value = event.target.value;
    const state = value ? 'success' : 'error';

    this.setState({ city: { value, state } });
  }

  onPostCodeChange(event) {
    const value = event.target.value;
    const state = value ? 'success' : 'error';

    this.setState({ postCode: { value, state } });
  }

  onCurriculumChange(event) {
    const file = event.target.files[0];
    const fileId = uuid.v4();
    if (
      file.type !== 'application/pdf' &&
      file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' &&
      file.type !== 'application/msword'
    ) {
      throw new Error('Only PDF and Word documents are allowed');
    }

    const S3 = new AWS.S3(
      {
        region: 'us-east-1',
        accessKeyId: 'AKIAIZ4OUSCI2D4ZWKNQ',
        secretAccessKey: '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',
      },
    );

    S3.upload(
      {
        Bucket: 'bmgtech-cdn',
        Key: `www.addist.mx/curriculums/${fileId}-${file.name}`,
        Body: file,
      }, (error, data) => {
        if (error) {
          console.error(error);
        }

        this.setState(
          {
            curriculum: {
              fileName: file.name,
              url: data.Location,
              state: 'success',
            },
          },
        );
      },
    );
  }

  onMessageChange(event) {
    this.setState({ message: { value: event.target.value } });
  }

  onSubmit(event) {
    event.preventDefault();

    const {
      name: { value: name },
      email: { value: email },
      phone: { value: phone },
      birthDate: { value: birthDate },
      nationality: { value: nationality },
      city: { value: city },
      postCode: { value: postCode },
      curriculum: { fileName, url },
      message: { value: message },
    } = this.state;

    const ses = new AWS.SES(
      {
        region: 'us-east-1',
        accessKeyId: 'AKIAIZ4OUSCI2D4ZWKNQ',
        secretAccessKey: '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',
      },
    );

    ses.sendEmail(
      {
        Destination: {
          ToAddresses: [
            'hola@addist.mx',
          ],
        },
        Message: {
          Body: {
            Html: {
              Data: renderEmail(
                EmailTemplate(
                  {
                    name,
                    email,
                    phone,
                    birthDate,
                    nationality,
                    city,
                    postCode,
                    url,
                    fileName,
                    message,
                  },
                ),
              ),
            },
          },
          Subject: {
            Data: '[www.addist.mx] Formulario de aplicación', /* required */
          },
        },
        Source: 'no_reply@addist.mx', /* required */
        Tags: [
          {
            Name: 'Customer', /* required */
            Value: 'ADDIST', /* required */
          },
        ],
      }, (error) => {
        if (error) {
          return this.setState(
            {
              error: error.message,
            },
          );
        }

        return this.setState(
          {
            name: {
              value: '',
              state: null,
            },
            email: {
              value: '',
              state: null,
            },
            phone: {
              value: '',
              state: null,
            },
            birthDate: {
              value: '',
              state: null,
            },
            nationality: {
              value: '',
              state: null,
            },
            city: {
              value: '',
              state: null,
            },
            postCode: {
              value: '',
              state: null,
            },
            curriculum: {
              fileName: '',
              url: '',
              state: null,
            },
            message: {
              value: '',
              state: null,
            },
            success: true,
          },
        );
      },
    );
  }

  render() {
    const {
      name,
      email,
      phone,
      birthDate,
      nationality,
      city,
      postCode,
      curriculum,
      message,
      success,
      error,
    } = this.state;

    const valid = (
      name.state === 'success' &&
      email.state === 'success' &&
      phone.state === 'success' &&
      birthDate.state === 'success' &&
      nationality.state === 'success' &&
      city.state === 'success' &&
      postCode.state === 'success' &&
      curriculum.state === 'success'
    );

    return (
      <form className={styles.form} onSubmit={this.onSubmit}>

        {success ?
          <div className={styles.successMessage}>
            Recibimos tu información y nos comunicaremos contigo
          </div> :
          ''
        }

        {error ?
          <div className={styles.errorMessage}>
            {error}
          </div> :
          ''
        }

        <Input
          id="name"
          type="text"
          label="Nombre"
          placeholder="Juan Pérez"
          validationState={name.state}
          value={name.value}
          onChange={this.onNameChange}
        />
        <Input
          id="email"
          type="email"
          label="Correo electrónico"
          placeholder="juan.perez@ejemplo.com"
          validationState={email.state}
          value={email.value}
          onChange={this.onEmailChange}
        />
        <Input
          id="phone"
          type="tel"
          label="Teléfono"
          placeholder="+52 1 (55) 3333 3333"
          validationState={phone.state}
          value={phone.value}
          onChange={this.onPhoneChange}
        />
        <Input
          id="birthDate"
          type="date"
          label="Fecha de nacimiento"
          placeholder="dd-mm-aaaa"
          validationState={birthDate.state}
          value={birthDate.value}
          onChange={this.onBirthDateChange}
        />
        <Input
          id="nationality"
          type="text"
          label="Nacionalidad"
          placeholder="Mexicana"
          validationState={nationality.state}
          value={nationality.value}
          onChange={this.onNationalityChange}
        />
        <Input
          id="city"
          type="text"
          label="Municipio"
          placeholder="O delegación"
          validationState={city.state}
          value={city.value}
          onChange={this.onCityChange}
        />
        <Input
          id="postCode"
          type="text"
          label="Código postal"
          placeholder="51234"
          validationState={postCode.state}
          value={postCode.value}
          onChange={this.onPostCodeChange}
        />
        <div className={styles.uploadArea}>
          {curriculum.fileName ?
            <span>{curriculum.fileName}</span> :
            <span>Sube tu currículo haciendo click o arrastrándolo aquí (PDF o Word)</span>
          }
          <input type="file" onChange={this.onCurriculumChange}/>
        </div>
        <Input
          id="message"
          type="textArea"
          label="Mensaje"
          placeholder="Cuéntanos qué te gusta y en qué eres bueno."
          validationState={message.state}
          value={message.value}
          onChange={this.onMessageChange}
        />

        <button disabled={!valid} type="submit" className={styles.button}>Enviar</button>
      </form>
    );
  }
}

export default ApplicationForm;
