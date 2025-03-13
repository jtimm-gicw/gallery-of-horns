import { Form } from 'react-bootstrap';

function FilterForm({ setFilter }) {
  return (
    <Form>
      <Form.Group controlId="hornFilter">
        <Form.Label>Filter by Number of Horns:</Form.Label>
        <Form.Control as="select" onChange={(e) => setFilter(Number(e.target.value))}>
          <option value="all">All</option>
          <option value="1">1 Horn</option>
          <option value="2">2 Horns</option>
          <option value="3">3 Horns</option>
          <option value="100">100 Horns</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default FilterForm;