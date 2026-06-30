def generate_reply(message):

    message = message.lower()

    if "late" in message or "delay" in message:
        return "I'm sorry for the delay. I'll check your order status and update you shortly."

    elif "refund" in message:
        return "I'm sorry to hear that. I'll help you with the refund process."

    elif "thank" in message:
        return "You're welcome! Please let us know if you need anything else."

    elif "cancel" in message:
        return "I can help you cancel your order. Let me verify the details first."

    return "Thank you for contacting us. I'll look into this and get back to you shortly."