import { WaiterItem } from "./WaiterItem";
import React from "react";
import style from './WaiterList.module.css'

export function WaiterList ({ waiters, onWaiterDelete, onWaiterEdit }) {
    return (
        <table className={style.listTable}>
            <thead>
                <tr>
                    <th className={style.th}>First name</th>
                    <th className={style.th}>Phone</th>
                    <th className={style.th}>Actions</th>
                </tr>
            </thead>
            <tbody>
               {waiters.map(waiter => (
               <WaiterItem 
               key={waiter.id} 
               waiter={waiter}
               onWaiterDelete={onWaiterDelete}
               onWaiterEdit={onWaiterEdit}
                />
                ))}
            </tbody>
        </table>
    )
}