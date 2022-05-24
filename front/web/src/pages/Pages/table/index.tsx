import React from "react";
import {TableContainer} from "../../../styles/layout";

interface ITable {
    no: number,
    date: Date,
    title: string,
    seller: string,
    buyer: string,
    amount: number,
    price: number,
    total: number
}

const Table: React.FC = () => {
    const data = [{
        no: 1,
        date: Date().toString().slice(0, 24),
        title: "사과",
        seller: "ㅁㄴㅇㄹ",
        buyer: "ㅁㄴㅇㄹ",
        amount: 10,
        price: 1000,
        total: 10000
    }, {
        no: 1,
        date: Date().toString().slice(0, 24),
        title: "사과",
        seller: "ㅁㄴㅇㄹ",
        buyer: "ㅁㄴㅇㄹ",
        amount: 10,
        price: 1000,
        total: 10000
    }, {
        no: 1,
        date: Date().toString().slice(0, 24),
        title: "사과",
        seller: "ㅁㄴㅇㄹ",
        buyer: "ㅁㄴㅇㄹ",
        amount: 10,
        price: 1000,
        total: 10000
    }, {
        no: 1,
        date: Date().toString().slice(0, 24),
        title: "사과",
        seller: "ㅁㄴㅇㄹ",
        buyer: "ㅁㄴㅇㄹ",
        amount: 10,
        price: 1000,
        total: 10000
    }, {
        no: 1,
        date: Date().toString().slice(0, 24),
        title: "사과",
        seller: "ㅁㄴㅇㄹ",
        buyer: "ㅁㄴㅇㄹ",
        amount: 10,
        price: 1000,
        total: 10000
    }, {
        no: 1,
        date: Date().toString().slice(0, 24),
        title: "사과",
        seller: "ㅁㄴㅇㄹ",
        buyer: "ㅁㄴㅇㄹ",
        amount: 10,
        price: 1000,
        total: 10000
    }, {
        no: 1,
        date: Date().toString().slice(0, 24),
        title: "사과",
        seller: "ㅁㄴㅇㄹ",
        buyer: "ㅁㄴㅇㄹ",
        amount: 10,
        price: 1000,
        total: 10000
    }]
    return (
        <TableContainer>
            <table>
                <tr>
                    <th className="width3">No</th>
                    <th className="width1">date</th>
                    <th className="width2">post title</th>
                    <th className="width4">seller</th>
                    <th className="width4">buyer</th>
                    <th className="width4">amount</th>
                    <th className="width4">price</th>
                    <th className="width1">total price</th>
                </tr>
                {
                    data.map((item, index) => {
                        return <tr>
                            <td>{item.no}</td>
                            <td>{item.date}</td>
                            <td>{item.title}</td>
                            <td>{item.seller}</td>
                            <td>{item.buyer}</td>
                            <td>{item.amount}</td>
                            <td>{item.price}</td>
                            <td>{item.total}</td>
                        </tr>
                    })
                }
            </table>
        </TableContainer>
    )
}

export default Table