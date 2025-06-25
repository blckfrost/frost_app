FROM golang:1.21

WORKDIR /app

# Copy all files from the build context (./backend) to the container
COPY . .

# Initialize Go module and build
RUN go mod init backend && go get github.com/lib/pq && go build -o main .

# Run the application
CMD ["./main"]
