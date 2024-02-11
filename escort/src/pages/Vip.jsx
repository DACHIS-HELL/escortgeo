import React from 'react'
import Header from './Header'

const Vip = () => {
  return (
    <>
    <Header/>
    <div className="vip">
      <h1>VIP - ის შეძენა და ფასები</h1>
       <p>
       TOP კვირა - 150 ლარი, 3 დღე - 100 ლარი, 1 დღე - 20 ლარი
       </p>
       <p>
       VIP თვე 100 ლარი, კვირა 50 ლარი დღე 7 ლარი
       </p>
       <p>
       სლაიდი თვე 180 ლარი კვირა 80 ლარი დღე 15 ლარი
       </p>
       <p>
       ანკეტის გამოჩენა პირველი ერთი თვე უფასო მომდევნო თვიდან 1 თვიანი პაკეტი 20 ლარი
       </p>
    </div>
    </>
  )
}

export default Vip