import React from 'react';
import ReactHTMLEmail, { A, Email, Item, Box, Span } from 'react-html-email';

// set up React to support a few HTML attributes useful for legacy clients
ReactHTMLEmail.injectReactEmailAttributes();

const EmailTemplate = ({
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
}) => {
  const textStyles = {
    fontFamily: 'Verdana',
    fontSize: 16,
    fontWeight: '300',
    color: '#333333',
  };


  return (
    <Email title="Nuevo mensaje">
      <Item align="center">
        <Span fontSize={24}>
          Recibiste una aplicación de trabajo desde www.addist.mx
        </Span>
      </Item>
      <Item>
        <Box cellSpacing={20} width="100%" style={{ borderTop: '1px dashed grey' }}>
          <Item>
            <Span {...textStyles}>
              <strong>Nombre</strong>: {name}
            </Span>
          </Item>
          <Item>
            <Span {...textStyles}>
              <strong>Correo electrónico</strong>: {email}
            </Span>
          </Item>
          <Item>
            <Span {...textStyles}>
              <strong>Teléfono</strong>: {phone}
            </Span>
          </Item>
          <Item>
            <Span {...textStyles}>
              <strong>Fecha de nacimiento</strong>: {birthDate}
            </Span>
          </Item>
          <Item>
            <Span {...textStyles}>
              <strong>Nacionalidad</strong>: {nationality}
            </Span>
          </Item>
          <Item>
            <Span {...textStyles}>
              <strong>Ciudad</strong>: {city}
            </Span>
          </Item>
          <Item>
            <Span {...textStyles}>
              <strong>Código postal</strong>: {postCode}
            </Span>
          </Item>
          <Item>
            <Span {...textStyles}>
              <strong>Currículo</strong>: <A href={url}>{fileName}</A>
            </Span>
          </Item>
          <Item>
            <Span {...textStyles}>
              <strong>Mensaje</strong>:<br />
              {message}
            </Span>
          </Item>
        </Box>
      </Item>
    </Email>
  );
};

EmailTemplate.propTypes = {
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  phone: React.PropTypes.string.isRequired,
  birthDate: React.PropTypes.string.isRequired,
  nationality: React.PropTypes.string.isRequired,
  city: React.PropTypes.string.isRequired,
  postCode: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  fileName: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired,
};

export default EmailTemplate;
