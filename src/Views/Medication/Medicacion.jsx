import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

function MedicationForm() {
  const [medication, setMedication] = useState({
    name: '',
    dosage: '',
    frequency: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setMedication({ ...medication, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes realizar la lógica para guardar el medicamento en tu base de datos o realizar otras acciones.
    console.log('Medication Submitted:', medication)
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} sm={8} md={{ span: 6, offset: 3 }}>
          <h1 className="text-center mb-4">Medication Registration</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Medication Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={medication.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Dosage</Form.Label>
              <Form.Control
                type="text"
                name="dosage"
                value={medication.dosage}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Frequency</Form.Label>
              <Form.Control
                type="text"
                name="frequency"
                value={medication.frequency}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default MedicationForm
