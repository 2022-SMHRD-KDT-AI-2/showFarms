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
        console.log(res.data);
        setData(res.data);
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
            <th className="width1">총금액</th>
          </tr>
        </thead>
        {data.length >= 1 &&
          data.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{item.no}</td>
                  <td>{item.date.toString()}</td>
                  <td>{item.title}</td>
                  <td>{item.seller}</td>
                  <td>{item.buyer}</td>
                  <td>{item.amount}</td>
                  <td>{item.price}</td>
                  <td>{item.amount * item.price}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </TableContainer>
  );
};

export default Table;
