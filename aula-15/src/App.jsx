/*
  GET OK
  POST OK
*/

import { useEffect, useState } from "react";
import axios from "axios";

import "./styles.css";

// const users = [
//   {
//     id: "1",
//     name: "Wesley Bruno Barbosa Silva",
//     email: "engwesleybruno@gmail.com",
//     phone: "(38)9988-9988",
//     birthDate: "1992-10-30",
//   },
//   {
//     id: "2",
//     name: "Bruno Silva Barbosa Wesley",
//     email: "engbruno@gmail.com",
//     phone: "(18)9988-9988",
//     birthDate: "1991-11-20",
//   },
// ];

const App = () => {
  const [users, setUsers] = useState([]);
  const [idUser, setIdUser] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
  });

  useEffect(() => {
    getAllUsers();
  }, []);

  //GETALL
  async function getAllUsers() {
    try {
      const response = await axios.get("https://backend-dh.vercel.app/users");
      // console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      alert("Erro ao tentar buscar dados");
    }
  }

  //POST
  async function createUser() {
    try {
      // console.log({
      //   name: formData.name,
      //   email: formData.email,
      //   phone: formData.phone,
      //   birthDate: formData.birthDate,
      // });

      const response = await axios.post("https://backend-dh.vercel.app/users", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        birthDate: formData.birthDate,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        birthDate: "",
      });
      getAllUsers();

      //setUsers([...users, response.data]);
    } catch (error) {
      alert("Erro ao tentar salvar usuario");
    }
  }

  //PUT
  async function editUser() {
    try {
      const reponse = await axios.put(
        `https://backend-dh.vercel.app/users/${idUser}`,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          birthDate: formData.birthDate,
        }
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        birthDate: "",
      });
      setIdUser("");
      alert("Usuario foi editado com sucesso");
      getAllUsers();
    } catch (error) {
      alert("Erro ao editar usuario");
    }
  }

  function fillState(user) {
    const date = user.birthDate.split("T")[0];

    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      birthDate: date,
    });

    setIdUser(user._id);
  }

  async function removeUser(id) {
    try {
      await axios.delete(`https://backend-dh.vercel.app/users/${id}`);
      alert("Usuario removido com sucesso");
      getAllUsers();
    } catch (error) {
      alert("Erro ao tentar remover usuário");
    }
  }

  function submitForm() {
    if (idUser) {
      editUser();
    } else {
      createUser();
    }
  }

  return (
    <div>
      <form>
        <input
          placeholder="Nome"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
        <input
          placeholder="Email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <input
          placeholder="Telefone"
          value={formData.phone}
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }
        />
        <input
          placeholder="Data de Nascimento"
          type="date"
          value={formData.birthDate}
          onChange={(event) =>
            setFormData({ ...formData, birthDate: event.target.value })
          }
        />
        <button type="button" onClick={submitForm}>
          Salvar
        </button>
      </form>

      <div className="container-table">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Data de nascimento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.birthDate}</td>
                <td>
                  <button onClick={() => fillState(user)}>Editar</button>
                  <button onClick={() => removeUser(user._id)}>Apagar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
