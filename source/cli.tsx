#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./App/components/App";

const cli = meow(
  `
	Usage
	  $ snagen

	Options
		--name  Your name

	Examples
	  $ snagen --name=Jane
	  Hello, Jane
`,
  {
    flags: {
      name: {
        type: "string",
      },
    },
  }
);

// eslint-disable-next-line functional/no-expression-statement
render(<App name={cli.flags.name} />);
