import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [inputItem, setInputItem] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);

  const [editItemIndex, setEditItemIndex] = useState();
  const handleAddItem = () => {
    console.log(data);
    if (inputItem.length !== 0) {
      setData([...data, inputItem]);
    }
    setInputItem("");
  };

  const handleDelete = (index) => {
    const updatedItems = data.filter((ele, ind) => {
      return ind !== index;
    });
    setData(updatedItems);
  };

  const handleEdit = (index) => {
    setInputItem(data[index]);
    setShow(false);
    setEditItemIndex(index);
  };

  const handleUpdate = () => {
    data.splice(editItemIndex, 1, inputItem);
    setShow(true);
    setInputItem("");
  };
  // console.log(inputItem)
  return (
    <>
      <div className="App">
        <div className="container">
          <div>
            <input
              className="inputTag"
              type="text"
              value={inputItem}
              onChange={(e) => setInputItem(e.target.value)}
            />
            {show ? (
              <button className="addUpdate" onClick={handleAddItem}>
                Add Item
              </button>
            ) : (
              <button className="addUpdate" onClick={handleUpdate}>
                Update
              </button>
            )}
          </div>
          <h2>
            {data.map((element, index) => {
              return (
                <>
                  <div className="content">
                    <div className="contentCommon contentEle" key={index}>
                      {element}
                    </div>
                    <button
                      className="contentCommon editBtn"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="contentCommon deleteBtn"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              );
            })}
          </h2>
        </div>
      </div>
    </>
  );
}
