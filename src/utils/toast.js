import { toast } from "react-toastify";

export const basicToast = (msg, type) => {
  toast[type](msg);
};
