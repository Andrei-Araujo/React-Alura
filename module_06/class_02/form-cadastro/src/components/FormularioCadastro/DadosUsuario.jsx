import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario({ aoEnviar }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        aoEnviar();
      }}
    >
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
