import * as yup from "yup";

export const phoneRequired = () => {
  return yup
    .string()
    .required("Số điện thoại không được bỏ trống")
    .test("is_valid_phone", "Số điện thoại không hợp lệ", (value) => {
      const regexPhoneNumber = /(0[3|5|7|8|9])+([0-9]{8})\b/g;

      return !!value.match(regexPhoneNumber);
    });
};

export const schemaAdvise = () => {
  return yup.object({
    name: yup.string().required("Họ và tên không được bỏ trống"),
    phoneNumber: phoneRequired(),
    time: yup.string().required("Khung giờ không được bỏ trống"),
  });
};
