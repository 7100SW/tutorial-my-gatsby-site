export const DefaultFormData = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  nextOfKin: {
    firstName: "",
    lastName: "",
    email: "",
  },
};

export const FormDataReducer = (
  data: Record<string, any>,
  { type, payload }: Record<string, any>
) => {
  switch (type) {
    case "UPDATE_PERSONAL_INFO":
      return {
        ...data,
        ...payload,
      };
    case "UPDATE_NEXTOFKIN_INFO":
      return {
        ...data,
        nextOfKin: {
          ...data.nextOfKin,
          ...payload,
        },
      };
    default:
      return data;
  }
};