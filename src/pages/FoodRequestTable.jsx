const FoodRequestTable = ({ data, handleRequestDelete }) => {
  const {
    _id,
    donar_name,
    request_date,
    pickup_location,
    expired_date,
    donation_money,
    status,
  } = data || {};

  return (
    <tr>
      <td>{donar_name}</td>
      <td>{pickup_location}</td>
      <td>{expired_date}</td>
      <td>{request_date}</td>
      <td>$ {donation_money}</td>
      <th>
        {status === "delivered" ? (
          <button className="btn btn-success btn-sm">delivered</button>
        ) : (
          <button className="btn btn-warning btn-sm">available</button>
        )}
      </th>

      <th>
        <button
          onClick={() => handleRequestDelete(_id, status)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
    </tr>
  );
};
export default FoodRequestTable;
