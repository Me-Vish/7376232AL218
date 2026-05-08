# Stage 1

## REST APIs

GET /notifications

Returns all notifications.

GET /notifications/:id

Returns single notification.

POST /notifications

Creates notification.

# Stage 2

Using MongoDB because it scales well for large notification data.

# Stage 3

Use indexing on:
- studentID
- createdAt

# Stage 4

Use caching and pagination to reduce DB load.

# Stage 5

Use queue system for bulk notifications.

# Stage 6

Priority notifications sorted using:
- Placement
- Result
- Event

# Stage 7

Frontend built using React and responsive UI.