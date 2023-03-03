import React from "react";
import Title from "../Title";
import { MyGlobalProvider } from "../../Context";

const FilterUniqueTypes = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomFilter = ({ room }) => {
  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    pets,
    breakfast,
    HandleInputs,
  } = MyGlobalProvider();
  let types = FilterUniqueTypes(room, "type");
  types = ["all", ...types];
  const capacities = FilterUniqueTypes(room, "capacity");
  // console.log(types);
  // console.log(capacities);
  return (
    <div className="filters-all">
      <Title title="Search Rooms" />
      <form className="search-form">
        <div className="form-section">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={HandleInputs}
            className="form-control"
          >
            {types.map((TYPE, index) => {
              return (
                <option key={index} value={TYPE}>
                  {TYPE}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-section">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={HandleInputs}
            className="form-control"
          >
            {capacities.map((capa, index) => {
              return (
                <option key={index} value={capa}>
                  {capa}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-section">
          <label htmlFor="price">Price: ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={HandleInputs}
            className="form-control"
          />
        </div>
        <div className="form-section">
          <label htmlFor="size">Room Size</label>
          <input
            type="number"
            name="minSize"
            value={minSize}
            onChange={HandleInputs}
            className="form-control-size"
          />
          <input
            type="number"
            name="maxSize"
            value={maxSize}
            onChange={HandleInputs}
            className="form-control-size"
          />
        </div>
        <div className="form-section">
          <div className="form-section-brk-pets">
            <input
              type="checkbox"
              name="breakfast"
              checked={breakfast}
              onChange={HandleInputs}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="form-section-brk-pets">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={HandleInputs}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RoomFilter;
