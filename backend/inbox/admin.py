from django.contrib import admin

from .models import Conversation
from .models import Message
from .models import ConversationLock


admin.site.register(Conversation)
admin.site.register(Message)
admin.site.register(ConversationLock)