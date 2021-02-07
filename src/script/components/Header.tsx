import * as React from 'react';
import logo from '../../images/logo.png'

interface Props {
    models: string[];
};
export const Header: React.FC<Props> = ({ models }) => {
    return (
        <>
            <div className="img-container">
                <img className="img" src={logo} alt="Logo" />
            </div>
            <div className="models-container">
                {models.map(m => <span className="models-col" key={m} >{m}</span>)}
            </div>
        </>
    )
}

