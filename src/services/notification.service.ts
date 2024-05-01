enum NotificationType {
  EMAIL = "email",
  SMS = "sms",
}

abstract class NotificationService {
  abstract send(): void;
}

class EmailNotificationService extends NotificationService {
  send(): void {
    console.log("Sending an email notification.");
  }
}

class SMSNotificationService extends NotificationService {
  send(): void {
    console.log("Sending an SMS notification.");
  }
}

class NotificationServiceFactory {
  createNotification(type: NotificationType): NotificationService {
    switch (type) {
      case NotificationType.SMS:
        return new SMSNotificationService();
      case NotificationType.EMAIL:
        return new EmailNotificationService();
      default:
        throw new Error("Unsupported notification type: " + type);
    }
  }
}
