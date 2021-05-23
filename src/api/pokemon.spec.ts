import fetchMock from 'fetch-mock';

import { stripHtml } from '../helpers/utils';
import { getTranslation } from './pokemon';

describe("getTranslation", () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.reset();
  });

  it(" works correctly with Pikachu", async () => {
    fetchMock.mock({
      matcher: "https://pokeapi.co/api/v2/pokemon-species/pikachu/",
      method: "GET",
      response: {
        status: 200,
        body: {
          id: 25,
          flavor_text_entries: [
            {
              flavor_text:
                "When several of\nthese POKéMON\ngather, their electricity could\nbuild and cause\nlightning storms.",
              language: {
                name: "en",
              },
            },
          ],
        },
      },
    });

    fetchMock.mock({
      matcher: `https://api.funtranslations.com/translate/shakespeare.json?text=${encodeURI(
        stripHtml(
          "When several of\nthese POKéMON\ngather, their electricity could\nbuild and cause\nlightning storms."
        )
      )}`,
      method: "GET",
      response: {
        status: 200,
        body: {
          success: {
            total: 1,
          },
          contents: {
            translated:
              "When several of\nthese POKéMON\ngather, their electricity could\nbuild and cause\nlightning storms.",
          },
        },
      },
    });

    const response = await makeCall();
    expect(response).toStrictEqual({
      name: "pikachu",
      id: 25,
      text:
        "When several of\n" +
        "these POKéMON\n" +
        "gather, their electricity could\n" +
        "build and cause\n" +
        "lightning storms.",
    });
  });

  it(" in case of not found description throw an error", async () => {
    fetchMock.mock({
      matcher: "https://pokeapi.co/api/v2/pokemon-species/pikachu/",
      method: "GET",
      response: {
        status: 200,
        body: {
          id: 25,
          flavor_text_entries: [
            {
              flavor_text:
                "When several of\nthese POKéMON\ngather, their electricity could\nbuild and cause\nlightning storms.",
              language: {
                name: "nolanguage",
              },
            },
          ],
        },
      },
    });

    try {
      await makeCall();
      expect(1).toBe(2)
    } catch (error) {
      expect(error.type).toBe("GenericError");
      expect(error.message).toBe("Pokemon description to translate not found");
    }
  });
});

async function makeCall() {
  const controller = new AbortController();
  return await getTranslation("pikachu", controller.signal);
}
