FROM mysql:latest

# Expose the port
EXPOSE 3306

# Create directory for initialization scripts
RUN mkdir -p /docker-entrypoint-initdb.d

# Copy initialization scripts that will be executed sequentially based on their filenames
COPY init-dev-db.sql /docker-entrypoint-initdb.d/1-init-dev-db.sql
COPY init-test-db.sql /docker-entrypoint-initdb.d/2-init-test-db.sql
COPY init-prod-db.sql /docker-entrypoint-initdb.d/3-init-prod-db.sql