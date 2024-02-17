import React from "react";

type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

const Status = (props: StatusProps) => {
  let message;
  switch (props.status) {
    case "loading":
      message = "Loading...";
      break;
    case "success":
      message = "Data fetched successfully...";
      break;
    case "error":
      message = "Error occured...";
      break;
      default:
        message = 'Please select a valid status.'
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
