import React, {useEffect, useState} from "react";
import {TableContainer} from "../../../styles/layout";
import axiosInstance from "../../../utils/AxiosInstance";

interface ITable {
    no: number,
    date: Date,
    title: string,
    seller: string,
    buyer: string,
    amount: number,
    price: number
}

const Table = ({data}: { data: ITable[] }) => {
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
                {
                    data.length >= 1 && data.map((item, index) => {
                        return (
                            <tbody key={index}>
                            <tr>
                                <td>{item.no}</td>
                                <td>{1}</td>
                                <td>{item.title}</td>
                                <td>{item.seller}</td>
                                <td>{item.buyer}</td>
                                <td>{item.amount}</td>
                                <td>{item.price}</td>
                                <td>{1}</td>
                            </tr>
                            </tbody>)
                    })
                }
            </table>
        </TableContainer>
    )
}

export default Table