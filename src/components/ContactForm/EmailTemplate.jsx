import React from 'react';
import ReactHTMLEmail, {Email, Item, Box, Span} from 'react-html-email';

// set up React to support a few HTML attributes useful for legacy clients
ReactHTMLEmail.injectReactEmailAttributes();

const EmailTemplate = ({ name, email, message }) => {
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
          Recibiste un nuevo mensaje desde www.addist.mx
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
  message: React.PropTypes.string.isRequired,
}

export default EmailTemplate;