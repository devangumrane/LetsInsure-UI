export const insuranceFormConfig = {
  home: {
    fields: [
      {
        name: "pincode",
        label: "Pin Code",
        placeholder: "Enter Pincode",
      },
      {
        name: "mobile",
        label: "Mobile Number",
        placeholder: "+91 Enter Mobile Number",
      },
    ],
    actions: ["new", "renew", "download"],
  },

  car: {
    fields: [
      {
        name: "registration",
        label: "Registration Number",
        placeholder: "E.G. KA04DK8337",
      },
      {
        name: "mobile",
        label: "Mobile Number",
        placeholder: "+91 Enter Mobile Number",
      },
    ],
    actions: ["new", "renew", "download"],
  },

  bike: {
    fields: [
      {
        name: "registration",
        label: "Registration Number",
        placeholder: "E.G. MH12AB1234",
      },
      {
        name: "mobile",
        label: "Mobile Number",
        placeholder: "+91 Enter Mobile Number",
      },
    ],
    actions: ["new", "renew"],
  },

  health: {
    fields: [
      {
        name: "pincode",
        label: "Pin Code",
        placeholder: "Enter Pincode",
      },
      {
        name: "mobile",
        label: "Mobile Number",
        placeholder: "+91 Enter Mobile Number",
      },
    ],
    actions: ["port", "renew", "download"],
  },

  term: {
    fields: [
      {
        name: "mobile",
        label: "Mobile Number",
        placeholder: "+91 Enter Mobile Number",
      },
    ],
    actions: ["download"],
  },

  investment: {
    fields: [
      {
        name: "mobile",
        label: "Mobile Number",
        placeholder: "+91 Enter Mobile Number",
      },
    ],
    actions: ["download"],
  },

  business: {
    fields: [
      {
        name: "pincode",
        label: "Pin Code",
        placeholder: "Enter Pincode",
      },
      {
        name: "mobile",
        label: "Mobile Number",
        placeholder: "+91 Enter Mobile Number",
      },
    ],
    actions: ["renew", "download"],
  },
};
