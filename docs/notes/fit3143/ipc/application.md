---
title: Application
createTime: 2025/08/02 22:28:56
permalink: /fit3143/vedhtlcr/
---

## TCP Server (`server.c`)

This program creates a simple TCP server that listens on a user-specified port. It's designed to accept a single client connection, read a message, send a reply, and then exit.

```c
/*
 * Simple TCP Server
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <netinet/in.h>

// Function to handle errors and exit
void error(const char *msg) {
    perror(msg);
    exit(1);
}

int main(int argc, char *argv[]) {
    if (argc < 2) {
        fprintf(stderr, "Usage: %s <port>\n", argv[0]);
        exit(1);
    }

    int sockfd, newsockfd;
    int portno;
    socklen_t clilen;
    char buffer[256];
    struct sockaddr_in serv_addr, cli_addr;

    // 1. Create a new socket
    sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd < 0) {
        error("ERROR opening socket");
    }

    bzero((char *) &serv_addr, sizeof(serv_addr));
    portno = atoi(argv[1]);

    // 2. Set up the server address structure
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_addr.s_addr = INADDR_ANY;
    serv_addr.sin_port = htons(portno);

    // 3. Bind the socket to the server address
    if (bind(sockfd, (struct sockaddr *) &serv_addr, sizeof(serv_addr)) < 0) {
        error("ERROR on binding");
    }

    // 4. Listen for incoming connections
    listen(sockfd, 5);
    printf("Server listening on port %d...\n", portno);

    clilen = sizeof(cli_addr);

    // 5. Accept a connection from a client
    newsockfd = accept(sockfd, (struct sockaddr *) &cli_addr, &clilen);
    if (newsockfd < 0) {
        error("ERROR on accept");
    }

    printf("Connection accepted from %s:%d\n", inet_ntoa(cli_addr.sin_addr), ntohs(cli_addr.sin_port));

    bzero(buffer, 256);

    // 6. Read data from the client
    int n = read(newsockfd, buffer, 255);
    if (n < 0) {
        error("ERROR reading from socket");
    }
    printf("Message from client: %s\n", buffer);

    // 7. Write a response to the client
    n = write(newsockfd, "Message received successfully!", 28);
    if (n < 0) {
        error("ERROR writing to socket");
    }

    // 8. Close the sockets
    close(newsockfd);
    close(sockfd);

    return 0;
}
```

### Explanation of `server.c`

  * **Includes**: The necessary headers for standard I/O, string manipulation, and socket programming functions and structures.
  * **Step 1: `socket()`**: Creates a socket endpoint. `AF_INET` specifies the IPv4 protocol family, and `SOCK_STREAM` specifies a reliable TCP connection.
  * **Step 2: Setup Address**: The `sockaddr_in` struct `serv_addr` is configured. `INADDR_ANY` tells it to accept connections from any network interface on the machine, and `htons()` converts the port number to network byte order.
  * **Step 3: `bind()`**: Assigns the address and port to the socket created in step 1. This is how the server "claims" a port to listen on.
  * **Step 4: `listen()`**: Puts the socket into a passive mode to wait for incoming client connections. The `5` indicates the size of the pending connection queue.
  * **Step 5: `accept()`**: This is a **blocking call**—the program waits here until a client connects. It then creates a *new* socket descriptor (`newsockfd`) for communicating with this specific client.
  * **Step 6 & 7: `read()` and `write()`**: Uses the new socket (`newsockfd`) to receive a message from the client and send a reply back.
  * **Step 8: `close()`**: Shuts down both the client-specific connection (`newsockfd`) and the main listening socket (`sockfd`) to release system resources.



## TCP Client (`client.c`)

This program connects to the server at a specified hostname and port. It reads a line of text from the user, sends it to the server, and prints the server's reply.

```c
/*
 * Simple TCP Client
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <netinet/in.h>
#include <netdb.h> // For gethostbyname

// Function to handle errors and exit
void error(const char *msg) {
    perror(msg);
    exit(1);
}

int main(int argc, char *argv[]) {
    if (argc < 3) {
        fprintf(stderr, "Usage: %s <hostname> <port>\n", argv[0]);
        exit(1);
    }

    int sockfd;
    int portno;
    int n;
    struct sockaddr_in serv_addr;
    struct hostent *server;
    char buffer[256];

    portno = atoi(argv[2]);

    // 1. Create a socket
    sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd < 0) {
        error("ERROR opening socket");
    }

    // 2. Resolve the hostname to an IP address
    server = gethostbyname(argv[1]);
    if (server == NULL) {
        fprintf(stderr, "ERROR, no such host\n");
        exit(0);
    }

    bzero((char *) &serv_addr, sizeof(serv_addr));
    serv_addr.sin_family = AF_INET;
    bcopy((char *)server->h_addr,
          (char *)&serv_addr.sin_addr.s_addr,
          server->h_length);
    serv_addr.sin_port = htons(portno);

    // 3. Connect to the server
    if (connect(sockfd, (struct sockaddr *) &serv_addr, sizeof(serv_addr)) < 0) {
        error("ERROR connecting");
    }

    // 4. Send a message to the server
    printf("Please enter the message: ");
    bzero(buffer, 256);
    fgets(buffer, 255, stdin);

    n = write(sockfd, buffer, strlen(buffer));
    if (n < 0) {
        error("ERROR writing to socket");
    }

    // 5. Receive the response from the server
    bzero(buffer, 256);
    n = read(sockfd, buffer, 255);
    if (n < 0) {
        error("ERROR reading from socket");
    }
    printf("Server response: %s\n", buffer);

    // 6. Close the socket
    close(sockfd);

    return 0;
}
```

### Explanation of `client.c`

  * **Step 1: `socket()`**: Creates the client's socket endpoint, just like the server.
  * **Step 2: `gethostbyname()`**: This function resolves a hostname (e.g., "localhost") into an IP address that the network can understand. The address is then copied into the `serv_addr` struct.
  * **Step 3: `connect()`**: This is the key client function. It attempts to establish a TCP connection with the server at the IP address and port specified in `serv_addr`.
  * **Step 4 & 5: `write()` and `read()`**: After a successful connection, the client sends a message to the server and waits to receive a reply.
  * **Step 6: `close()`**: Terminates the connection and releases the socket.



## Makefile

This `Makefile` provides rules to automate the compilation of the `server` and `client` programs.

```makefile
# Makefile for Simple TCP Client/Server

# Compiler
CC = gcc

# Compiler flags
# -g: Add debug information
# -Wall: Turn on all warnings
CFLAGS = -g -Wall

# Target executables
TARGETS = server client

# Default rule: build all targets
all: $(TARGETS)

# Rule to build the server
server: server.c
	$(CC) $(CFLAGS) -o server server.c

# Rule to build the client
client: client.c
	$(CC) $(CFLAGS) -o client client.c

# Rule to clean up compiled files
clean:
	rm -f $(TARGETS)
```

### Explanation of `Makefile`

  * **`all`**: This is the default rule. Running `make` will build both `server` and `client`.
  * **`server` & `client` rules**: These specify how to compile each source file into an executable.
  * **`clean`**: A utility rule. Running `make clean` will remove the compiled executable files.



## How to Compile and Run

1.  **Save the Files**: Save the three code blocks above as `server.c`, `client.c`, and `Makefile` in the same directory.
2.  **Compile**: Open a terminal in that directory and run the command `make`.
3.  **Start the Server**: In one terminal window, start the server:
    ```bash
    ./server 8888
    ```
4.  **Run the Client**: Open a *second* terminal window and connect to the server:
    ```bash
    ./client localhost 8888
    ```
5.  **Communicate**: The client terminal will prompt for a message. Type something and press Enter. You'll see the message appear on the server and a confirmation reply on the client.