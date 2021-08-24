import './SearchBox.css'
const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input
                type = 'search'
                placeholder = 'Search archive'
                onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;