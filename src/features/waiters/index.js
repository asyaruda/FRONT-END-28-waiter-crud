import React from 'react'
import { EditForm } from './EditForm'
import { WaiterList } from './WaiterList'
import { useWaiters } from './hooks/useWaiters'

export function Waiter () {
    const {waiter, list, onWaiterSubmit, onWaiterDelete, onWaiterEdit} = useWaiters()

    return (
        <>
            <EditForm
            waiter={waiter}
            onWaiterSubmit={onWaiterSubmit}
        />
            <WaiterList
            waiters={list}
            onWaiterDelete={onWaiterDelete}
            onWaiterEdit={onWaiterEdit}
        />
        </>
    )
}


