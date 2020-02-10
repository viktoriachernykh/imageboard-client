import React from "react";

export default function CreateForm(props) {
  return (
    <div>
      <form onSubmit={event => props.onSubmit(event)}>
        {/* <form onSubmit={event => props.onSubmit(event)}> */}
        Title:
        <input
          type="text"
          name="title"
          placeholder="write title"
          onChange={props.onChange}
          // onChange={event => props.onChange(event)}
          value={props.values.title}
        />
        <br />
        Url:
        <input
          type="text"
          name="url"
          placeholder="upload image"
          onChange={props.onChange}
          value={props.values.url}
        />
        <br />
        <button type="submit">Submit</button>
        {/* <input type="submit" value="Save" /> */}
      </form>
    </div>
  );
}
