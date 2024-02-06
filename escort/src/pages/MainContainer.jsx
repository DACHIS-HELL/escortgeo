// MainContainer.jsx
import React, { useState } from 'react';
import UsersContainer from './UsersContainer';
import VipModelsContainer from './VipModelsContainer';
import '../css/main-container.css';

function MainContainer() {
  const [filters, setFilters] = useState({
    ageFrom: '',
    ageTo: '',
    weightFrom: '',
    weightTo: '',
    heightFrom: '',
    heightTo: '',
    hairTypes: [],
  });

  const [showHairTypeMenu, setShowHairTypeMenu] = useState(false);

  const hairOptions = ['ქერა', 'ყავისფერი', 'შავი', 'წითელი', 'მოკლე', 'საშუალო', 'გრძელი', 'ხვეული', 'სწორი', 'ბუნებრივი'];

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const handleHairTypeChange = (hairType) => {
    setFilters((prevFilters) => {
      const updatedHairTypes = prevFilters.hairTypes.includes(hairType)
        ? prevFilters.hairTypes.filter((type) => type !== hairType)
        : [...prevFilters.hairTypes, hairType];

      return { ...prevFilters, hairTypes: updatedHairTypes };
    });
  };

  const handleApplyFilters = () => {
    console.log('Applying filters:', filters);
  };

  return (
    <div className="main-container">
      <div className="filter-container">
        <div className='drop'>
        <button onClick={() => setFilters((prevFilters) => ({ ...prevFilters, showAgeInputs: !prevFilters.showAgeInputs }))}>ასაკი</button>
        {filters.showAgeInputs && (
          <div>
            <input
              type="text"
              id="ageFromFilter"
              value={filters.ageFrom}
              onChange={(e) => handleFilterChange('ageFrom', e.target.value)}
              placeholder="დან"
            />
            <input
              type="text"
              id="ageToFilter"
              value={filters.ageTo}
              onChange={(e) => handleFilterChange('ageTo', e.target.value)}
              placeholder="მდე"
            />
          </div>
        )}
        </div>
        <div className='drop'>
        <button onClick={() => setFilters((prevFilters) => ({ ...prevFilters, showWeightInputs: !prevFilters.showWeightInputs }))}>წონა</button>
        {filters.showWeightInputs && (
          <>
            <input
              type="text"
              id="weightFromFilter"
              value={filters.weightFrom}
              onChange={(e) => handleFilterChange('weightFrom', e.target.value)}
              placeholder="დან"
            />
            <input
              type="text"
              id="weightToFilter"
              value={filters.weightTo}
              onChange={(e) => handleFilterChange('weightTo', e.target.value)}
              placeholder="მდე"
            />
          </>
        )}
        </div>
        <div className='drop'>
        <button onClick={() => setFilters((prevFilters) => ({ ...prevFilters, showHeightInputs: !prevFilters.showHeightInputs }))}>სიმაღლე</button>
        {filters.showHeightInputs && (
          <>
            <input
              type="text"
              id="heightFromFilter"
              value={filters.heightFrom}
              onChange={(e) => handleFilterChange('heightFrom', e.target.value)}
              placeholder="დან"
            />
            <input
              type="text"
              id="heightToFilter"
              value={filters.heightTo}
              onChange={(e) => handleFilterChange('heightTo', e.target.value)}
              placeholder="მდე"
            />
          </>
        )}

        </div>
        <div className="hair-type-dropdown drop">
          <button onClick={() => setShowHairTypeMenu(!showHairTypeMenu)}>თმა</button>
          {showHairTypeMenu && (
            <div className="hair-type-checkboxes">
              {hairOptions.map((option) => (
                <div key={option} className="hair-type-checkbox">
                  <input
                    type="checkbox"
                    id={`hairType-${option}`}
                    value={option}
                    checked={filters.hairTypes.includes(option)}
                    onChange={() => handleHairTypeChange(option)}
                  />
                  <label htmlFor={`hairType-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <button className='apply' onClick={handleApplyFilters}>გაფილტვრა</button>
      </div>
      <VipModelsContainer filters={filters} />
      <UsersContainer filters={filters} />
    </div>
  );
}

export default MainContainer;

