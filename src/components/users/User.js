import React, { Component } from 'react'
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    static propTypes = {
        loading : PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
    }
    render() {
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
        } = this.props.user;

        if (this.props.loading) return <Spinner />;

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
    }
}

export default User