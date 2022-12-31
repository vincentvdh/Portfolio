import { Pie, PieChart, Tooltip } from "recharts";

const data = [
    { name: "C#", value: 10 },
    { name: "TS", value: 30 },
    { name: "Php", value: 10 },
    { name: "JS", value: 30 },
    { name: "Python", value: 20 },

]


const Chart = () => {
    return (
        <div>

            <PieChart width={200} height={200}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                    label
                />

                <Tooltip />
            </PieChart>
        </div>
    );

}

export default Chart;