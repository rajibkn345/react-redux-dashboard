import swal from "sweetalert";

export const sweetalertBasic = (msg) => {
  swal(msg);
};

export const sweetalertStandard = (msg, type = "success") => {
  swal(msg.title, msg.text, type);
};
