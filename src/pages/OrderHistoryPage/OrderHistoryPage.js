import React from 'react'
import * as usersService from "../../utilities/users-service"

export default function OrderHistoryPage() {
  async function handleCheckToken() {
    const expDate = await usersService.checkToken()
    console.log(expDate)
  }

  return (
    <div className="OrderHistoryPage">
    <div>OrderHistoryPage</div>
    <button onClick={handleCheckToken}>Check when my login expires</button>
    </div>
  )
}
