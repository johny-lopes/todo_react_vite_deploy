const Search = ({ search, setSearch }: any) => {
  return (
    <div className="search">
      <p>Buscar</p>
      <input 
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para pesquisar"
      />
    </div>
  )
}

export default Search