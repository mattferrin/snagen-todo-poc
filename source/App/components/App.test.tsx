import ShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import App from "./App";

type SnapInput = {
  readonly stabileSortId: string;
  readonly comment: string | null;
  readonly props: Parameters<typeof App>[0];
};

function snap(input: SnapInput): void {
  it(input.stabileSortId, () => {
    /** setup mocks */

    /** unit under test */
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<App {...input.props} />);
    const result = renderer.getRenderOutput();

    /** assertions */
    const comment = `${input.comment === "" ? "TODO: comment" : input.comment}`;
    expect({
      [comment]: { result },
    }).toMatchSnapshot();
  });
}

snap({
  stabileSortId: "a6fb76eb-b9bb-4711-bcbe-2168031eecf4",
  comment: "proved jest is working",
  props: { name: "Matt" },
});
