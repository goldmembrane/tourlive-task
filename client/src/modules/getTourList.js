import axios from "axios";

export const getTourList = () => {
  return axios.get(
    "http://tourlive-external-1isp315cijj1v-591526764.ap-northeast-2.elb.amazonaws.com:8888/v1/tours"
  );
};
