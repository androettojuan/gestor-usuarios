import React from "react";
import Button from "../Button/Button";
import Input from "../Input/input";
import useFormulario  from "../../hooks/useFormularios";


const UserForm = ({ handleSubmit }) => {

  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(formulario);
    reset();
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <Input
        label="Nombre"
        name="name"
        value={formulario.name}
        onChange={handleChange}
        placeholder="Nombre"
      ></Input>
      <Input
        label="Apellido"
        name="lastname"
        value={formulario.lastname}
        onChange={handleChange}
        placeholder="Apellido"
      ></Input>
      <Input
        label="Correo"
        name="email"
        value={formulario.email}
        onChange={handleChange}
        placeholder="Correo"
      ></Input>
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
