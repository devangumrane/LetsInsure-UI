import carIcon from "../assets/car.png";
import bikeIcon from "../assets/bike.png";
import healthIcon from "../assets/health.png";
import homeIcon from "../assets/home.png";
import businessIcon from "../assets/business.png";

export const navbarMenuConfig = {
  General: {
    title: "General Products",
    description:
      "Simple & Transparent! Policies that match all your insurance needs.",
    categories: [
      {
        label: "Car Insurance",
        icon: carIcon,
        isAsset: true,
        children: [
          "Comprehensive Car Insurance",
          "Third Party Car Insurance",
          "Zero Depreciation Cover",
          "Car Insurance Renewal",
        ],
      },
      {
        label: "Two Wheeler Insurance",
        icon: bikeIcon,
        isAsset: true,
        children: [
          "Bike Insurance",
          "Scooter Insurance",
          "Zero Depreciation Cover",
        ],
      },
      {
        label: "Health Insurance",
        icon: healthIcon,
        isAsset: true,
        children: [
          "Individual Health Plans",
          "Family Floater Plans",
          "Senior Citizen Health Insurance",
        ],
      },
      {
        label: "Business Insurance",
        icon: businessIcon,
        isAsset: true,
        active: true,
        children: [
          "Shop Insurance",
          "Office Insurance",
          "Professional Indemnity",
          "Cyber Insurance",
        ],
      },
    ],
  },

  // Life / Claims / Resources follow same pattern
};
