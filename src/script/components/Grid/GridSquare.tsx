import * as React from 'react';

interface Props {
    vehiculeCoverageYears: number[]
    years: number[];
};

export const GridSquare: React.FC<Props> = ({ vehiculeCoverageYears, years }) => {
    const [coverageYear, setCoverageYear] = React.useState(vehiculeCoverageYears)
    const handleClick = (year) => {
        const newcoverageYear = coverageYear.includes(year)
            ? [...coverageYear.filter(y => year !== y)]
            : [year, ...coverageYear]
        setCoverageYear(newcoverageYear)
    }

    return (
        <div className="vehicule-coverage">
            {
                years.map(year => {
                    return (
                        <div
                            onClick={() => handleClick(year)}
                            key={year}
                            className={coverageYear.includes(year) ? "coverage" : "not-coverage"}
                        >
                        </div>
                    )
                })
            }
        </div>
    )
}