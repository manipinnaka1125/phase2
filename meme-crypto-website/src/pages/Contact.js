// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const Contact = () => (
  <Section>
    <Container>
      <h2>Contact Us</h2>
      <Form>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Textarea placeholder="Message"></Textarea>
        <Button>Send Message</Button>
      </Form>
    </Container>
  </Section>
);

const Section = styled.section`
  padding: 60px 0;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    border-color: #61dafb;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
  &:focus {
    border-color: #61dafb;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #21a1f1;
  }
`;

export default Contact;
