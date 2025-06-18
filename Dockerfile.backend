FROM golang:1.21

WORKDIR /app
COPY backend/ .

RUN go mod init backend && go get github.com/lib/pq && go build -o main .

CMD ["./main"]
