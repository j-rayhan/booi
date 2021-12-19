import * as React from 'react'
import Image from 'next/image'
import type { NextPage } from 'next'
//
import cardImag from '../assets/image/card_img.png'
import styles from '../styles/Payment.module.css'

const Payment: NextPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.paymentForm} action="" method="post">
        <div className={styles.row}>
          {/* billing address section */}
          <div className={styles.col}>
            <h3 className={styles.title}>billing address</h3>
            <div className={styles.inputBox}>
              <span>full name: </span>
              <input type="text" placeholder="Mr. Jon" />
            </div>
            <div className={styles.inputBox}>
              <span>email: </span>
              <input type="email" placeholder="jon@example.com" />
            </div>
            <div className={styles.inputBox}>
              <span>address: </span>
              <input type="text" placeholder="room - street - locality" />
            </div>
            <div className={styles.inputBox}>
              <span>city: </span>
              <input type="text" placeholder="new work" />
            </div>
            <div className={styles.flex}>
              <div className={styles.inputBox}>
                <span>state: </span>
                <input type="text" placeholder="USA" />
              </div>
              <div className={styles.inputBox}>
                <span>zip code: </span>
                <input type="text" placeholder="123 432" />
              </div>
            </div>
          </div>
          {/* payment section */}
          <div className={styles.col}>
            <h3 className={styles.title}>payment</h3>
            <div className={styles.inputBox}>
              <span>card accepted: </span>
              <Image className={styles.image} src={cardImag} alt="cardImag" />
            </div>
            <div className={styles.inputBox}>
              <span>name of card: </span>
              <input type="text" placeholder="Mr. Jon" />
            </div>
            <div className={styles.inputBox}>
              <span>credit card number: </span>
              <input type="number " placeholder="1111-2222-3333-4444" />
            </div>
            <div className={styles.inputBox}>
              <span>exp month: </span>
              <input type="text" placeholder="january" />
            </div>
            <div className={styles.flex}>
              <div className={styles.inputBox}>
                <span>exp year: </span>
                <input type="number" placeholder="2025" />
              </div>
              <div className={styles.inputBox}>
                <span>CVV: </span>
                <input type="text" placeholder="1234" />
              </div>
            </div>
          </div>
        </div>
        <input className={styles.submitBtn} type="submit" value="proceed to check" />
      </form>
    </div>
  )
}

export default Payment;