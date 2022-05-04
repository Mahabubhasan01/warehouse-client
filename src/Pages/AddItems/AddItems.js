import React from "react";

const AddItems = () => {
  return (
    <div>
      <form >
        <label>
          Pick your favorite flavor:
          <select >
            {" "}
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddItems;
