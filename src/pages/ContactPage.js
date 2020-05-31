import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Hero from '../components/Hero';
import Content from '../components/Content';

import Axios from 'axios';

class ContactPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disable: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        console.log(event);
        const target = event.target;
        const value = target.type=== 'checkbox' ? target.checked : target.value;
        const name = target.name;
        //console.log(name + " " + value);
        this.setState(
            {
                [name]: value
            }
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.message)
        {
            alert("Your Message can't be empty!!");
            return;
        }
        this.setState({
                disable: true
            }
        );
        
        Axios.post('http://localhost:3030/api/email',this.state)
        .then(res => 
            {
                if(res.data.success)
                {
                    this.setState({
                        disabled: true,
                        emailSent: true
                    })
                }
                else
                {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    })
                }
            })
        .catch(err => {
            this.setState({
                    disabled: false,
                    emailSent: false
                }
            )
        })
    }

    render()
    {
        return(
            <div>
                <Hero title={this.props.title}  subTitle={this.props.subTitle} text={this.props.text}/>
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name"> Full Name </Form.Label>
                            <Form.Control id = "full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/> 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email"> Email </Form.Label>
                            <Form.Control id = "email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/> 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="message"> Message </Form.Label>
                            <Form.Control id = "message" name="message" as="textarea" row="5" value={this.state.message} onChange={this.handleChange}/> 
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send 
                        </Button>

                        {this.state.emailSent===true && <p className="d-inline success-msg"> Email Sent Successfully </p>}
                        {this.state.emailSent===false && <p className="d-inline error-msg"> Email Could Not Sent!!! </p>}
                    </Form>
                </Content>
            </div>
        );
    }
}

export default ContactPage;