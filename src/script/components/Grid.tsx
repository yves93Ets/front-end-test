import * as React from 'react';
import { GridSquare } from './GridSquare'

interface Coverage {
    coverage: {}
    models: string[]
    years: number[];
};

export const Grid: React.FC<Coverage> = ({ coverage, models, years }) => {
    return (
        <div className="grid">
            <div className="years-container">
                {years.map(y => <div className="years-col" key={y} ><span>{y}</span></div>)}
            </div>
            {
                models.map(m => {
                    return (
                        <GridSquare key={m} vehiculeCoverageYears={coverage[m]} years={years} />
                    )
                })
            }
        </div >
    )
}