import { cleanString, stripHtml } from "./utils";

describe("cleanString", () => {
  it(" works with value ", () => {
    const result = cleanString("qwerty");
    expect(result).toBe("qwerty");
  });
  it(" works with no value", () => {
    const result1 = cleanString();
    const result2 = cleanString("");
    expect(result1).toBe("");
    expect(result1).toBe(result2);
  });
  it(" works with value and space", () => {
    const result = cleanString("qwerty qwerty");
    expect(result).toBe("qwertyqwerty");
  });

  it(" works with chars not allowed", () => {
    const result = cleanString('q!"£$%werty)(/&%');
    expect(result).toBe("qwerty");
  });
  it(" works with number", () => {
    const result = cleanString("12q34wer56ty789");
    expect(result).toBe("12q34wer56ty789");
  });
});

describe("stripHtml", () => {
  it(" works with no value", () => {
    const result = stripHtml("");
    expect(result).toBe("");
  });
  it(" works with value", () => {
    const result = stripHtml(
      "At which hour hunting,<br>'t skims the surface of water at high <p>speed to pick off unwary prey</p>"
    );
    expect(result).toBe(
      "At which hour hunting,'t skims the surface of water at high speed to pick off unwary prey"
    );
  });
});
