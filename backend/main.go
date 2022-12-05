package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/websocket"
	"github.com/oovk/interact/pkg/websocket"
)

func serveWS(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("websocket endpoint reached")

	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%V\n", err)
	}
	//whenever someone hits the ws endpoint, it opens up a new client which is connected using pool
	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}
	//after the connection we write the content from client to Register channel of a pool
	pool.Register <- client
	client.Read() //read here is a struct method
}

func setupRoutes() {
	pool := websocket.NewPool() //function from websocket package
	go pool.Start()             //starting pool function as a concurrent process

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) { //websocket endpoint
		serveWS(pool, w, r)
	})
}

func main() {
	fmt.Println("Full stack chat application using GoLang and React")
	setupRoutes()
	http.ListenAndServe(":9000", nil)
}
