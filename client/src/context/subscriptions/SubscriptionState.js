import SubscriptionContext from "./subscriptionContext";
import { useState } from "react";

const SubscriptionState = (props) => {
  const host = "http://localhost:5000"
  const subscriptionsInitial = []
  const [subscriptions, setSubscriptions] = useState(subscriptionsInitial)

  // get all subscription
  const getSubscription = async () => {
    // add API Call
    const response = await fetch(`${host}/api/subscriptions/fetchallsubscriptions`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json()
    console.log(json)
    setSubscriptions(json)
  }

  // Add a subscription
  const addSubscription = async (plan, interval) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/subscriptions/addsubscription`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({plan, interval})
    });
     
    const subscription = await response.json();
    setSubscriptions(subscriptions.concat(subscription))
  }

  // Delete a Subscription
  const deleteSubscription = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/subscriptions/deletesubscription/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = response.json(); 

    const newSubscriptions = subscriptions.filter((subscription) => { return subscription._id !== id })
    setSubscriptions(newSubscriptions)
  }

  return (
    <SubscriptionContext.Provider value={{ subscriptions, addSubscription, deleteSubscription, getSubscription }}>
      {props.children}
    </SubscriptionContext.Provider>
  )
}

export default SubscriptionState;
