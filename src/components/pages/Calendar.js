import React, { useState, setState } from "react";
import calendarData from "./data-files/all-calendars.json";
import Modal from "react-modal";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "last_edited", headerName: "Last Edit", width: 130 },
  {
    field: "status",
    headerName: "Status",
    width: 90,
  },
];

const calData = calendarData;

Modal.setAppElement("#root");
export default function Calendar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [rowData, setRowData] = useState(calendarData);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [edit, setLastEdit] = useState("");
  const [status, setStatus] = useState("");

  function addRecord() {
    const record = {
      id: id,
      name: name,
      last_edited: edit,
      status: status,
    };
    let rowData = calData;
    rowData = rowData.concat(record);
    setRowData(rowData);
    setModalIsOpen(false);
  }

  return (
    <div className="component-routes">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={rowData} columns={columns} />
      </div>
      <button className="button" onClick={() => setModalIsOpen(true)}>
        + New Calendar
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            width: "400px",
            height: "400px",
          },
        }}
      >
        <form>
          <label>
            Enter ID:
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </label>
          <label>
            Enter Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Enter Last Edited:
            <input
              type="text"
              value={edit}
              onChange={(e) => setLastEdit(e.target.value)}
            />
          </label>
          <label>
            Enter Status:
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </label>
          <button className="button" onClick={addRecord}>
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
}
