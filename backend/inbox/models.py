from django.db import models
from django.contrib.auth.models import User


class Conversation(models.Model):
    STATUS_CHOICES = [
        ("open", "Open"),
        ("pending", "Pending"),
        ("closed", "Closed"),
    ]

    customer_name = models.CharField(max_length=100)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="open")
    sentiment = models.CharField(max_length=20, default="Neutral")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.customer_name


class Message(models.Model):
    SENDER_CHOICES = [
        ("customer", "Customer"),
        ("agent", "Agent"),
    ]

    conversation = models.ForeignKey(
        Conversation,
        on_delete=models.CASCADE,
        related_name="messages"
    )

    sender = models.CharField(max_length=20, choices=SENDER_CHOICES)
    message = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender} - {self.conversation.customer_name}"


class ConversationLock(models.Model):
    conversation = models.OneToOneField(
        Conversation,
        on_delete=models.CASCADE
    )

    locked_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    locked_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.conversation.customer_name} locked by {self.locked_by.username}"