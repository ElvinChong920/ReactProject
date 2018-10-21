import React, { PureComponent } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

class Chart extends PureComponent {

    massageData = (data) => {
        return data.map((stat)=>({
            stats: stat.stat.name,
            value: stat.base_stat
        }));
    }

    render () {
        const { data } = this.props;
        const processed = this.massageData(data);
        return (
            <RadarChart width={350} height={200} outerRadius={60} data={processed}>
                <PolarGrid />
                <PolarAngleAxis dataKey='stats' />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name='Entei' dataKey='value' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
            </RadarChart>
        );
    }
}

export default Chart;
