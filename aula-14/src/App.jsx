import { useState, useEffect } from "react";
import axios from "axios";

import { createServer, Model } from "miragejs";

createServer({
  models: {
    course: Model,
  },
  seeds(server) {
    server.create("course", {
      name: "Desenvolvimento Frontend",
      duration: 80,
      teacher: "Wesley",
    });
    server.create("course", {
      name: "Desenvolvimento Mobile",
      duration: 100,
      teacher: "Bruno",
    });
    server.create("course", {
      name: "Desenvolvimento FullStack",
      duration: 80,
      teacher: "Ana",
    });
  },
  routes() {
    this.namespace = "api/courses";

    this.get("/", (schema, request) => {
      return schema.courses.all();
    });

    this.get("/:id", (schema, request) => {
      let id = request.params.id;
      return schema.courses.find(id);
    });

    this.post("/", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.courses.create(attrs);
    });

    this.put("/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let course = schema.courses.find(id);
      return course.update(newAttrs);
    });

    this.delete("/:id", (schema, request) => {
      let id = request.params.id;
      return schema.courses.find(id).destroy();
    });
  },
});

const App = () => {
  const [posts, setPosts] = useState([]);

  const [courses, setCourses] = useState([]);

  async function getDataByServer() {
    // try {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/posts"
    //   );
    //   const responseJSON = await response.json();
    //   setPosts(responseJSON);
    // } catch (error) {
    //   alert("Houve um erro na solicitacao");
    // }
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      alert("Houve um erro na solicitacao");
    }
  }

  async function newPost() {
    const post = {
      title: "Novo post",
      body: "Conteudo do post",
      userId: 1,
    };

    try {
      const reponse = await axios.post(
        "htt://jsonplaceholder.typicode.com/posts",
        post
      );

      // if(reponse.data.codeSuccess){
      //   alert("POST SALVO COM SUCESSO");
      // }
      alert("POST SALVO COM SUCESSO");
    } catch (error) {
      alert("Nao foi possivel salvar o post" + error);
    }
  }

  useEffect(() => {
    //getDataByServer();
  }, []);

  useEffect(() => {
    getCourses();
  }, []);

  async function getCourses() {
    const response = await axios.get("http://127.0.0.1:5173/api/courses");
    setCourses(response.data.courses);
  }

  async function newCourse() {
    try {
      const res = await axios.post("http://127.0.0.1:5173/api/courses", {
        name: "Design",
        duration: 20,
        teacher: "Renan",
      });

      setCourses([...courses, res.data.course]);

      //getCourses();
      alert("Curso salvo com sucesso");
    } catch (error) {
      alert("Erro ao salvar curso");
    }
  }

  async function getCourseById() {
    const response = await axios.get("http://127.0.0.1:5173/api/courses/2");
    console.log(">>>>>" + JSON.stringify(response.data));
  }

  async function editCourse() {
    try {
      const response = await axios.put("http://127.0.0.1:5173/api/courses/2", {
        name: "Mobile",
        duration: 20,
        teacher: "Ana",
      });
      console.log(response);
      alert("Recurso editado com sucesso");
      getCourses();
    } catch (error) {
      alert("Erro ao editar curso" + error);
    }
  }

  async function deleteCourse() {
    try {
      await axios.delete("http://127.0.0.1:5173/api/courses/1");
      alert("Sucesso ao excluir");
      getCourses();
    } catch (error) {
      alert("Erro ao excluir");
    }
  }

  useEffect(() => {
    getCourseById();
  }, []);

  //https://jsonplaceholder.typicode.com/posts

  return (
    <div>
      {/* {courses.length > 0 ? JSON.stringify(courses) : "Carregando"} */}
      {courses.length <= 0 ? (
        <h1>Carregando...</h1>
      ) : (
        courses.map((course) => (
          <div key={course.id}>
            <p>CURSO: {course.name}</p>
            <p>DURACAO: {course.duration}</p>
            <p>PROFESSOR: {course.teacher}</p>
            <br />
            <br />
          </div>
        ))
      )}
      <button onClick={newPost}>Salvar post</button>
      <button onClick={newCourse}>Salvar Curso</button>
      <button onClick={editCourse}>Editar curso</button>
      <button onClick={deleteCourse}>Excluir curso</button>
    </div>
  );
};

export default App;
