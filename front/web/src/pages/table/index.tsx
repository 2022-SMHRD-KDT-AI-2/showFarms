import React, { useEffect, useState } from "react";
import { TableContainer } from "../../styles/layout";
import { ITable } from "../../types";
import axiosInstance from "../../utils/AxiosInstance";

const Table = () => {
  const [data, setData] = useState<ITable[]>([]);
  useEffect(() => {
    axiosInstance
      .get(`/trade/${window.localStorage.getItem("id")}`)
      .then((res) => {
        if (res.data) setData(res.data);
      });
  }, []);
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th className="width3">No</th>
            <th className="width1">거래일자</th>
            <th className="width2">상품명</th>
            <th className="width4">판매자</th>
            <th className="width4">구매자</th>
            <th className="width4">거래량</th>
            <th className="width4">단가</th>
          </tr>
        </thead>
        {data.map((item, index) => {
          const date = new Date(item.trade_dt);
          return (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{`${date.getFullYear()} ${date.getMonth()} ${date.getDate()} ${date.getHours()}:${date.getMinutes()}`}</td>
                <td>{item.post_title}</td>
                <td>{item.mb_id}</td>
                <td>{item.buyer_id}</td>
                <td>{item.vol}</td>
                <td>{item.trade_price}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </TableContainer>
  );
};

export default Table;
