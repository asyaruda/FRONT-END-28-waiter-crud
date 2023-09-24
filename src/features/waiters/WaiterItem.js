import style from './WaiterItem.module.css'

export function WaiterItem ({ waiter, onWaiterDelete, onWaiterEdit }) {
    return (
      <tr>
        <td>{waiter.firstName}</td>
        <td>{waiter.phone}</td>
        <td>
          <button onClick={() => onWaiterEdit(waiter)} className={style.ml10}>Edit</button>
          <button onClick={() => onWaiterDelete(waiter.id)} className={style.ml10}>Delete</button>
        </td>
      </tr>
    )
  }