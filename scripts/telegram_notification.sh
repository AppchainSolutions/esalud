#!/bin/bash
# Telegram Notification Script

# Debugging: Print all environment variables
set -x

# Absolute path to .env file
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ENV_FILE="$SCRIPT_DIR/../.env"

# Debugging: Print script and env file paths
echo "Script Directory: $SCRIPT_DIR"
echo "Env File Path: $ENV_FILE"

# Function to safely load environment variables
load_env() {
    if [ -f "$ENV_FILE" ]; then
        # Use grep to filter and sed to handle special characters
        export $(grep -E '^TELEGRAM_' "$ENV_FILE" | sed 's/#.*//g' | xargs -d '\n')
    else
        echo "❌ .env file not found at $ENV_FILE"
        exit 1
    fi
}

# Send Telegram message
send_telegram_alert() {
    local MESSAGE="${1:-Default notification message}"

    # Validate inputs
    if [ -z "$TELEGRAM_BOT_TOKEN" ]; then
        echo "❌ Telegram Bot Token is missing"
        exit 1
    fi

    if [ -z "$TELEGRAM_CHAT_ID" ]; then
        echo "❌ Telegram Chat ID is missing"
        exit 1
    fi

    # Telegram API URL
    TELEGRAM_API_URL="https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage"

    # Send message
    RESPONSE=$(curl -s -X POST "$TELEGRAM_API_URL" \
        -d "chat_id=$TELEGRAM_CHAT_ID" \
        -d "text=$MESSAGE")

    # Check response
    if echo "$RESPONSE" | grep -q '"ok":true'; then
        echo "✅ Telegram message sent successfully"
        return 0
    else
        echo "❌ Failed to send Telegram message"
        echo "Response: $RESPONSE"
        return 1
    fi
}

# Load environment variables
load_env

# Send message
send_telegram_alert "$@"