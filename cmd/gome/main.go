package main

import (
	"log"
	"net/http"
	"os"
)

func fileExists(filename string) bool {
	info, err := os.Stat(filename)
	if os.IsNotExist(err) {
		return false
	}
	return !info.IsDir()
}

func main() {

	fs := http.FileServer(http.Dir("./dist/ui"))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		path := "./dist/ui" + r.URL.Path
		if fileExists(path) {
			fs.ServeHTTP(w, r)
		} else {
			http.ServeFile(w, r, "./dist/ui/index.html")
		}
	})

	port := ":8999"

	log.Println("UI 서버 시작: http://localhost" + port)

	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatal(err)
	}
}
