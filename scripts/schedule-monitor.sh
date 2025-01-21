#!/bin/bash
# /usr/local/bin/schedule-monitor.sh

LOG_FILE="../storage/logs/schedule-monitor.log"

# Log start of monitoring
echo "Schedule Monitoring Started: $(date)" >> "$LOG_FILE"

# Check Laravel scheduler
php /var/www/vulco/artisan schedule:list >> "$LOG_FILE" 2>&1

# Check last execution time
echo "Last Cron Execution:" >> "$LOG_FILE"
grep "CMD" /var/log/syslog | tail -n 5 >> "$LOG_FILE"

# Make executable
chmod +x /usr/local/bin/schedule-monitor.sh