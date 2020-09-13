import React, { useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({match}) => {

    const githubContext = useContext(GithubContext);
    const { getUser, loading, user, repos, getUserRepos } = githubContext;

    useEffect(() => {
        console.log("match.params.login", match.params.login);
        getUser(match.params.login);
        getUserRepos(match.params.login)
        // Below line removes error from console "React Hook useEffect has missing dependencies: 'getUser' and 'match.params.login'. Either include them or remove the dependency array. If 'getUser' changes too often, find the parent component that defines it and wrap that definition in useCallback"
        // eslint-disable-next-line
    }, []); //Empty set of bracket to get once, instead of loading again and again, since userEffects renders component again on change

    const {
        login,
        company,
        blog,
        name,
        avatar_url,
        location,
        bio,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;

    if (loading) return <Spinner />;

    return (
        <React.Fragment >
            <Link to='/' className="btn btn-light">Back to Search</Link>
            Hireable: { ' '}
            {hireable ? <i className="fas fa-check text-success" /> : 
            <i className="fas fa-times-circle text-danger" />}
            <div className="card grid-2">
                <div className="all-center" >
                    <img src={avatar_url} 
                        className='round-img' alt='' style={{width: '150px'}}
                    />
                    <h1>{name}</h1>
                    <p>{location}</p>
                </div>
                <div>
                    {bio && <React.Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </React.Fragment>}
                    <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && <React.Fragment>
                                <strong>Username:</strong> {login}
                            </React.Fragment>}
                        </li>
                        <li>
                            {company && <React.Fragment>
                                <strong>Company:</strong> {company}
                            </React.Fragment>}
                        </li>
                        <li>
                            {blog && <React.Fragment>
                                <strong>Website:</strong> {blog}
                            </React.Fragment>}
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className="card text-center">
                <div className='badge badge-primary'>Followers: {followers}</div>
                <div className='badge badge-success'>Following: {following}</div>
                <div className='badge badge-light'>Public Repos: {public_repos}</div>
                <div className='badge badge-dark'>Public Gists: {public_gists}</div>

            </div>
        </React.Fragment>
        
    )
    
};

export default User;
