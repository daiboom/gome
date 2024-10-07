package main

import (
	"fmt"
	"os"

	"github.com/jessevdk/go-flags"
)

type Options struct {
}

var OptionsInstance Options
var Parser = flags.NewParser(&OptionsInstance, flags.Default)

func main() {
	if _, err := Parser.Parse(); err != nil {
		if flagsErr, ok := err.(*flags.Error); ok && flagsErr.Type == flags.ErrHelp {
			os.Exit(0)
		} else {
			fmt.Fprintln(os.Stdout)
			Parser.WriteHelp(os.Stdout)
			os.Exit(1)
		}
	}
}
