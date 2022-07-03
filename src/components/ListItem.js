import React, { useState } from "react";

export default function ListItem(props) {
  const [finish, setFinish] = useState(false);

  const finishTask = () => {
    setFinish(true);
  };
  return (
    <>
      {!finish ? (
        <>
          {" "}
          <div className="text-primary bh-light border border-primary">
            {props && props.content}
          </div>
          <button
            className="btn btn-success btn-sm mt-1 mb-3"
            onClick={() => finishTask()}
          >
            {" "}
            Finish task
          </button>{" "}
        </>
      ) : (
        <s className="text-danger border border-danger">
          {props && props.content}
        </s>
      )}
    </>
  );
}
