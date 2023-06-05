const Filter = ({ filter, setFilter, setSort } : any) => {
  return (
    <div className="filter">
      <div className="filter-options">
        <div>
          <p>Status</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Imcomplete">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem Alfabética</p>
          <button onClick={() => setSort('ASC')}>ASC</button>
          <button onClick={() => setSort('DESC')}>DESC</button>
        </div>
      </div>
    </div>
  )
}

export default Filter