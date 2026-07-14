import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Navi from './Navi'

const ViewPet = () => {

  const [data, changeData] = useState([])

  const fetchData = () => {

    axios.get("http://localhost:3002/view-booking")
      .then((response) => {
        changeData(response.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Navi />

      <div className="container mt-4">

        <h2 className="text-center mb-4">
          View Pet Boarding Bookings
        </h2>

        <table className="table table-bordered table-striped table-hover">

          <thead className="table-dark">
            <tr>
              <th>Booking ID</th>
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Breed</th>
              <th>Age</th>
              <th>Weight (kg)</th>
              <th>Vaccination Status</th>
              <th>Owner Name</th>
              <th>Owner Phone</th>
              <th>Owner Email</th>
              <th>Check-in Date</th>
              <th>Check-out Date</th>
              <th>Kennel Number</th>
            </tr>
          </thead>

          <tbody>
            {data.map((value, index) => (
              <tr key={index}>
                <td>{value.booking_id}</td>
                <td>{value.pet_name}</td>
                <td>{value.pet_type}</td>
                <td>{value.breed}</td>
                <td>{value.age}</td>
                <td>{value.weight}</td>
                <td>{value.vaccination_status}</td>
                <td>{value.owner_name}</td>
                <td>{value.owner_phone}</td>
                <td>{value.owner_email}</td>
                <td>{value.check_in_date}</td>
                <td>{value.check_out_date}</td>
                <td>{value.kennel_number}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  )
}

export default ViewPet