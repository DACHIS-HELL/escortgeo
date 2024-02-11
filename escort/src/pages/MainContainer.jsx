import React, { useState } from 'react';
import UsersContainer from './UsersContainer';
import VipModelsContainer from './VipModelsContainer';
import '../css/main-container.css';
import TopModelsContainer from './TopModels';

function MainContainer() {
  const [filters, setFilters] = useState({
    ageFrom: '',
    ageTo: '',
    heightFrom: '',
    heightTo: '',
    weight:[],
    hairTypes: [],
    services: [],
    locations: [],
    districts: [],
    nationalities: [],
    showAgeInputs: false,
    showWeightInputs: false,
    showHeightInputs: false
  });

  const [showHairTypeMenu, setShowHairTypeMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showLocationsMenu, setShowLocationsMenu] = useState(false);
  const [showDistrictsMenu, setShowDistrictsMenu] = useState(false);
  const [showNationalitiesMenu, setShowNationalitiesMenu] = useState(false);

  const hairOptions = ['ქერა', 'ყავისფერი', 'შავი', 'წითელი','მუქი წითელი','ნაცრისფერი','ვერცხლისფერი','ოქროსფერი', 'მოკლე', 'საშუალო', 'გრძელი', 'ხვეული', 'სწორი', 'ბუნებრივი','სხვა'];
  const servicesOptions = ['მინეტი ურეზინოდ', 'გათავება სახეზე', 'ღრმა მინეტი', 'ანალური სექსი', 'პოზა 69', 'ეროტიული მასაჟი', 'ლესბო', 'ფუტ ფეტიში', 'კუნილინგუსი', 'რიმინგი(ანილინგუსი)', 'მინეტი დამცავით', 'გათავება პირში', 'გათავება სხეულზე', 'კოცნა', 'კლასიკური სექსი', 'სტრიპ დენსი', 'ოქროს წვიმა', 'წყვილი', 'ჯგუფური', 'სექს სათამაშო', 'დომინაცია'];
  const locationsOptions = ['ქუთაისი', 'ქობულეთი', 'ფოთი', 'სიღნაღი', 'რუსთავი', 'თელავი', 'თბილისი', 'ზუგდიდი', 'გუდაური', 'გორი'];
  const districtsOptions = ['ღრმაღელე', 'დიდი დიღომი', 'ვარკეთილი', 'ვაკე', 'წერეთელი', 'თემქა', 'საბურთალო', 'რუსთაველი', 'მარჯანიშვილი', 'ისანი', 'გლდანი', 'დიღომი', 'დიდუბე', 'ავლაბარი'];
  const nationalitiesOptions = ['ქართველი', 'რუსი', 'შავი', 'თურქი', 'სომეხი', 'აზერბაიჯანელი', 'ყაზახი', 'ბერძენი', 'უკრაინელი', 'სხვა'];
  const weightOptions = ['ძალიან გამხდარი', 'გამხდარი', 'სტანდარტული', 'სპორტული', 'მსუქანი'];

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedValue = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((v) => v !== value)
        : [...prevFilters[filterType], value];
      return { ...prevFilters, [filterType]: updatedValue };
    });
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

  const handleShowDropdown = (dropdownName) => {
    setShowHairTypeMenu(dropdownName === 'hairTypes' ? !showHairTypeMenu : false);
    setShowServicesMenu(dropdownName === 'services' ? !showServicesMenu : false);
    setShowLocationsMenu(dropdownName === 'locations' ? !showLocationsMenu : false);
    setShowDistrictsMenu(dropdownName === 'districts' ? !showDistrictsMenu : false);
    setShowNationalitiesMenu(dropdownName === 'nationalities' ? !showNationalitiesMenu : false);
    setFilters((prevFilters) => ({
      ...prevFilters,
      showAgeInputs: dropdownName === 'age' ? !prevFilters.showAgeInputs : false,
      showWeightInputs: dropdownName === 'weight' ? !prevFilters.showWeightInputs : false,
      showHeightInputs: dropdownName === 'height' ? !prevFilters.showHeightInputs : false
    }));
  };

  return (
    <div className="main-container">
      <div className="filter-container">
        <div className='drop hair-type-dropdown'>
          <button onClick={() => handleShowDropdown('services')}>სერვისები</button>
          {showServicesMenu && (
            <div className="hair-type-checkboxes">
              {servicesOptions.map((option) => (
                <div key={option} className="hair-type-checkbox">
                  <input
                    type="checkbox"
                    id={`service-${option}`}
                    value={option}
                    checked={filters.services.includes(option)}
                    onChange={() => handleFilterChange('services', option)}
                  />
                  <label htmlFor={`service-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='drop hair-type-dropdown'>
          <button onClick={() => handleShowDropdown('locations')}>მდებარეობა</button>
          {showLocationsMenu && (
            <div className="hair-type-checkboxes">
              {locationsOptions.map((option) => (
                <div key={option} className="hair-type-checkbox">
                  <input
                    type="checkbox"
                    id={`location-${option}`}
                    value={option}
                    checked={filters.locations.includes(option)}
                    onChange={() => handleFilterChange('locations', option)}
                  />
                  <label htmlFor={`location-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='hair-type-dropdown drop'>
          <button onClick={() => handleShowDropdown('districts')}>უბნები</button>
          {showDistrictsMenu && (
            <div className="hair-type-checkboxes">
              {districtsOptions.map((option) => (
                <div key={option} className="hair-type-checkbox">
                  <input
                    type="checkbox"
                    id={`district-${option}`}
                    value={option}
                    checked={filters.districts.includes(option)}
                    onChange={() => handleFilterChange('districts', option)}
                  />
                  <label htmlFor={`district-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='hair-type-dropdown drop'>
          <button onClick={() => handleShowDropdown('nationalities')}>ეროვნება</button>
          {showNationalitiesMenu && (
            <div className="hair-type-checkboxes">
              {nationalitiesOptions.map((option) => (
                <div key={option} className="hair-type-checkbox">
                  <input
                    type="checkbox"
                    id={`nationality-${option}`}
                    value={option}
                    checked={filters.nationalities.includes(option)}
                    onChange={() => handleFilterChange('nationalities', option)}
                  />
                  <label htmlFor={`nationality-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='drop'>
          <button onClick={() => handleShowDropdown('age')}>ასაკი</button>
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

        <div className='drop hair-type-dropdown'>
          <button onClick={() => handleShowDropdown('weight')}>წონა</button>
            {filters.showWeightInputs && (
              <div className='hair-type-checkboxes2'>
                {weightOptions.map((option) => (
                <div key={option} className="hair-type-checkbox" >
                  <input
                    type="checkbox"
                    id={`weight-${option}`}
                    value={option}
                    checked={filters.weight.includes(option)}
                    onChange={() => handleFilterChange('weight', option)}
                  />
                  <label htmlFor={`weight-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='drop'>
          <button onClick={() => handleShowDropdown('height')}>სიმაღლე</button>
          {filters.showHeightInputs && (
            <div>
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
            </div>
          )}
        </div>

        <div className="hair-type-dropdown drop">
          <button onClick={() => handleShowDropdown('hairTypes')}>თმის ტიპი</button>
          {showHairTypeMenu && (
            <div className="hair-type-checkboxes2">
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

        <button className='apply' onClick={handleApplyFilters}>ფილტრაცია</button>
      </div>
      <TopModelsContainer filters={filters}/>
      <VipModelsContainer filters={filters} />
      <UsersContainer filters={filters} />
    </div>
  );
}

export default MainContainer;
