import styled from 'styled-components';

export const FormWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    width: 700px;
    height: 500px;
    background-color: #dcdcdc;
    -webkit-box-shadow: -4px 3px 20px 1px #000000;
    box-shadow: -4px 3px 20px 1px #000000;
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
    border-radius: 10px;
`;

export const InputField = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px 0;
`;

export const Label = styled.label`
    font-size: 1.5em;
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 2em;
`;

export const Textarea = styled.textarea`
    resize: none;
    height: 125px;
    padding: 10px;
    font-size: 1.2em;
`;

export const Button = styled.button`
    height: 50px;
    margin: 25px auto 0;
    width: 250px;
    border-radius: 10px;
    font-size: 1.5em;
    cursor: pointer;
`;

export const NotificationMessage = styled.p`
    position: absolute;
    top: 8%;
    left: auto;
    color: green;
    font-size: 2.5em;
`;
