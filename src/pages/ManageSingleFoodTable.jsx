const ManageSingleFoodTable = ({ data, handleRequestConfirm }) => {
  const {
    _id,
    donar_name,
    request_date,
    pickup_location,
    donar_email,
    status,
  } = data || {};

  return (
    <tr>
      <td>{donar_name}</td>
      <td>{pickup_location}</td>

      <td>{request_date}</td>
      <td>{donar_email}</td>

      <th>
        {status === "delivered" ? (
          <button className="btn btn-success btn-sm">delivered</button>
        ) : (
          <button
            onClick={() => handleRequestConfirm(_id)}
            className="btn btn-warning btn-sm"
          >
            available
          </button>
        )}
      </th>
    </tr>
  );
};
export default ManageSingleFoodTable;
