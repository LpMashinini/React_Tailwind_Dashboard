import StatsGrid from "../dashboard/StatsGrid"
import ChartSection from "./ChartSection"
const Dashboard = () => {
  return (
    <div className="space-y-6">
      
      {/* stats Grid */}
      <StatsGrid/>
      {/* Charts Section */}
      <ChartSection/>
    </div>
  )
}

export default Dashboard
