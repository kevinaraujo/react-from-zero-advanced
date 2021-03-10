import React from 'react';
import {FaGithub, FaPlus} from 'react-icons/fa';
import {Container, Form, SubmitButton} from './styles';

export default () => {
    return (
        <Container>
            <h1>
                <FaGithub size={25}/>
                My Repositories
            </h1>

            <Form onSubmit={() => {}}>
                <input type="text" placeholder="Add Repository" />

                <SubmitButton>
                    <FaPlus color="#FFF" size={14} />
                </SubmitButton>
            </Form>
        </Container>
    );
}