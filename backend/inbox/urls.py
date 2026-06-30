from django.urls import path

from .views import (
    ConversationListView,
    ConversationDetailView, 
    ReplyView,
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
]
