import React from "react";

export default function CreateForm(props) {
  return (
    <div>
      <form onSubmit={event => props.onSubmit(event)}>
        {/* <form onSubmit={event => props.onSubmit(event)}> */}
        email:
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={props.onChange}
          // onChange={event => props.onChange(event)}
          value={props.values.email}
        />
        <br />
        password:
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={props.onChange}
          value={props.values.password}
        />
        <br />
        <button type="submit">Submit</button>
        {/* <input type="submit" value="Save" /> */}
      </form>
    </div>
  );
}
