import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as React from "react";

function Login() {
  // const [disabled, setDisabled] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //ONCLICK FUNCTION FOR ADDING BENEFICIARY

  //Post Request to API
  async function addBeneficiary(e) {
    // setDisabled(true);
    const data = {
      email,
      password,
    };
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json);
    // setDisabled(false);
    window.location.reload();
  }

  return (
    <div
      className="d-flex justify-content-around"
      style={{
        marginTop: "40px",
      }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"
        />
        <Card.Body>
          <Card.Title>Login with email</Card.Title>
          <Card.Text
            style={{
              marginTop: "20px",
            }}
          >
            {/* Email */}
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </InputGroup>

            {/* Password */}
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
              <Form.Control
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </InputGroup>
          </Card.Text>
          <Button
            size="sm"
            variant="primary"
            // disabled={disabled}
            onClick={addBeneficiary}
          >
            Login
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
