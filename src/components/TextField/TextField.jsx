import { Form } from "react-bootstrap";

const TextField = (props) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        onBlur={props.onBlur}
        name={props.name}
      />
      <Form.Text className="text-danger">{props.error}</Form.Text>
    </Form.Group>
  );
};

export default TextField;
