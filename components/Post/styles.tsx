import styled from 'styled-components';

export const PostWrapper = styled.div`
    cursor: pointer;
    margin: 30px 0;
    border-radius: 5px;
    background-color: #dcdcdc;
    -webkit-box-shadow: -4px 3px 20px 1px #000000;
    box-shadow: -4px 3px 20px 1px #000000;
    padding: 20px 10px;
    transition: all 0.35s;
    &:hover {
        transform: scale(1.005, 1.005);
        background-color: #eeeaea;
        -webkit-box-shadow: -4px 3px 20px 1px #525151;
        box-shadow: -4px 3px 20px 1px #525151;
    }
`;
