import { signIn, useSession } from "next-auth/react";
import React from "react";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";

import styles from "./SubscribeButton.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {

  const { status } = useSession();

  async function handleSubscribe() {
    if(status === "unauthenticated") {
      signIn('github')
      return;
    }

    try {
      const response = await api.post('/subscribe');
      const { sessionId } = response.data;
      const stripeJs = await getStripeJs();
      stripeJs.redirectToCheckout({ sessionId });
    } catch(err) {
      alert(err.message)
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}
