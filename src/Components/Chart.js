import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{name: 'Date A', uv: 300, pv: 2400, amt: 2400},{name: 'Date b', uv: 400, pv: 2400, amt: 2400},{name: 'Date c', uv: 500, pv: 2400, amt: 2400},{name: 'Date d', uv: 400, pv: 2400, amt: 2400},{name: 'Date A', uv: 600, pv: 2400, amt: 2400},{name: 'Date y', uv: 90, pv: 2400, amt: 2400},];


export default function Chart() {
  return (
    <div>
      <h6>
        <h2>Spend Chart:</h2>
          <LineChart width={1445} height={300} data={data}>
            <Line  type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis  dataKey="name" />
            <YAxis />
          </LineChart>
      </h6>
    </div>
  );
}