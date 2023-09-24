import React from 'react'
import { WaitersApi } from '../../../api/server'

export function useWaiters () {
  const [waiter, setWaiter] = React.useState(undefined)
  const [list, setList] = React.useState([])

  React.useEffect(() => {
    WaitersApi.getList().then((data) => setList(data))
  }, [])

  const onWaiterSubmit = (formWaiter) => {
    if (formWaiter.id) {
      WaitersApi.update(formWaiter.id, formWaiter).then((newWaiter) => {
        const newList = list.map((waiter) => waiter.id === formWaiter.id ? newWaiter : waiter)

        setList(newList)
      })
    } else {
      WaitersApi.create(formWaiter).then((newWaiter) => setList([...list, newWaiter]))
    }
  }

  const onWaiterDelete = (id) => {
    const newList = list.filter((waiter) => waiter.id !== id)

    WaitersApi.delete(id).then(() => setList(newList))
  }

  const onWaiterEdit = (editWaiter) => {
    setWaiter(editWaiter)
  }

  return {
    waiter,
    list,
    onWaiterSubmit,
    onWaiterDelete,
    onWaiterEdit,
  }
}