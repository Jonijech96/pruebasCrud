import React, { useEffect, useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";

export const CrudApp = () => {
  const [equipos, setEquipos] = useState(() => {
    const baseDatos = window.localStorage.getItem("equiposData");

    if (baseDatos) {
      return JSON.parse(baseDatos);
    } else {
      return [];
    }
  });
  const [editData, setEditData] = useState(null);

  const addEquipo = (equipo) => {
    setEquipos([...equipos, equipo]);
  };

  useEffect(() => {
    window.localStorage.setItem("equiposData", JSON.stringify(equipos));
  }, [equipos]);
  const editEquipo = (equipoEdit) => {
    const newEquipos = equipos?.map((equipo) =>
      equipo.id === equipoEdit.id ? equipoEdit : equipo
    );
    setEquipos(newEquipos);
    setEditData(null);
  };
  const deleteEquipo = (id) => {
    const isDelete = window.confirm(
      `Deseas eliminar el registro con el id ${id} ?`
    );
    if (isDelete) {
      const newEquipos = equipos.filter((equipo) => equipo.id !== id);

      setEquipos(newEquipos);
    }
  };
  console.log(equipos);
  return (
    <div className="container">
      <h2>Crud de Equipos de futbol</h2>
      <CrudForm
        addEquipo={addEquipo}
        editData={editData}
        editEquipo={editEquipo}
      />
      <CrudTable
        deleteEquipo={deleteEquipo}
        equipos={equipos}
        setEditData={setEditData}
      />
    </div>
  );
};
