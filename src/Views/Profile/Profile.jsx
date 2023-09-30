import React from 'react';
import useAuth from '../../custom-Hooks/useAuth';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Importa los componentes de React Bootstrap

const Profile = () => {
  const user = useAuth();

  return (
    <Container className='mt-5'>
      {user && (
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body>
                <Card.Title>{user.displayName}</Card.Title>
                <Card.Text>Email: {user.email}</Card.Text>
                {/* Otros datos del perfil del usuario */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Profile;
