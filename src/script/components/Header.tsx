import * as React from 'react';
import logo from '../../images/logo.png'

interface Props {
    models: string[];
};
export const Header: React.FC<Props> = ({ models }) => {
    return (
        <div className="header">
            <div className="img-container">
                <img className="img" src={logo} alt="Logo" />
            </div>
            <div className="models-container">
                {models.map(m => <div className="models-col" key={m} >{m}</div>)}
            </div>
        </div >
    )
}

