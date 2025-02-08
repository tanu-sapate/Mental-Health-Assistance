import React, { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavbar";

const AdminHomepage = () => {
  const [requestedTherapists, setRequestedTherapists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const therapistsPerPage = 5; // Pagination limit

  useEffect(() => {
    // Fetch requested therapists from API
    fetch("/api/requested-therapists") // Replace with actual API
      .then((res) => res.json())
      .then((data) => setRequestedTherapists(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Pagination Logic
  const indexOfLastTherapist = currentPage * therapistsPerPage;
  const indexOfFirstTherapist = indexOfLastTherapist - therapistsPerPage;
  const currentTherapists = requestedTherapists.slice(indexOfFirstTherapist, indexOfLastTherapist);

  return (
    <div>
      <AdminNavbar />
      <div className="container mt-4">
        <h2 className="text-center pt-5 mt-5 mb-4">Requested Therapists</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>License No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentTherapists.map((therapist) => (
              <tr key={therapist.id}>
                <td>{therapist.name}</td>
                <td>{therapist.email}</td>
                <td>{therapist.licenseNumber}</td>
                <td>
                  <button className="btn btn-success me-2">Accept</button>
                  <button className="btn btn-danger">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-primary me-2"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            disabled={indexOfLastTherapist >= requestedTherapists.length}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHomepage;
