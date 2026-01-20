BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
ResponsiveContainer,
Tooltip,

<ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} >
       <CartesianGrid strokeDasharray="3 3" stroke="#e228f0" opacity=[0.3]/>
           <XAxis dataKey="name" />
                   <YAxis />
              <Tooltip />
                     <Bar dataKey="uv" fill="url(#colorUv)" />
        <Bar dataKey="pv" fill="url(#colorPv)" />
       
        <defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6"/>
          </linearGradient>
          <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#94a3b8" />
            <stop offset="95%" stopColor="#64748b"/>
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
