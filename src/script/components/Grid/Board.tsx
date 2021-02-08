import * as React from 'react';
import { Header, Grid } from './'
import data from '../../../data/coverage.json'

export const Board: React.FC = () => {
    return (
        <div className="container">
            <Header models={data['vehicle-models']} />
            <Grid coverage={data.coverage} models={data['vehicle-models']} years={data.years} />
        </div>
    )
}