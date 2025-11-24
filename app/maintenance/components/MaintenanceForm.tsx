"use client";

import { useState } from "react";

export default function MaintenanceForm() {
  const [records, setRecords] = useState<any[]>([]);
  const [form, setForm] = useState({
    date: "",
    mileage: "",
    service: "",
    cost: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addRecord = () => {
    setRecords([...records, form]);
    setForm({ date: "", mileage: "", service: "", cost: "" });
  };

  return (
    <>
      <div className="card p-3 shadow">
        <div className="mb-3">
          <label>Date</label>
          <input
            name="date"
            className="form-control"
            value={form.date}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Mileage</label>
          <input
            name="mileage"
            className="form-control"
            value={form.mileage}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Service Type</label>
          <input
            name="service"
            className="form-control"
            value={form.service}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Cost</label>
          <input
            name="cost"
            className="form-control"
            value={form.cost}
            onChange={handleChange}
          />
        </div>

        <button onClick={addRecord} className="btn btn-success">
          Add Record
        </button>
      </div>

      <h3 className="mt-5">Maintenance Records</h3>
      <ul className="list-group mt-3">
        {records.map((r, i) => (
          <li key={i} className="list-group-item">
            <strong>{r.date}</strong> – {r.service} ({r.mileage} km) — Rp
            {r.cost}
          </li>
        ))}
      </ul>
    </>
  );
}
