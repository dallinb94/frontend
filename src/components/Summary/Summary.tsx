import { useState } from "react";
import "../../components/Home/Home.css";
import FilterButton from "./FilterButton";
import DataTable from "./DataTable";
import data from '../../mock-data.json';
import styles from './Summary.module.css';
import { Link } from "react-router-dom";
import { useUserContext } from "../Login/UserContext";

function Summary() {

  const { user } = useUserContext();

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilters = ['Textile Structure', 'Burial Depth', 'Estimate Stature', 'Burial ID', 'Textile Function', 'Presence of Face Bundle', 'Ribbons'];
  const textileColorFilters = ['Red', 'Blue', 'Black', 'White']
  const ageAtDeathFilters = ['Newborn', 'Infant', 'Child', 'Adult']
  const headDirectionFilters = ['East', 'West']
  const sexFilters = ['Male', 'Female']
  const hairColorFilters = ['Brown', 'Black', 'Other']

  const columnsToInclude = ['id', 'headdirection', 'sex', 'depth', 'facebundles', 'preservation', 'haircolor', 'hair', 'length', 'ageatdeath', 'burialnumber', 'dateofexcavation'];
  const itemsPerPage = 15;

  const handleFilterClick = (filterName: string) => {
    if (selectedFilters.includes(filterName)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== filterName));
    } else {
      setSelectedFilters([...selectedFilters, filterName]);
    }
  };

  return (
    <section className="page-container">
      <div style={{ display: 'grid', gridTemplateColumns: '25% 1fr' }}>
        <div style={{ backgroundColor: 'rgb(25, 25, 24)', padding: '50px 20px 35px 20px', textAlign: 'left', height: '100vh' }}>
          <div style={{ marginBottom: '20px'}}>
            <h3 style={{ letterSpacing: '5px', margin: '0px' }}>FILTERS</h3>
          </div>

          <div>
            {toggleFilters.map((filter) => (
              <FilterButton
                key={filter}
                name={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>

          <div>
            <h3 style={{ letterSpacing: '5px' }}>TEXTILE COLOR</h3>
          </div>

          <div>
            {textileColorFilters.map((filter) => (
              <FilterButton
                key={filter}
                name={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>

          <div>
            <h3 style={{ letterSpacing: '5px' }}>HEAD DIRECTION</h3>
          </div>

          <div>
            {headDirectionFilters.map((filter) => (
              <FilterButton
                key={filter}
                name={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>

          <div>
            <h3 style={{ letterSpacing: '5px' }}>HAIR COLOR</h3>
          </div>

          <div>
            {hairColorFilters.map((filter) => (
              <FilterButton
                key={filter}
                name={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>

          <div>
            <h3 style={{ letterSpacing: '5px' }}>GENDER</h3>
          </div>

          <div>
            {sexFilters.map((filter) => (
              <FilterButton
                key={filter}
                name={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>

          <div>
            <h3 style={{ letterSpacing: '5px' }}>AGE AT DEATH</h3>
          </div>

          <div>
            {ageAtDeathFilters.map((filter) => (
              <FilterButton
                key={filter}
                name={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>
        </div>
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', padding: '50px 100px 30px' }}>
            <h3 style={{ letterSpacing: '5px', margin: '0px' }}>BURIAL DATA</h3>
            <div></div>
            <Link to={user?.isAuthenticated ? "/addBurial" : "/login"}>
              <button className={styles.addButton}>
                <h3 style={{ letterSpacing: '5px', margin: '0px', fontSize: '14px' }}>ADD RECORD</h3>
              </button>
            </Link>
          </div>

          <div style={{ display: 'grid', placeItems: 'center' }}>
            <DataTable data={data} columnsToInclude={columnsToInclude} itemsPerPage={itemsPerPage} />
          </div>
        </div>
      </div>
      <footer style={{ display: "grid", placeItems: "center" }}>
        <a href="/privacy" className="white-link">
          Privacy Policy
        </a>
      </footer>
    </section>
  );
}

export default Summary;
