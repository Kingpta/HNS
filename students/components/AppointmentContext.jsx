import React, { createContext, useState, useContext } from "react";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    // Add unique ID and timestamp
    const newAppointment = {
      ...appointment,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: "pending", // pending, confirmed, cancelled
    };

    setAppointments((prev) => [...prev, newAppointment]);
    return newAppointment;
  };

  const updateAppointmentStatus = (id, status) => {
    setAppointments((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status } : app))
    );
  };

  const cancelAppointment = (id) => {
    updateAppointmentStatus(id, "cancelled");
  };

  const getAppointmentsByProperty = (propertyId) => {
    return appointments.filter((app) => app.propertyId === propertyId);
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        addAppointment,
        updateAppointmentStatus,
        cancelAppointment,
        getAppointmentsByProperty,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => useContext(AppointmentContext);
