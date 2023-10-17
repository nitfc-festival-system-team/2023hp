import axios from "axios";

//enumを使って、APIのエンドポイントを定義
export enum EndpointsType {
  notice = "/api/get_notices",
  schedule = "/api/get_schedules",
  stand = "/api/get_stands",
}

// データ取得用の関数
export async function fetchData(dataType: EndpointsType) {
  try {
    console.log("Feching data: ", dataType);
    const response = await axios.get(dataType);
    const data = response.data;

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
