import React, { useState, useCallback, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {FaGithub, FaPlus, FaSpinner, FaBars, FaTrash} from 'react-icons/fa';
import {Container, Form, SubmitButton, List, DeleteButton} from './styles';

import api from './../../services/api';

export default () => {

    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);

    //DidMount
    useEffect(() => {
        const repoStorage = localStorage.getItem('repositories');

        if (repoStorage) {
            setRepositories(JSON.parse(repoStorage));
        }
    }, []);

    //DidUpdate
    useEffect(() => {
        localStorage.setItem('repositories', JSON.stringify(repositories));
    }, [repositories]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        async function submit() {
            setLoading(true);
            setAlert(false);
            try {

                if (newRepo === '') {
                    throw new Error('You need to type a repository name.');
                }

                const response = await api.get(`/repos/${newRepo}`);
                
                const hasRepo = repositories.find(repo => repo.name === newRepo);
                
                if (hasRepo) {
                    throw new Error('Repository already exists!');
                }

                const data = {
                    name: response.data.full_name
                };
    
                setRepositories([...repositories, data]);
                setNewRepo('');
            } catch(error) {
                setAlert(true);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        submit();
    }, [newRepo, repositories]);

    function handleInputChange(e) {
        setNewRepo(e.target.value);
        setAlert(false);
    }

    const handleDelete = useCallback(repo => {
        const find = repositories.filter(r => r.name !== repo);

        setRepositories(find);
    }, [repositories]); 

    return (
        <Container>
            <h1>
                <FaGithub size={25}/>
                My Repositories
            </h1>

            <Form onSubmit={handleSubmit} error={alert}>
                <input 
                    type="text" 
                    placeholder="Add Repository" 
                    value={newRepo}
                    onChange={handleInputChange}
                />

                <SubmitButton loading={loading ? 1 : 0}>
                    {   loading ? 
                        <FaSpinner color="#fff" size={14}/>
                        :   
                        <FaPlus color="#fff" size={14} />
                    }                    
                </SubmitButton>
            </Form>

            <List>
                {repositories.map((repo, index) => (
                    <li key={ index }>
                        <span>
                            <DeleteButton onClick={() => handleDelete(repo.name)}>
                                <FaTrash size={14}/>
                            </DeleteButton>
                            { repo.name }
                        </span>
                        <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                            <FaBars size={20}/>
                        </Link>
                    </li>
                ))}
            </List>
        </Container>
    );
}