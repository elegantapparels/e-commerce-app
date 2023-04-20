import { useContext } from "react";
import { Link } from "react-router-dom";
import getAdminDashboardOptions from "../../../assets/adminDashboardOptions";
import PageFadeTransitionContainer from "../../../components/PageFadeTransitionContainer";
import { AdminContext } from "../../../contexts/adminContext";
import useTitle from "../../../hooks/useTitle";
import NumberCounter from "../../../components/NumberCounter";

export default function AdminDashboard() {
  const { admin } = useContext(AdminContext);
  const dashboardData = getAdminDashboardOptions(admin);
  useTitle("Admin Dashboard || Elegant Apparels");

  return (
    <PageFadeTransitionContainer className="relative pt-12 min-h-100vh">
      <div className="relative h-full dashboard">
        <div className="my-2 text-center text-white bg-gray-400">
          <span>Welcome to Elegant Apparels, {admin.name ?? "Admin"}</span>
        </div>
        <div className="grid items-center grid-cols-1 gap-4 mx-auto my-6 dashboard-options md:grid-cols-3 auto-rows-fr max-w-1200">
          {dashboardData.map((option, index) => (
            <Link to={option.path} key={index} className="h-full">
              <div className="h-full p-8 mx-4 text-gray-500 bg-gray-200 rounded-sm dashboard-option md:px-12 md:py-8">
                <div
                  style={{
                    color: `${option.accentColor}`,
                  }}
                  className="flex justify-between text-2xl font-medium dashboard-option-heading"
                >
                  <span className="dashboard-option-title">{option.title}</span>
                  <span className="dashboard-option-icon">
                    <i className={option.icon}></i>
                  </span>
                </div>
                <span className="inline-block my-2 text-lg dashboard-option-subheading">
                  {option.subHeading}
                </span>
                <div className="dashboard-option-content">
                  {option.subOptions &&
                    option.subOptions.map((subOption, index) => (
                      <div
                        className="flex justify-between dashboard-option-content-item text-3/4xl"
                        key={index}
                      >
                        <span className="dashboard-option-content-item-title">
                          {subOption.title}
                        </span>
                        <NumberCounter
                          className="dashboard-option-content-item-value"
                          to={parseInt(subOption.value)}
                          from={0}
                          duration={2}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageFadeTransitionContainer>
  );
}
