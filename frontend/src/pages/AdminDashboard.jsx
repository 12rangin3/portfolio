import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("messages/")
      .then((res) => setMessages(res.data))
      .catch(() => {
        // handled by interceptor
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg, index) => (
            <tr key={msg.id}>
              <td>{index + 1}</td>
              <td>{msg.name}</td>
              <td>{msg.email}</td>
              <td>{msg.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="danger" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
}

export default AdminDashboard;
