import * as React from 'react';
import { Header } from './Header'
import { Grid } from './Grid'
import data from '../../data/coverage.json'

export const Board: React.FC = () => {
    return (
        <div className="container">
            <Header models={data['vehicle-models']} />
            <Grid coverage={data.coverage} models={data['vehicle-models']} years={data.years} />
        </div>
    )
}