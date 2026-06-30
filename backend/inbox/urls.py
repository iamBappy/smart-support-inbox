from django.urls import path

from .views import (
    ConversationListView,
    ConversationDetailView, 
    ReplyView,
    SuggestReplyView,
    LockView,
    UnlockView,
)

urlpatterns = [
    path(
        "conversations/",
        ConversationListView.as_view(),
        name="conversation-list",
    ),

    path(
        "conversations/<int:pk>/",
        ConversationDetailView.as_view(),
        name="conversation-detail",
    ),

    path(
    "conversations/<int:pk>/reply/",
    ReplyView.as_view(),
    name="conversation-reply",
    ),

    path(
    "conversations/<int:pk>/suggest-reply/",
    SuggestReplyView.as_view(),
    name="suggest-reply",
    ),

    path(
    "conversations/<int:pk>/lock/",
    LockView.as_view(),
    name="lock-conversation",
    ),

    path(
    "conversations/<int:pk>/unlock/",
    UnlockView.as_view(),
    name="unlock-conversation",
    ),
]
