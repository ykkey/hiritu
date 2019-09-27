import styled from 'styled-components';

const Block = styled.div`
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 50px;
    max-width: 90%;
    @media screen and (max-width: 1024px) {
      padding: 20px;
      width: 70%;
    }

    p {

        font-size:15px;
        margin-bottom: 20px;
    }
    dt {

        font-weight: bold;
        color : #4682b4;
    }
    dd {

        margin-bottom: 30px;
        margin-left: 0;
    }
    input {
        padding: 5px;
    }
`;
export default Block;