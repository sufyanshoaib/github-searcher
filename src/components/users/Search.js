import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            setAlert('Please enter something', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" name="text" placeholder="Search users..." value={text} onChange={onChange}/>
                <input type="submit" className="btn btn-dark btn-block" value="Search" />
            </form>
            {githubContext.users.length >0 &&
            (<button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>)
            }
        </div>
    )
};

export default Search
