import { Component } from "react";
import './search-bar.styles.css'
class SearchBar extends Component {

    render() {
        const { onChange } = this.props;
        return(
            <input placeholder="Search monsters" type='search' onChange={onChange} className='search-bar'/>
        )
    }
}

export default SearchBar;