# Instantiate Bun
FROM oven/bun:latest

# Set timezone
ENV TZ=America/New_York

# Install git
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Mount into app directory
COPY . /app
WORKDIR /app

# Install project dependencies
RUN bun ci

# Return to app directory
RUN cd /app

# Open ports, start the application.
EXPOSE 8500
CMD ["bun", "start"]
# -----------------------------------------------------
