import React from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";

class SearchBox extends React.Component {
  render() {
    return (
      <Consumer>
        {context => (
          <div className="search-box">
            <label htmlFor="location">
              Location
              <input
                onChange={context.handleLocationChange}
                id="location"
                value={context.location}
                placeholder="Location"
              />
            </label>
            <label htmlFor="animal">
              Animal
              <select
                id="animal"
                value={context.animal}
                onChange={context.handleAnimalChange}
                onBlur={context.handleAnimalChange}
              >
                <option />
                {ANIMALS.map(animal => (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="breeds">
              Breeds
              <select
                id="breeds"
                value={context.breed}
                onChange={context.handleBreedChange}
                onBlur={context.handleBreedChange}
                disabled={!context.breeds.length}
              >
                {context.breeds.map(breed => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </label>
            <button>Submit</button>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SearchBox;
